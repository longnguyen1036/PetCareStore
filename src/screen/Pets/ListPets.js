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
      <Block
          marginLeft={'8%'}
          backgroundColor={'white'}
          width={160}
         marginTop={12}
          radius={10}
          >
          <Image style={styles.ilist} source={{uri: imgPet}}></Image>
          <Block
            paddingLeft={'5%'}
            padding={3}
            marginTop={8}
            height={70}
      
            >
            <Block width={140} paddingTop={5}>
              <Block width={'100%'} height={20} > 
              <Text bold>{namePet}</Text>
              </Block>
              <Block width={100} marginTop={10}>
                <Text color={'#18A2E1'} bold size={16}>
                  {formatMoney(pricePet)}
                </Text>
              </Block>
            </Block>
            
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
          <Text style={styles.textHeader}>Thú Cưng</Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate(INSERT_PETS_SCREEN)}>
          <FontAwesome5 style={{}} color={'black'} name="plus" size={25} />
        </TouchableOpacity>
      </View>

      <Block paddingHorizontal={10}>
        <Block
          backgroundColor={'white'}
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

      <SafeAreaView style={{width: '100%', paddingHorizontal: 14}}>
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
    width: '100%',
      height: 150,
      borderTopRightRadius: 10,
      borderTopLeftRadius: 10,
  },
});
