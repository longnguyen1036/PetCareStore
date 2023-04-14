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
import React, {useState, useEffect, useCallback} from 'react';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Block from '../../components/Block';
import {INSERT_PETS_SCREEN, PETS_DETAIL_SCREEN} from '../../router/ScreenName';
import productApi from '../../api/productApi';
import formatMoney from '../../components/FormatMoney';
import { useFocusEffect } from '@react-navigation/native';
const ListPets = ({navigation}) => {
  const [listProduct, setListProduct] = useState([]);

  const getAllProduct = async () => {
    const getListProductApi = await productApi.getAllProduct();
    // console.log('getAllProductApi', getListProductApi.data.data[2]);

    setListProduct(getListProductApi.data.data[2]);
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
    agePet,
    _id,
    code,
    descriptionPet,
    imgPet,
    genderPet,
    namePet,
    pricePet,
    quantityPet,
    typePet,
  }) => (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate(PETS_DETAIL_SCREEN, {
          agePet: agePet,
          _id: _id,
          code: code,
          descriptionPet: descriptionPet,
          imgPet: imgPet,
          genderPet: genderPet,
          namePet: namePet,
          pricePet: pricePet,
          quantityPet: quantityPet,
          typePet: typePet,
        })
      }>
      <View
        style={{
          backgroundColor: '#E6EAED',
          width: 165,
          height: 205,
          borderRadius: 8,
          paddingHorizontal: 8,
          marginRight: '5%',
          marginTop: '2%',
          marginLeft: '5%',
        }}>
        <Block alignCenter marginTop={'5%'}>
          <Image
            style={{width: 100, height: 110}}
            source={{uri: imgPet}}></Image>
        </Block>
        <Block
          marginTop={'3%'}
          width={150}
          height={80}
          backgroundColor={'white'}
          radius={8}>
          <Block marginLeft={'3%'}>
            <Text  style={{fontWeight: '700', width: 110, height: 38, marginTop: '5%'}}>
             Tên: {namePet}
            </Text>
            <Block
              marginTop={'4%'}
              row
              justifySpaceBetween
              paddingHorizontal={5}>
              <Text style={{width: 90, height: 18}}>
                {formatMoney(pricePet)}
              </Text>
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
            </Block>
          </Block>
        </Block>
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

      <SafeAreaView>
        <FlatList
          numColumns={2}
          data={listProduct}
          keyExtractor={item => item._id}
          renderItem={({item}) => (
            <Item
              agePet={item.agePet}
              _id={item._id}
              code={item.code}
              descriptionPet={item.descriptionPet}
              imgPet={item.imgPet}
              genderPet={item.genderPet}
              namePet={item.namePet}
              pricePet={item.pricePet}
              quantityPet={item.quantityPet}
              typePet={item.typePet}
            />
          )}
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
