import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();
import { navigationRef1 } from './NavigationServices';
import AuthStack from './AuthStack';
import { MyTab } from './BottomNavigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Home } from '../screen/Main';
import { HOME_SCREEN, MAIN_TAB } from './ScreenName';

function MainStack(){
    return(
        <Stack.Navigator
      initialRouteName={MAIN_TAB}
      screenOptions={{headerShown: false}}>

      <Stack.Screen name={MAIN_TAB} component={MyTab} />
      <Stack.Screen name={HOME_SCREEN} component={Home} />
    
      </Stack.Navigator>
    )
}

function MainNavigation() {
    return (
      <NavigationContainer ref={navigationRef1}>
         <MainStack />  
      </NavigationContainer>
    );
  }
export default MainNavigation;
