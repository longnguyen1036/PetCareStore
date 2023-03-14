import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Foundation from 'react-native-vector-icons/Foundation';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { CHART_SCREEN, HOME_SCREEN, NOTIFICATION_SCREEN, PROFILE_SCREEN,
        

} from './ScreenName';
import { Home } from '../screen/Main';
import { Chart } from '../screen/Statistical';
import Notification from '../screen/Notification/Notification';
import Profile from '../screen/Profile/Profile';
const Tab = createBottomTabNavigator();

function MyTab(){
    return(
        <Tab.Navigator
      screenOptions={{headerShown: false, activeTintColor: '#FF781F'}}
      initialRouteName="Home">

      <Tab.Screen
        name={HOME_SCREEN}
        component={Home}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
        
      />
      <Tab.Screen
        name={CHART_SCREEN}
        component={Chart}
        options={{
          headerShown: false,
          tabBarLabel: 'Chart',
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="favorite" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={NOTIFICATION_SCREEN}
        component={Notification}
        options={{
          headerShown: false,
          tabBarLabel: 'Notification',
          tabBarIcon: ({color, size}) => (
            <Foundation name="book-bookmark" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={PROFILE_SCREEN}
        component={Profile}
        options={{
          headerShown: false,
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size}) => (
            <FontAwesome name="user" color={color} size={size}  />
          ),
        }}
      />
    </Tab.Navigator>
    )
    }
export {MyTab}