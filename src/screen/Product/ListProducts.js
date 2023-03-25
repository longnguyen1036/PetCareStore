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
import Block from '../../components/Block';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {INSERT_PRODUCTS_SCREEN, PRODUCTS_DETAIL_SCREEN} from '../../router/ScreenName';
const DATA = [
  {
    id: '1',
    title: 'First Item',
    price: 800000,
    image: require('../../assets/image/profileavatar.png'),
  },
  {
    id: '2',
    title: 'Second Item',
    price: 900000,
    image: require('../../assets/image/profileavatar.png'),
  },
  {
    id: '3',
    title: 'Third Item',
    price: 100000,
    image: require('../../assets/image/profileavatar.png'),
  },
  {
    id: '4',
    title: 'Four Item',
    price: 100000,
    image: require('../../assets/image/profileavatar.png'),
  },
  {
    id: '5',
    title: 'Five Item',
    price: 100000,
    image: require('../../assets/image/profileavatar.png'),
  },
];



const ListProducts = ({navigation}) => {


  const Item = ({title, price, image}) => (

    <TouchableOpacity onPress={()=> navigation.navigate(PRODUCTS_DETAIL_SCREEN)}
    style={{
      backgroundColor: '#F2F3F2',
      width: 160,
      height: 200,
      borderRadius: 8,
      paddingHorizontal: 8,
      marginRight: '5%',
      marginTop: '2%',
      marginLeft: '5%',
    }}>
    <Block alignCenter marginTop={'2%'} >
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
          marginTop: '8%',
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
  </TouchableOpacity>
  );
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
          <Text style={styles.textHeader}>Sản phẩm</Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate(INSERT_PRODUCTS_SCREEN)}>
          <FontAwesome5 style={{}} color={'black'} name="plus" size={25} />
        </TouchableOpacity>
      </View>

      <Block paddingHorizontal={10}>
        <Block
          row={1}
          justifyCenter
          alignCenter
          backgroundColor={'#F2F3F2'}
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

export default ListProducts;

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
