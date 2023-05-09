import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  FlatList,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import Block from '../../components/Block';
import Text from '../../components/Text';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {
  INSERT_PETS_SCREEN,
  INSERT_SERVICES_SCREEN,
  SERVICES_DETAIL_SCREEN,
} from '../../router/ScreenName';
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
      <Block
            marginLeft={'4%'}
            backgroundColor={'white'}
            width={'92%'}
            // height={130}
            row
            marginTop={10} 
            radius={10}
            // alignCenter
            padding={12}
            >
            <Image style={styles.ilist} source={{uri: imgService}}></Image>
            
              <Block marginLeft={'2%'} width={'74%'} >
                <Text numberOfLines={1} color={'#18A2E1'} size={18}>
                 Dịch vụ: {nameService}
                </Text>
                <Text  marginTop={4} size={16}>Giá: {formatMoney(priceService)}</Text>
                <Text numberOfLines={2} marginTop={4} size={14}>Mô tả: {descriptionService}</Text>
              </Block>
             
            </Block>
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
          backgroundColor={'white'}
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

      <SafeAreaView style={{paddingHorizontal: '2%', flex: 1}}>
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
    backgroundColor: '#F2F3F2',
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
  ilist: {
    width: 90,
    height: 100,
    marginLeft: '2%',
    marginTop: '2%',
  },
});
