import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();
import {navigationRef1} from './NavigationServices';
import AuthStack from './AuthStack';
import {MyTab} from './BottomNavigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Home} from '../screen/Main';

import {useDispatch, useSelector} from 'react-redux';
import {loggedAction, logoutAction} from '../redux/actions/authAction';

import {InsertPet, ListPets, PetDetail, UpdatePet} from '../screen/Pets';
import {
  InsertProduct,
  ListProducts,
  ProductDetail,
  UpdateProduct,
} from '../screen/Product';
import {ListServices} from '../screen/Services';
import InsertService from '../screen/Services/InsertService';
import UpdateService from '../screen/Services/UpdateService';
import ServiceDetail from '../screen/Services/ServiceDetail';
import {
  CHAT,
  EDIT_PETS_SCREEN,
  EDIT_PRODUCTS_SCREEN,
  EDIT_PROFILE_ACCOUNT,
  EDIT_PROFILE_ADDRESS,
  EDIT_SERVICES_SCREEN,
  HOME_SCREEN,
  INSERT_PETS_SCREEN,
  INSERT_PRODUCTS_SCREEN,
  INSERT_SERVICES_SCREEN,
  LIST_CHAT,
  MAIN_TAB,
  MANEGER_SERVICES_SCREEN,
  NOTIFICATION_SCREEN,
  PETS_DETAIL_SCREEN,
  PETS_SCREEN,
  PET_NOTIFICATION_SCREEN,
  PRODUCTS_DETAIL_SCREEN,
  PRODUCTS_SCREEN,
  PRODUCT_NOTIFICATION_SCREEN,
  SERVICES_DETAIL_SCREEN,
  SERVICES_SCREEN,
  SERVICE_NOTIFICATION_SCREEN,
} from './ScreenName';
import {Notification} from '../screen/Notification';
import ManegerService from './ManegerService';
import { Chat, ListChat } from '../screen/Messenger';
import { ChangeAcount, ChangeAddress } from '../screen/Profile';



function MainStack(props) {
  return (
    <Stack.Navigator
      initialRouteName={MAIN_TAB}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={MAIN_TAB} component={MyTab} />
      <Stack.Screen name={HOME_SCREEN} component={Home} />
      <Stack.Screen name={PETS_SCREEN} component={ListPets} />
      <Stack.Screen name={PRODUCTS_SCREEN} component={ListProducts} />
      <Stack.Screen name={SERVICES_SCREEN} component={ListServices} />
      <Stack.Screen name={PETS_DETAIL_SCREEN} component={PetDetail} />
      <Stack.Screen name={PRODUCTS_DETAIL_SCREEN} component={ProductDetail} />
      <Stack.Screen name={SERVICES_DETAIL_SCREEN} component={ServiceDetail} />
      <Stack.Screen name={INSERT_PETS_SCREEN} component={InsertPet} />
      <Stack.Screen name={INSERT_PRODUCTS_SCREEN} component={InsertProduct} />
      <Stack.Screen name={INSERT_SERVICES_SCREEN} component={InsertService} />
      <Stack.Screen name={EDIT_PETS_SCREEN} component={UpdatePet} />
      <Stack.Screen name={EDIT_PRODUCTS_SCREEN} component={UpdateProduct} />
      <Stack.Screen name={EDIT_SERVICES_SCREEN} component={UpdateService} />
      <Stack.Screen name={NOTIFICATION_SCREEN} component={Notification} />
      <Stack.Screen name={MANEGER_SERVICES_SCREEN} component={ManegerService} />
      <Stack.Screen name={LIST_CHAT} component={ListChat} />
      <Stack.Screen name={CHAT} component={Chat} />
      <Stack.Screen name={EDIT_PROFILE_ACCOUNT} component={ChangeAcount} />
      <Stack.Screen name={EDIT_PROFILE_ADDRESS} component={ChangeAddress} />
    </Stack.Navigator>
  );
}

function MainNavigation() {
  const [checkLogin, setCheckLogin] = useState();
  const authState = useSelector(state => state.authState.logged);
  console.log('authStatedasdasd', authState);

  const dispatch = useDispatch();
  useEffect(() => {
    const getCheckLogin = async () => {
      const checkDangNhap = await AsyncStorage.getItem('checkLogin');
      setCheckLogin(checkDangNhap);
      console.log('Check Dang Nhap', checkDangNhap);
      if (checkDangNhap == true) {
        dispatch(loggedAction());
      } else {
        dispatch(logoutAction());
      }
    };
    getCheckLogin();
  }, [checkLogin]);

  return (
    <NavigationContainer ref={navigationRef1}>
      {authState == true ? <MainStack /> : <AuthStack />}
    
    </NavigationContainer>
  );
}
export default MainNavigation;
