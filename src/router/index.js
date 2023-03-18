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
import { useDispatch,useSelector } from 'react-redux';
import { loggedAction, logoutAction } from '../redux/actions/authAction';

function MainStack(props){
  
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
  
  const [checkLogin, setCheckLogin] = useState();
  const authState = useSelector(state => state.authState.logged)
  console.log('authStatedasdasd', authState);

  const dispatch = useDispatch()
  useEffect(() => {
    const getCheckLogin = async () => {
      const checkDangNhap = await AsyncStorage.getItem('checkLogin');
      setCheckLogin(checkDangNhap);
      console.log('Check Dang Nhap', checkDangNhap);
      if(checkDangNhap == true){
        dispatch(loggedAction())
      }else{
        dispatch(logoutAction())
      }
    };
    getCheckLogin();
  }, [checkLogin]);

    return (
      <NavigationContainer ref={navigationRef1}>
        {/* {authState == true ? <MainStack /> : <AuthStack />} */}
        <MainStack/>
      </NavigationContainer>
    );
  }
export default MainNavigation;
