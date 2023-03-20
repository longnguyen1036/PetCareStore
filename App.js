import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import { MyTab } from './src/router/BottomNavigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import MainNavigation from './src/router';

function App1(){
  return(
    <Provider store={store}>
      
    <SafeAreaProvider>
   
      <MainNavigation />
    
    </SafeAreaProvider>
    
  </Provider>
  )
}

const App = () => {
  return (
   
    <Provider store={store}>
      <App1/>
    </Provider>
 
  )
  
  
};

export default App;

const styles = StyleSheet.create({});
