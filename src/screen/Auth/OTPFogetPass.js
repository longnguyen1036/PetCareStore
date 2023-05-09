import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Modal,
  Pressable,
} from 'react-native';
import React, {useState, useContext} from 'react';
import OTPTextInput from 'react-native-otp-textinput';
import authApi from '../../api/authApi';
import {CREATE_NEW_PASS} from './../../router/ScreenName';

const OTPFogetPass = ({navigation}) => {
  const [otp, setOtp] = useState();

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity
          style={styles.nut}
          onPress={() => {
            navigation.goBack();
          }}>
          <Image
            style={styles.back}
            source={require('../../assets/image/back.png')}></Image>
        </TouchableOpacity>
      </View>
      <View style={styles.v2}>
        <Text style={styles.t1}>Xác nhận mã OTP</Text>
        <Text style={styles.t2}>Mã OTP đã được gửi đến</Text>
      </View>
      <View style={styles.v3}>
        <OTPTextInput
          defaultValue={otp}
          handleTextChange={setOtp}
          inputCount={6}
        />
      </View>
      <View style={styles.v4}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate(CREATE_NEW_PASS)}>
          <Text style={styles.t4}>Tiếp theo</Text>
        </TouchableOpacity>
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
              style={{width: 60, height: 60}}
              source={require('../../assets/image/warning.png')}></Image>
            <Text style={styles.modalText}>Mã OTP không đúng!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Đồng ý</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default OTPFogetPass;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  nut: {
    marginLeft: 10,
    width: 30,
    height: 30,
    backgroundColor: '#F2F7FC',
    alignItems: 'center',
    borderRadius: 15,
    padding: 10,
  },
  v2: {
    marginTop: 15,
    paddingLeft: 20,
    paddingRight: 20,
  },
  v3: {
    marginTop: 25,
    paddingLeft: 20,
    paddingRight: 20,
  },
  v4: {
    marginTop: 35,
    alignItems: 'center',
  },
  t1: {
    fontFamily: 'Manrope',
    fontWeight: '700',
    fontStyle: 'normal',
    fontSize: 20,
    color: '#172E4C',
  },
  t2: {
    fontSize: 14,
    fontWeight: '400',
    fontStyle: 'normal',
    fontFamily: 'Manrope',
  },
  t3: {
    fontSize: 14,
    fontWeight: '400',
    fontStyle: 'normal',
    fontFamily: 'Manrope',
    color: '#172E4C',
  },
  ip: {
    borderBottomWidth: 1,
    borderColor: '#EBEBEB',
  },
  btn: {
    width: 330,
    height: 40,
    backgroundColor: '#52B4FF',
    borderRadius: 6,
    alignItems: 'center',
    paddingTop: 10,
  },
  t4: {
    fontSize: 14,
    fontWeight: '400',
    fontStyle: 'normal',
    fontFamily: 'Manrope',
    color: 'white',
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
});
