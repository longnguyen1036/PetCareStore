import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  FlatList,
  TextInput,
  TouchableOpacity,
  Image,
  Text,
  StyleSheet,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Block from '../../components/Block';
import SocketManager from './SocketManager';
import { useRoute } from '@react-navigation/native';

const Chat = ({navigation}) => {
  const [inputmess, SetInputMess] = useState('');
  const router = useRoute();
  
  const {data, id, idSocketUser} = router.params;
  const [message, setMessage] = useState([]);


  const sendMessage = () => {
    try {
      SetInputMess('')
      const data = {
        id: id,
        socketId: idSocketUser,
        mess: inputmess,
        table: 'store',
      };
      const socket = SocketManager.getSocket();
     
      socket.emit('sendmess', data);
     
    } catch (error) {
      console.log(error);
    }
  };

  const CutArray = () => {
    const cutarray = data.map(item => {
       const [key, value] = item.split(':');
       return {[key]: value};
     });
     setMessage(cutarray);

   };

   useEffect(() => {
    CutArray();
  }, []);


    const socket = SocketManager.getSocket();
    socket.on('mgs', (data) => {
      console.log('data', data);
    });
    socket.on('checkerror', error => {
      console.log('error socket', error);
    });


  

  const renderItem = ({item}) => {
    const key = Object.keys(item)[0];
    const value = item[key];
    
    return (
      <View style={styles.messageContainer}>
        <View style={[styles.messageBubble, {backgroundColor: key === '1' ? 'pink' : 'cyan' , marginLeft: key === '1' ? 'auto' : 0 , marginRight:key === '2' ? 'auto' : 0  }]}>
          <Text style={styles.messageText}>{value}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Block row={1} paddingVertical={10} paddingHorizontal={10}>
      <TouchableOpacity style={{width: '40%'}} onPress={() => navigation.goBack()}>
          
          <Image
            source={require('./../../assets/image/backpet.png')}
            style={{marginTop: 8}}></Image>
        
      </TouchableOpacity>
        <Block width={'50%'}>
          <Text style={{color: 'black', fontWeight: 'bold', fontSize: 20}}>
           Username
          </Text>
        </Block>
      </Block>
      <FlatList
        
        data={message}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        
      />
      <View style={styles.inputContainer}>
      <TextInput
          value={inputmess}
          style={styles.input}
          placeholder="Type your message here"
          onChangeText={text => SetInputMess(text)}
        />
        <TouchableOpacity style={styles.sendButton} onPress={()=> sendMessage()} >
          <FontAwesome name={'send'} size={25}/>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Chat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
    padding: 10,
  },
  messageContainer: {
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
    marginVertical: 5,
  },
  avatar: {
    backgroundColor: 'green',
    width: 30,
    height: 30,
    borderRadius: 15,
    marginHorizontal: 10,
  },
  messageBubble: {
    width:'auto', 
    height: '100%',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    maxWidth: '100%', 
    marginEnd: 'auto',
    
  },
  messageText: {
    fontSize: 16,
    

  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
  },
  sendButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  input: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
    fontSize: 16,
    borderWidth: 1,
  }
 
})
