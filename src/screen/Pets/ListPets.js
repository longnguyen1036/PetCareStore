import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  FlatList,
} from 'react-native';
import React from 'react';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Block from '../../components/Block';
import {INSERT_PETS_SCREEN} from '../../router/ScreenName';

const DATA = [
  {
    id: '1',
    title: 'First Item',
    price: 800000,
    image: require('../../assets/image/productpet1.png'),
  },
  {
    id: '2',
    title: 'Second Item',
    price: 900000,
    image: require('../../assets/image/productpet2.png'),
  },
  {
    id: '3',
    title: 'Third Item',
    price: 100000,
    image: require('../../assets/image/productpet1.png'),
  },
  {
    id: '4',
    title: 'Four Item',
    price: 100000,
    image: require('../../assets/image/productpet2.png'),
  },
  {
    id: '5',
    title: 'Five Item',
    price: 100000,
    image: require('../../assets/image/productpet1.png'),
  },
  {
    id: '6',
    title: 'Five Item',
    price: 100000,
    image: require('../../assets/image/productpet2.png'),
  },
];

const Item = ({title, price, image}) => (
  
  <View
    style={{
      backgroundColor: '#E6EAED',
      width: 160,
      height: 200,
      borderRadius: 8,
      paddingHorizontal: 8,
      marginRight: '5%',
      marginTop: '2%',
      marginLeft: '5%',
    }}>
    <Block alignCenter marginTop={'5%'} >
      <Image style={{width: 100, height: 110}} source={image}></Image>
    </Block>
    <View
      style={{
        backgroundColor: 'white',
        borderRadius: 5,
        marginTop: '8%',
        paddingHorizontal: 5,
        paddingVertical: 5,
      }}>
      <View style={{marginTop: '2%'}}>
        <Text style={{fontSize: 15, fontWeight: '500', color: 'black'}}>
          {title}
        </Text>
      </View>
      <View
        style={{
          marginTop: '5%',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text style={{color: 'black'}}>{price}</Text>
        <TouchableOpacity
          style={{
            backgroundColor: '#E6EAED',
            borderRadius: 5,
            width: 25,
            height: 25,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <FontAwesome5
            style={{}}
            color={'black'}
            name="chevron-right"
            size={18}
          />
        </TouchableOpacity>
      </View>
    </View>
  </View>
);

const ListPets = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesome5
            style={{}}
            color={'black'}
            name="chevron-left"
            size={25}
          />
        </TouchableOpacity>
        <View>
          <Text style={styles.textHeader}>Thú Cưng</Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate(INSERT_PETS_SCREEN)}>
          <FontAwesome5 style={{}} color={'black'} name="plus" size={25} />
        </TouchableOpacity>
      </View>

      <Block paddingHorizontal={10}>
        <Block
          backgroundColor={'#F2F3F2'}
          row={1}
          justifyCenter
          alignCenter
          height={40}
          borderRadius={15}
          margin={10}>
          <FontAwesome5
            style={styles.seachImage}
            color={'black'}
            name="search"
            size={20}
          />
          <TextInput
            placeholder="Tìm kiếm"
            style={{flex: 1}}
            underlineColorAndroid="transparent"></TextInput>
        </Block>
      </Block>

      <SafeAreaView >
        <FlatList
          numColumns={2}
          data={DATA}
          renderItem={({item}) => (
            <Item title={item.title} price={item.price} image={item.image} />
          )}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    </View>
  );
};

export default ListPets;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '5%',
    paddingVertical: '3%',
  },
  textHeader: {
    fontSize: 20,
    fontWeight: '700',
    color: 'black',
  },
  seachImage: {
    padding: 10,
    marginLeft: 10,
    alignItems: 'center',
  },
});
