import { View, Image, TouchableOpacity, StyleSheet, TextInput, FlatList} from 'react-native'
import React from 'react'
import Block from '../../components/Block'
import Text  from '../../components/Text'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { CHAT } from '../../router/ScreenName';


const ListChat = ({navigation}) => {

  const DATA = [
    {
      id: 1,
      name: 'Phuoc',
      day: '10-04-2023'
    },
    {
      id: 2,
      name: 'Long',
      day: '05-04-2023'
    },
  ];
  
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity onPress={()=> navigation.navigate(CHAT)}>
        <Block
          margin={'1%'}
          backgroundColor={'#ECF2F8'}
          width={'98%'}
          height={70}
          radius={10}>
          <Block row justifySpaceBetween>
            <Block width={'72%'} height={97} marginTop={10} marginLeft={10}>
              <Block row>
                <Block marginLeft={10}>
                  <Text>{item.name}</Text>
                  <Text size={10}>5 min ago</Text>
                </Block>
              </Block>
              
            </Block>
            <Image
              style={{width: 55, height: 55, margin: 1, backgroundColor: 'green', borderRadius: 15, marginRight: 10, marginTop: '2%'}}
              source={require('../../assets/image/dog.png')}></Image>
          </Block>
        </Block>
      </TouchableOpacity>
    );
  };

  return (
    <Block flex={1} backgroundColor={'white'} >
      <Block row={1} paddingVertical={10} paddingHorizontal={10}>
      <TouchableOpacity style={{width: '40%'}} onPress={() => navigation.goBack()}>
          
          <Image
            source={require('./../../assets/image/backpet.png')}
            style={{marginTop: 8}}></Image>
        
      </TouchableOpacity>
        <Block width={'50%'}>
          <Text size={20} color={'black'} bold>
            Messenger
          </Text>
        </Block>
      </Block>

      <Block paddingHorizontal={10}>
        <Block
          row={1}
          justifyCenter
          alignCenter
          backgroundColor={'#F2F3F2'}
          height={40}
          borderRadius={15}
          margin={10}>
          <Image
            source={require('./../../assets/image/timkiempet.png')}
            style={styles.seachImage}></Image>
          <TextInput
            placeholder="Tìm kiếm"
            style={{flex: 1}}
            underlineColorAndroid="transparent"></TextInput>
        </Block>
      </Block>

      <Block marginTop={5} paddingHorizontal={10}>
        <FlatList key={DATA.name} data={DATA} renderItem={renderItem} />
      </Block>
    </Block>
  )
}

export default ListChat
const styles = StyleSheet.create({
  seachImage: {
    padding: 10,
    marginLeft: 10,
    height: 20,
    width: 20,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  ilist: {
    width: 100,
    height: 110,
    marginLeft: '18%',
  },
  nut: {
    width: 32,
    height: 32,
    backgroundColor: '#F2F3F2',
    position: 'absolute',
    right: '5%',
    bottom: '8%',
    alignItems: 'center',
    borderRadius: 4,
    paddingTop: '15%',
  },
});