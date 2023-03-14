import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  ConfirmOTP,
  CreateNewPass,
  ForgetPass,
  Login,
  Register,
  Welcome,
} from './src/screen/Auth';

import { MyTab } from './src/router/BottomNavigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import MainNavigation from './src/router';

const App = () => {
  return (
    <SafeAreaProvider>
    <Provider store={store}>
      <MainNavigation></MainNavigation>
    </Provider>
  </SafeAreaProvider>
  )
  
  
};

export default App;

const styles = StyleSheet.create({});
