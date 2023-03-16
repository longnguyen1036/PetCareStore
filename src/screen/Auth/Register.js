import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Image,
  TouchableOpacity,
  Alert,
  Modal,
  Pressable,
} from 'react-native';
import React, { useState, useContext } from 'react';
import { CONFIRM_OTP_SCREEN } from './../../router/ScreenName';
import { ToastAndroid } from 'react-native/Libraries/Components/ToastAndroid/ToastAndroid';
import authApi from '../../api/authApi';

const Register = ({ navigation }) => {
  const [hidden, setHidden] = useState(true);
  const [hidden1, setHidden1] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [nameAccount, setNameAccount] = useState('');
  const [emailAccount, setEmailAccount] = useState('');
  const [passwordAccount, setPasswordAccount] = useState('');
  const [confirmPassWord, setConfirmPassWord] = useState('');
  const [addressStore, setAddressStore] = useState('');
  const [phoneStore, setPhoneStore] = useState();
  const [checkUser, setCheckUser] = useState();

  const hiddenPassWord = () => {
    setHidden(!hidden);
  };
  const hiddenPassWord1 = () => {
    setHidden1(!hidden1);
  };

  const register = async () => {
    const emailRegex = /\S+@\S+.\S+/;
    const isValidEmail = emailRegex.test(emailAccount);
    console.log('log emaill', emailAccount);

    if (passwordAccount.localeCompare(confirmPassWord) == 0) {
      try {
        if (nameAccount == '' || emailAccount == '' || passwordAccount == '' || addressStore == '' || phoneStore == '') {
          setModalVisible(true);
        } else if (!isValidEmail) {
          console.log('Email khong hop le');
        } else {
          submitRegister();
        }
      } catch (e) {
        console.log('register error: ', e);
      }
    } else {
      Alert.alert('Mật khẩu và xác nhận mật khẩu không giống nhau !!');
    }
  };

  // const checkEmail = (emailAccount) => {
  //   const emailRegex = /\S+@\S+.\S+/;
  //   const isValidEmail = emailRegex.test(emailAccount);
  //   console.log('log emaill',emailAccount)
  //   if (isValidEmail) {
  //     console.log('Email hợp lệ');
  //     navigation.navigate('CONFIRM_OTP_SCREEN');
  //   } else {
  //     console.log('Email không đúng định dạng');
  //   }
  // };

  const submitRegister = async () => {
    const user = await authApi.Register(
      nameAccount,
      emailAccount,
      passwordAccount,
      addressStore,
      phoneStore
    );
    setCheckUser(user.status);
    console.log('data', user.status);
    if (user.status === 200) {
      navigation.navigate('CONFIRM_OTP_SCREEN');
    } else {
      console.log('loi');
    }
  };
  return (
    <ScrollView>
      <View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 20,
          }}>
          <Image style={styles.hinh} source={require('../../assets/image/phonenumber.png')}></Image>
        </View>

        <View style={{ width: '100%', paddingHorizontal: 15 }}>
          <Text style={{ fontSize: 20, color: 'black', paddingBottom: 20 }}>
            Đăng ký
          </Text>
          <TextInput
            style={{
              width: '100%',
              borderWidth: 1,
              marginVertical: 5,
              borderRadius: 6,
              paddingLeft: 15,
              borderColor: '#DADFE6',
            }}
            placeholder="Nhập tên tài khoản"
            onChangeText={setNameAccount}
            value={nameAccount}
          />
          <TextInput
            style={{
              width: '100%',
              borderWidth: 1,
              marginVertical: 5,
              borderRadius: 6,
              paddingLeft: 15,
              borderColor: '#DADFE6',
            }}
            placeholder="Nhập email"
            onChangeText={setEmailAccount}
            value={emailAccount}
          />
          <TextInput
            style={{
              width: '100%',
              borderWidth: 1,
              marginVertical: 5,
              borderRadius: 6,
              paddingLeft: 15,
              borderColor: '#DADFE6',
            }}
            placeholder="Nhập địa chỉ cửa hàng"
            onChangeText={setAddressStore}
            value={addressStore}
          />
          <TextInput
            style={{
              width: '100%',
              borderWidth: 1,
              marginVertical: 5,
              borderRadius: 6,
              paddingLeft: 15,
              borderColor: '#DADFE6',
            }}
            placeholder="Nhập số điện thoại cửa hàng"
            onChangeText={setPhoneStore}
            value={phoneStore}
          />
          <TextInput
            style={{
              width: '100%',
              borderWidth: 1,
              marginVertical: 5,
              borderRadius: 6,
              paddingLeft: 15,
              borderColor: '#DADFE6',
            }}
            onChangeText={setPasswordAccount}
            value={passwordAccount}
            placeholder="Nhập mật khẩu"
            secureTextEntry={hidden}></TextInput>
          <TouchableOpacity onPress={hiddenPassWord}>
            {hidden ? (
              <Image
                style={styles.icon}
                name="eye"
                size={20}
                color={'orange'}
                source={require('../../assets/image/pass.png')}
              />
            ) : (
              <Image
                style={styles.icon}
                name="eye-off"
                size={20}
                color={'orange'}
                source={require('../../assets/image/unpass.png')}
              />
            )}
          </TouchableOpacity>
          <TextInput
            style={{
              width: '100%',
              borderWidth: 1,
              marginVertical: 5,
              borderRadius: 6,
              paddingLeft: 15,
              borderColor: '#DADFE6',
            }}
            onChangeText={setConfirmPassWord}
            placeholder="Nhập lại mật khẩu"
            secureTextEntry={hidden1}></TextInput>
          <TouchableOpacity onPress={hiddenPassWord1}>
            {hidden1 ? (
              <Image
                style={styles.icon}
                name="eye"
                size={20}
                color={'orange'}
                source={require('../../assets/image/pass.png')}
              />
            ) : (
              <Image
                style={styles.icon}
                name="eye-off"
                size={20}
                color={'orange'}
                source={require('../../assets/image/unpass.png')}
              />
            )}
          </TouchableOpacity>

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
            onPress={() => register()}>
            <Text style={{ fontSize: 17, color: 'white', fontWeight: 'bold' }}>
              Đăng ký
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Image
              style={{ width: 60, height: 60 }}
              source={require('../../assets/image/warning.png')}></Image>
            <Text style={styles.modalText}>
              {' '}
              Bạn chưa nhập đầy đủ thông tin!
            </Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Đồng ý</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

export default Register;

const styles = StyleSheet.create({
  icon: {
    width: 18,
    height: 12,
    position: 'absolute',
    top: -35,
    right: 15,
  },
  modalView: {
    margin: 30,
    marginTop: '60%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 5,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#52B4FF',
  },
  buttonClose: {
    backgroundColor: '#52B4FF',
    width: 200,
  },
  textStyle: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  hinh: {
    marginTop: 20,
    marginLeft: '5%',
    width: '100%',
    height: 350,
  },
});
