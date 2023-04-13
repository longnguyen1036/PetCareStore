import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, { useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { navigate } from '../../router/NavigationServices';
import { LOGIN_SCREEN } from '../../router/ScreenName';
import { loggedAction } from '../../redux/actions/authAction';
import { useDispatch, useSelector} from 'react-redux';

const Welcome = ({navigation}) => {
    const [currentPage, setCurrentPage] = useState(0);
    const dispatch = useDispatch();

    // const data = {
    //     "name": "toan",
    //     "age": 16,
    //     "sex": "male",
    // }

    const handleNextPage = () => {
      setCurrentPage(currentPage + 1);
      console.log('currentPage: ', currentPage)
      // dispatch(loggedAction(data))
    };
    const tieptuc = () => {
      console.log('tieptuc', currentPage);
      navigation.navigate(LOGIN_SCREEN);
      
    }
  
  
    const welcome1 = () => {
     if(currentPage === 0){
      return (
        <Text style={styles.vb}>
          Với dịch vụ chăm sóc thú cưng, 
          bạn sẽ làm cho cuộc sống của những người bạn
           lông lá của chúng ta hạnh phúc hơn.
        </Text>
      );
     }
      
    };
    const welcome2 = () => {
      if(currentPage === 1){
        return (
          <Text style={styles.vb}>
            Với dịch vụ chăm sóc thú cưng, 
          bạn sẽ làm cho cuộc sống của những người bạn
           lông lá của chúng ta hạnh phúc hơn.
          </Text>
        );
       }
    };
    const welcome3 = () => {
      if(currentPage === 2){
        return (
          <Text style={styles.vb}>
            Với dịch vụ chăm sóc thú cưng, 
          bạn sẽ làm cho cuộc sống của những người bạn
           lông lá của chúng ta hạnh phúc hơn.
          </Text>
        );
       }
    };
    return (
      <View style={styles.container}>
        <Image
          style={styles.hinh}
          source={require('../../assets/image/main.png')}></Image>
  
        <Text style={styles.h1}>Xin chào bạn đến với </Text>
        <Text style={styles.h2}>Pet Care</Text>

        {
          currentPage === 0 ? 
          <View>{welcome1()}</View> : null
        }
         {
          currentPage === 1 ? 
          <View>{welcome2()}</View> : null
        }
         {
          currentPage === 2 ? 
          <View>{welcome3()}</View> : null
        }
      <View style={styles.bacham}>
        {currentPage === 0 ? <Ionicons color={'#18A2E1'} name="radio-button-on" size={10}/> 
        : <Ionicons name="radio-button-off" size={10}/>}
  
        {currentPage === 1 ? <Ionicons name="radio-button-on" color={'#18A2E1'}  size={10}/> 
        : <Ionicons name="radio-button-off" size={10}/>}
  
        {currentPage === 2 ? <Ionicons name="radio-button-on"  color={'#18A2E1'}  size={10}/> 
        : <Ionicons name="radio-button-off" size={10}/>}
  </View>
        {
          currentPage === 0 || currentPage === 1 ? 
          <TouchableOpacity style={styles.nut} onPress={()=>handleNextPage()}>
          <Text style={{color: 'white'}}>Tiếp tục</Text>
        </TouchableOpacity> :
        <TouchableOpacity style={styles.nut} onPress={()=> tieptuc()}>
        <Text style={{color: 'white'}}>Bắt đầu</Text>
      </TouchableOpacity>
        }
        
      </View>
    );
  };

export default Welcome

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FBFBFB',
        width: '100%',
        height: '100%',
      },
    
      pagerView: {
        width: '90%',
        height: 200,
        marginTop: 20,
        marginLeft: '5%',
      },
      hinh: {
        marginTop: 20,
        marginLeft: '-10%',
        width: '120%',
        height: 350,
      },
      h1: {
        fontSize: 20,
        textAlign: 'center',
        color:'#0D4C92',
      },
      h2: {
        fontSize: 25,
        textAlign: 'center',
        color:'#0D4C92',
      },
      nut: {
        marginTop: '5%',
        width: '50%',
        height: 50,
        backgroundColor: '#18A2E1',
        borderRadius: 2,
        marginLeft: '26%',
        alignItems: 'center',
        paddingTop: '3%',
      },
      cham: {
        width: 10,
        height: 10,
      },
      bacham : {
        flexDirection: 'row',
        marginLeft: '45%',
        marginTop: '10%',
      },

      vb:{
        paddingTop: '5%',
        textAlign: 'center',
        marginLeft: '10%',
        width: '80%',
        height: 100,
      }
})