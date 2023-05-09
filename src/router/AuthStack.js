import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  Login,
  Register,
  Welcome,
  ForgetPass,
  ConfirmOTP,
  CreateNewPass,
} from './../screen/Auth';

import {
  WELCOME_SCREEN,
  LOGIN_SCREEN,
  REGISTER_SCREEN,
  FORGET_PASS,
  CONFIRM_OTP_SCREEN,
  CREATE_NEW_PASS,
  OTP_FORGET_PASS_SCREEN,
  MAIN_TAB,
} from './ScreenName';
import OTPFogetPass from '../screen/Auth/OTPFogetPass';

const Stack = createStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator
      initialRouteName={WELCOME_SCREEN}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={WELCOME_SCREEN} component={Welcome}></Stack.Screen>
      <Stack.Screen name={LOGIN_SCREEN} component={Login}></Stack.Screen>
      <Stack.Screen name={REGISTER_SCREEN} component={Register}></Stack.Screen>
      <Stack.Screen name={FORGET_PASS} component={ForgetPass}></Stack.Screen>
      <Stack.Screen
        name={CONFIRM_OTP_SCREEN}
        component={ConfirmOTP}></Stack.Screen>
      <Stack.Screen
        name={CREATE_NEW_PASS}
        component={CreateNewPass}></Stack.Screen>
      <Stack.Screen
        name={OTP_FORGET_PASS_SCREEN}
        component={OTPFogetPass}></Stack.Screen>
    </Stack.Navigator>
  );
}

export default AuthStack;
