import {Alert, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';

import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import MainNavigation from './src/router';
import {NotifierWrapper} from 'react-native-notifier';

import messaging from '@react-native-firebase/messaging';
import notifee, {AndroidImportance, AndroidStyle} from '@notifee/react-native';

const createChannel = async () => {
  const channel = await notifee.createChannel({
    id: 'alarm',
    name: 'Firing alarms & timers',
    lights: false,
    vibration: true,
    importance: AndroidImportance.DEFAULT,
  });
  return channel
}

function App() {

  const checkPermission = async () => {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log('Authorization status:', authStatus);
    }
  };


  useEffect(() => {
    checkPermission();
    createChannel();
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
      // Extract the message data
      const {title, body} = remoteMessage.notification;

      // Display a notification using Notifee
      await notifee.displayNotification({
        title,
        body,
        android: {
          channelId: 'default', // Use the channel ID
          pressAction: {
            id: 'default', // Use the default press action
          },
          style: {
            type: AndroidStyle.BIGPICTURE,
            picture: 'https://picsum.photos/800/450',
          },
        },
      });
      console.log('notification', remoteMessage);
    });

    return unsubscribe;
    
  }, []);
  return (
    <Provider store={store}>
      <NotifierWrapper>
        <MainNavigation />
      </NotifierWrapper>
    </Provider>
  );
}

export default App;

const styles = StyleSheet.create({});
