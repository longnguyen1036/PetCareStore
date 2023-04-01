import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

import {Notifier, Easing, NotifierComponents} from 'react-native-notifier';



const Chart = () => {
  return (
    <View>
      <TouchableOpacity onPress={()=>{
        Notifier.showNotification({
          title: 'John Doe',
          description: 'Hello! Can you help me with notifications?',
          duration: 3000,
          showAnimationDuration: 800,
          showEasing: Easing.bounce,
          onHidden: () => console.log('Hidden'),
          onPress: () => console.log('Press'),
          hideOnPress: false,
        });
      } }>
        <Text>Chart</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{
        Notifier.showNotification({
          title: 'Check this image!',
          description: 'Cool, right?',
          Component: NotifierComponents.Notification,
          componentProps: {
            imageSource: require('./../../assets/image/caphe.png'),
          },
        });
      } }>
        <Text>Image</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{
        Notifier.showNotification({
          title: 'The request was failed',
          description: 'Check your internet connection, please',
          Component: NotifierComponents.Alert,
          componentProps: {
            alertType: 'success',
          },
        });
      } }>
        <Text>Success</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>{
        Notifier.showNotification({
          title: 'The request was failed',
          description: 'Check your internet connection, please',
          Component: NotifierComponents.Alert,
          componentProps: {
            alertType: 'error',
          },
        });
      } }>
        <Text>Error</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Chart;

const styles = StyleSheet.create({});
