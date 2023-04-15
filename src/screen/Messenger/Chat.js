import React, { useState, useRef } from 'react';
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


const Chat = ({navigation}) => {
  const [message, setMessage] = useState('');
  const [message2, setMessage2] = useState([
    {
      id: '1',
      text: 'Hello there!',
      sender: 'other',
    },
    {
      id: '2',
      text: 'Hi, how are you?',
      sender: 'me',
    },
    {
      id: '3',
      text: 'I am doing well, thanks. And you?',
      sender: 'other',
    },
  ]);



  const sendMessage = () => {
      setMessage(message);
    
  };

  const renderItem = ({ item }) => {
    const isMe = item.sender === 'me';
    const align = isMe ? 'flex-end' : 'flex-start';
    const backgroundColor = isMe ? '#DCF8C5' : '#FFFFFF';

    return (
      <View style={[styles.messageContainer, { alignItems: align }]}>
        {/* {!isMe && ( */}
          {/* <Image
          source={require('../../assets/image/phonenumber.png')} 
            style={styles.avatar}
          /> */}
        {/* )} */}
        
        <View style={[styles.messageBubble, { backgroundColor, }]}>
          
          <Text style={styles.messageText}>{item.text}</Text>
          
        </View>
       
        {/* {isMe && (
          <Image
          source={require('../../assets/image/phonenumber.png')} 
            style={styles.avatar}
          /> 
        )}  */}
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
        
        data={message2}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={message}
          onChangeText={setMessage}
          placeholder="Type your message here"
        />
        <TouchableOpacity style={styles.sendButton} onPress={()=> sendMessage(setMessage())} >
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
