import { StyleSheet, View } from 'react-native'
import React from 'react'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import { ALL_NOTIFICATION_SCREEN, CONFIRMED_SERVICES_SCREEN, CONFIRM_SERVICES_SCREEN, PET_NOTIFICATION_SCREEN, PRODUCT_NOTIFICATION_SCREEN, SERVICE_NOTIFICATION_SCREEN } from './ScreenName';
import { AllNotification, PetNotification, ProductNotification, ServiceNotification } from '../screen/Notification';
import Block from '../components/Block';
import Text from '../components/Text';
import ConfirmServices from '../screen/ManegerService/ConfirmServices';
import ConfirmedServices from '../screen/ManegerService/ConfirmedServices';

const Tab = createMaterialTopTabNavigator();

const ManegerService = () => {
  return (
<Block flex={1} backgroundColor={'#E6EAED'}>
  <Block height={50} width={'100%'}>
    <Block marginLeft={10} marginTop={5}>
    <Text size={20} bold>Quản lý dịch vụ</Text>
    <Text>Ban co thong bao moi</Text>
    </Block>
  </Block>
  <Tab.Navigator
        screenOptions={{
            tabBarLabelStyle: { fontSize: 16, fontWeight: 'bold' },
            tabBarStyle: {backgroundColor: '#E6EAED'},
        }}
       >
        <Tab.Screen
          options={{title: 'Chờ xác nhận'}}
          name={CONFIRM_SERVICES_SCREEN}
          component={ConfirmServices}
        />

        <Tab.Screen
          options={{title: 'Đã xác nhận'}}
          name={CONFIRMED_SERVICES_SCREEN}
          component={ConfirmedServices}
        />
        
      </Tab.Navigator>
    </Block>
  );
};

export default ManegerService;

const styles = StyleSheet.create({})