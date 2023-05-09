import { StyleSheet, View, TextInput, TouchableOpacity, Pressable, ScrollView } from 'react-native'
import React, {useState} from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useTogglePasswordVisibility } from '../../components/Custom/useTogglePasswordVisibility'
import Block from '../../components/Block'
import Text from '../../components/Text'

const ChangeAcount = ({navigation}) => {

    const { passwordVisibility, rightIcon, handlePasswordVisibility } =
    useTogglePasswordVisibility();
    const [password, setPassword] = useState('');
    const [newpassword, setNewPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');


    



  return (
    <Block>
      <Block row={1} alignCenter width={'100%'} justifySpaceBetween paddingHorizontal={10} marginTop={'5%'} >
        <TouchableOpacity onPress={()=> navigation.goBack()}>
        <Ionicons name='chevron-back-outline' size={30} />
        </TouchableOpacity>
        <Text style = {{ width: '70%', color: 'black', fontSize: 20, fontWeight: 'bold' }}>Chỉnh sửa tài khoản</Text>

      </Block>

      
      <Block paddingHorizontal={20} marginTop={'17%'}>
        <Text color={'black'} size={16}>Tên tài khoản</Text>
        <TextInput style = {{borderBottomWidth: 0.5}} placeholder='Nhập tên tài khoản'></TextInput>
      </Block>

      <Block paddingHorizontal={20} marginTop={'5%'}>
        <Text color={'black'} size={16}>Mật khẩu hiện tại</Text>
        <Block width={'100%'} row={1} alignCenter>
        <TextInput 
            secureTextEntry = {passwordVisibility}
            value={password}
            enablesReturnKeyAutomatically
            onChangeText={text => setPassword(text)}
            autoCapitalize="none"
            name="password"
            autoCorrect={false} style = {{borderBottomWidth: 0.5, width: '90%'}} placeholder='Nhập mật khẩu hiện tại'></TextInput>
        <Pressable onPress={handlePasswordVisibility}>
          <Ionicons name={rightIcon} size={22} color="#232323" />
        </Pressable>
        </Block>
        
      </Block>

      <Block paddingHorizontal={20} marginTop={'5%'}>
        <Text color={'black'} size={16}>Mật khẩu mới</Text>
        <Block width={'100%'} row={1} alignCenter>

        <TextInput 
         secureTextEntry = {passwordVisibility}
         value={newpassword}
         enablesReturnKeyAutomatically
         onChangeText={text => setNewPassword(text)}
         autoCapitalize="none"
         name="newpassword"
         autoCorrect={false} style = {{borderBottomWidth: 0.5, width: '90%'}} placeholder='Nhập mật khẩu mới'></TextInput>
        <Pressable onPress={handlePasswordVisibility}>
          <Ionicons name={rightIcon} size={22} color="#232323" />
        </Pressable>
        </Block>
        
      </Block>

      <Block paddingHorizontal={20} marginTop={'5%'}>
        <Text color={'black'} size={16}>Xác nhận mật khẩu</Text>

        <Block width={'100%'} row={1} alignCenter>

        <TextInput
           secureTextEntry = {passwordVisibility}
           value={confirmpassword}
           enablesReturnKeyAutomatically
           onChangeText={text => setConfirmPassword(text)}
           autoCapitalize="none"
           name="confirmpassword"
           autoCorrect={false} style = {{borderBottomWidth: 0.5, width: '90%'}} placeholder='Xác nhận mật khẩu mới'></TextInput>
        <Pressable onPress={handlePasswordVisibility}>
          <Ionicons name={rightIcon} size={22} color="#232323" />
        </Pressable>

        </Block>
         
      </Block>

      <Block paddingHorizontal={20} marginTop={'15%'}>
        <TouchableOpacity style = {{backgroundColor: '#52B4FF', width: '100%', height: '30%',
            alignItems: 'center', justifyContent: 'center', borderRadius: 8,}}>
                    <Text color={'white'} size={17} bold>Xác nhận</Text>
        </TouchableOpacity>
      </Block>
    </Block>
  )
}

export default ChangeAcount

const styles = StyleSheet.create({})