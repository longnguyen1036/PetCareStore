import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
  Modal,
  Pressable,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {FORGET_PASS, REGISTER_SCREEN} from '../../router/ScreenName';
import {useDispatch, useSelector} from 'react-redux';
import authApi from '../../api/authApi';
import { loggedAction } from '../../redux/actions/authAction';
import {CREATE_NEW_PASS, MAIN_TAB} from './../../router/ScreenName';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {setToken, getToken} from '../../helper/auth';
import messaging from '@react-native-firebase/messaging';
import { io } from 'socket.io-client';
import SocketManager from '../Messenger/SocketManager';

const Login = ({navigation}) => {
  const dispatch = useDispatch()
  const authState = useSelector(state => state.authState.logged)
  
  const [modalVisible, setModalVisible] = useState(false);
  const [emailStore, setEmailStore] = useState('prolatui112233@gmail.com');
  const [passStore, setPassStore] = useState('123');
  const [fcmTokenFireBase, setFcmTokenFireBase] = useState()


  const registerAppWithFCM = async () => {
    await messaging().registerDeviceForRemoteMessages();
  
    // Lấy token FCM cho thiết bị hiện tại
    const fcmToken = await messaging().getToken();
    console.log('FCM Token:', fcmToken);
    setFcmTokenFireBase(fcmToken);

  };

  const connectSocket = async () => {
    try {
      const data = {
        emailAccount: emailStore,
        table: 'store'
      }
      const socket = SocketManager.getSocket();
      socket.on('connect', () => {
        // console.log('connected to server');
      });
  
      const res =  socket.emit('Login', data);
      // console.log('ressss', res);
      socket.on('checkLogin', (data) => {
          // console.log('data socket', data);
      })
    } catch (error) {
      console.log(error)
    }
    }

  useEffect(() => {
    registerAppWithFCM()
  },[])

  const Login = async () => {
    try {
      if ( emailStore == '' || passStore == '') {
        setModalVisible(true);
      }
      const res = await authApi.Login(
        emailStore, 
        passStore,
      );
      if (res.status != 200) {
        setModalVisible(true);
      } else {
        AsyncStorage.setItem('checkLogin', 'true');
        const checkLogin = await AsyncStorage.getItem('checkLogin'); 
        dispatch(loggedAction(res.data));
        // console.log('checkLogin', res.data.token)
        await setToken(res.data.token)
        connectSocket();
      }
    } catch (e) {
      console.log('login error: ', e);
      setModalVisible(true);
    }
  };


  return (
    <ScrollView>
      <View>
        <View style={{justifyContent: 'center', alignItems: 'center', marginLeft: 20,}}>
          <Image source={require('../../assets/image/phonenumber.png')} style={styles.hinh}></Image>
        </View>

        <View style={{width: '100%', paddingHorizontal: 15}}>
          <Text style={{fontSize: 20, color: 'black'}}>Đăng nhập</Text>
          <TextInput
            style={{
              width: '100%',
              borderWidth: 1,
              marginVertical: 20,
              borderRadius: 5,
              paddingLeft: 15,
              borderColor: '#DADFE6',
            }}
            placeholder="Nhập Email"
            onChangeText={setEmailStore}
            value={emailStore}
          />
          <TextInput
            style={{
              width: '100%',
              borderWidth: 1,
              borderRadius: 10,
              paddingLeft: 15,
              borderColor: '#DADFE6',
            }}
            secureTextEntry
            onChangeText={setPassStore}
            value={passStore}
            placeholder="Nhập mật khẩu"
          />
          <View style={{width: '100%', alignItems: 'flex-end', marginTop: 10}}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate(FORGET_PASS);
              }}>
              <Text>Quên mật khẩu?</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={{
              width: '100%',
              backgroundColor: '#52B4FF',
              height: 45,
              borderRadius: 8,
              alignItems: 'center',
              justifyContent: 'center',
              padding: 8,
              marginTop: 10,
            }}
            onPress={() => Login()}>
            <Text style={{fontSize: 17, color: 'white', fontWeight: 'bold'}}>
              Đăng nhập
            </Text>
          </TouchableOpacity>

          <View
            style={{
              width: '100%',
              marginTop: 10,
              flexDirection: 'row',
              marginLeft: '20%',
            }}>
              <Text>Người dùng mới? </Text>
              <TouchableOpacity
  
                onPress={() => {
                  navigation.navigate(REGISTER_SCREEN);
                }}>
                <Text style={{color: '#52B4FF',}}>  Tạo tài khoản</Text>
              </TouchableOpacity>
            
          </View>
        </View>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Image style={{width: 60, height: 60}}  source={require('../../assets/image/warning.png')}></Image>
            <Text style={styles.modalText}>Chua nhap dung tài khoản hoặc mật khẩu!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Đồng ý</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </ScrollView>
    
  );
};

export default Login;

const styles = StyleSheet.create({
  modalView: {
    margin: 30,
    marginTop: '60%',
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 5,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#52B4FF",
  },
  buttonClose: {
    backgroundColor: "#52B4FF",
    width: 200,
  },
  textStyle: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  hinh: {
    marginTop: 20,
    marginLeft: '5%',
    width: '100%',
    height: 350,
  },
});
