import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();
import AuthStack from './AuthStack';
import AsyncStorage from '@react-native-async-storage/async-storage';

      initialRouteName={MAIN_TAB}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={MAIN_TAB} component={MyTab} />
      <Stack.Screen name={HOME_SCREEN} component={Home} />
}

function MainNavigation() {
  const [checkLogin, setCheckLogin] = useState();
  console.log('authStatedasdasd', authState);

  useEffect(() => {
    const getCheckLogin = async () => {
      const checkDangNhap = await AsyncStorage.getItem('checkLogin');
      setCheckLogin(checkDangNhap);
      console.log('Check Dang Nhap', checkDangNhap);
      }
    };
    getCheckLogin();
  }, [checkLogin]);

export default MainNavigation;
