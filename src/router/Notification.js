import { StyleSheet, View } from 'react-native'
import React from 'react'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import { ALL_NOTIFICATION_SCREEN, PET_NOTIFICATION_SCREEN, PRODUCT_NOTIFICATION_SCREEN, SERVICE_NOTIFICATION_SCREEN } from './ScreenName';
import { AllNotification, PetNotification, ProductNotification, ServiceNotification } from '../screen/Notification';
import Block from '../components/Block';
import Text from '../components/Text';

const Tab = createMaterialTopTabNavigator();

const Notification = () => {
  return (
<Block flex={1} backgroundColor={'white'}>
  <Block height={50} width={'100%'}>
    <Block marginLeft={10} marginTop={5}>
    <Text size={20} bold>Notification</Text>
    <Text>Ban co thong bao moi</Text>
    </Block>
  </Block>
    <Tab.Navigator 
    screenOptions={{
      tabBarLabelStyle: {color: 'skyblue', fontSize: 10},
    }}>
      <Tab.Screen
      options={{title: 'Tất cả'}}
        name={ALL_NOTIFICATION_SCREEN}
        component={AllNotification}
      />
      <Tab.Screen
      options={{title: 'Thú cưng'}}
        name={PET_NOTIFICATION_SCREEN}
        component={PetNotification}
      />
      <Tab.Screen
      options={{title: 'Sản phẩm'}}
        name={PRODUCT_NOTIFICATION_SCREEN}
        component={ProductNotification}
      />
      <Tab.Screen
      options={{title: 'Dịch vụ'}}
        name={SERVICE_NOTIFICATION_SCREEN}
        component={ServiceNotification}
      />
    </Tab.Navigator>

    </Block>
  );
};

export default Notification

const styles = StyleSheet.create({})