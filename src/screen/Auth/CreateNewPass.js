import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  SafeAreaView,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CreateNewPass = ({navigation}) => {
  const [hidden, setHidden] = useState(true);
  const [hidden1, setHidden1] = useState(true);

  const hiddenPassWord = () => {
    setHidden(!hidden);
  };
  const hiddenPassWord1 = () => {
    setHidden1(!hidden1);
  };
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
        <Text style={styles.t1}>Mật khẩu mới</Text>
        <Text style={styles.t2}>Vui lòng nhập mật khẩu mới</Text>
      </View>
      <View style={styles.v3}>
        <Text style={styles.t3}>Mật khẩu mới</Text>
        <TextInput
          style={styles.ip}
          placeholder="Nhập mật khẩu mới"
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
      </View>
      <View style={styles.v3}>
        <Text style={styles.t3}>Xác nhận mật khẩu</Text>
        <TextInput
          style={styles.ip}
          placeholder="Xác nhận mật khẩu mới"
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
      </View>
      <View style={styles.v4}>
        <TouchableOpacity
          style={styles.btn}>
          <Text style={styles.t4}>Xác nhận</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default CreateNewPass

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
  icon: {
    width: 16,
    height: 10,
    position: 'absolute',
    top: -29,
    right: 10,
  },
})