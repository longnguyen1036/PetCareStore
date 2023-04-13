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
import React, {useCallback, useEffect, useState} from 'react';
import Block from '../../components/Block';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {
  INSERT_PETS_SCREEN,
  INSERT_SERVICES_SCREEN,
  SERVICES_DETAIL_SCREEN,
} from '../../router/ScreenName';
<<<<<<< HEAD

const DATA = [
  {
    id: '1',
    title: 'First Item',
    price: 800000,
    price1: 900000,
    address:
      'Địa chỉ: 147 Nguyễn Sỹ Sách, phường 15, Tân Bình, thành phố Hồ Chí Minh.',
    image: require('../../assets/image/profileavatar.png'),
  },
  {
    id: '2',
    title: 'First Item',
    price: 700000,
    price1: 800000,
    address:
      'Địa chỉ: 147 Nguyễn Sỹ Sách, phường 15, Tân Bình, thành phố Hồ Chí Minh.',
    image: require('../../assets/image/profileavatar.png'),
  },
  {
    id: '3',
    title: 'First Item',
    price: 600000,
    price1: 700000,
    address:
      'Địa chỉ: 147 Nguyễn Sỹ Sách, phường 15, Tân Bình, thành phố Hồ Chí Minh.',
    image: require('../../assets/image/profileavatar.png'),
  },
  {
    id: '4',
    title: 'First Item',
    price: 500000,
    price1: 600000,
    address:
      'Địa chỉ: 147 Nguyễn Sỹ Sách, phường 15, Tân Bình, thành phố Hồ Chí Minh.',
    image: require('../../assets/image/profileavatar.png'),
  },
  {
    id: '5',
    title: 'First Item',
    price: 400000,
    price1: 400000,
    address:
      'Địa chỉ: 147 Nguyễn Sỹ Sách, phường 15, Tân Bình, thành phố Hồ Chí Minh.',
    image: require('../../assets/image/profileavatar.png'),
  },
];



const ListServices = ({navigation}) => {

  const Item = ({title, price, image, price1, address}) => (
    <TouchableOpacity
    onPress={() => navigation.navigate(SERVICES_DETAIL_SCREEN)}
      style={{
        width: '100%',
        backgroundColor: '#E6EAED',
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 10,
        borderRadius: 8,
        marginTop: '3%',
      }}>
      <Block alignCenter marginTop={'2%'}>
        <Image style={{width: 100, height: 120}} source={image}></Image>
      </Block>
      <View
        style={{
          backgroundColor: 'white',
          paddingLeft: '4%',
          borderRadius: 10
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
  
          }}>
          <View>
            <Text style={{fontSize: 18, color: 'black'}}>{title}</Text>
            <Text style={{color: 'red'}}>{price}</Text>
            <Text style={{color: 'black'}}>{price1}</Text>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: '#F2F3F2',
              borderRadius: 5,
              width: 30,
              height: 30, 
              paddingLeft: '5%',
              paddingTop: '2%',
              marginRight: '4%'
            }}>
            <FontAwesome5
              style={{}}
              color={'black'}
              name="chevron-right"
              size={18}
            />
          </TouchableOpacity>
        </View>
        <View>
          <Text>Cửa hàng: Petmart</Text>
          <Text style={{width: 250, fontSize: 16, color: 'black'}}>
            {address}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
=======
import productApi from '../../api/productApi';
import formatMoney from '../../components/FormatMoney';
import { useFocusEffect } from '@react-navigation/native';

const ListServices = ({navigation}) => {
  const [listProduct, setListProduct] = useState([]);

  const getAllProduct = async () => {
    const getListProductApi = await productApi.getAllProduct();
    // console.log('getAllProductApi', getListProductApi.data.data[1]);

    setListProduct(getListProductApi.data.data[1]);
  };

  useEffect(() => {
    getAllProduct();
  }, []);


  useFocusEffect(
    useCallback(() => {
      getAllProduct();
    }, []),
  );

  const Item = ({
    _id,
    descriptionService,
    imgService,
    nameService,
    priceService,
    quantityService,
    timeService,
    typeService,
  }) => (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate(SERVICES_DETAIL_SCREEN, {
          _id: _id,
          descriptionService: descriptionService,
          imgService: imgService,
          nameService: nameService,
          priceService: priceService,
          quantityService: quantityService,
          timeService: timeService,
          typeService: typeService,
        })
      }>
      <View
        style={{
          width: '100%',
          backgroundColor: '#E6EAED',
          flexDirection: 'row',
          paddingVertical: 10,
          borderRadius: 8,
          marginTop: '3%',
        }}>
        <Image
          style={{
            width: 100,
            height: 120,
            borderRadius: 8,
            marginLeft: '2%',
            marginRight: '2%',
          }}
          source={{uri: imgService}}></Image>

        <Block
          radius={4}
          width={'68%'}
          height={120}
          backgroundColor={'white'}
          paddingLeft={'2%'}>
          <Block row justifySpaceBetween width={'95%'} >
            <Block>
              <Text style={{color: 'black', fontSize: 18, fontWeight: '500', width: 190, height: 20}}>
                Tên: {nameService}
              </Text>
              <Text style={{color: 'black'}}>Giá: {formatMoney(priceService)}</Text>
              <Text style={{color: 'red'}}>KM: {formatMoney(priceService*8/10)}</Text>

              <Text>Dành cho: {typeService}</Text>
            </Block>
            <TouchableOpacity
              style={{
                backgroundColor: '#E6EAED',
                borderRadius: 5,
                width: 35,
                height: 35,
                marginTop: '4%',
                marginRight: '0%',
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
          </Block>
          <Text style ={{width: '99%', marginTop: '2%', color: 'black' }}>
          Mô tả: {descriptionService} Mô tả này dài lắm nên phải để đoạn text này dài
            ra.
          </Text>
        </Block>
      </View>
    </TouchableOpacity>
  );

>>>>>>> Long
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
          <Text style={styles.textHeader}>Dịch vụ</Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate(INSERT_SERVICES_SCREEN)}>
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

      <SafeAreaView style={{paddingHorizontal: '2%'}}>
        <FlatList
          data={listProduct}
          renderItem={({item}) => (
            <Item
              _id={item._id}
              descriptionService={item.descriptionService}
              imgService={item.imgService}
              nameService={item.nameService}
              priceService={item.priceService}
              quantityService={item.quantityService}
              timeService={item.timeService}
              typeService={item.typeService}
            />
          )}
          keyExtractor={item => item._id}
        />
      </SafeAreaView>
    </View>
  );
};

export default ListServices;

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
