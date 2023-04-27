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
  INSERT_PRODUCTS_SCREEN,
  PRODUCTS_DETAIL_SCREEN,
} from '../../router/ScreenName';
import productApi from '../../api/productApi';
import formatMoney from '../../components/FormatMoney';
import { useFocusEffect } from '@react-navigation/native';

const ListProducts = ({navigation}) => {
  const [listProduct, setListProduct] = useState([]);

  const getAllProduct = async () => {
    const getListProductApi = await productApi.getAllProduct();
    // console.log('getAllProductApi', getListProductApi.data.data[0]);

    setListProduct(getListProductApi.data.data[0]);
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
    codeProduct,
    descriptionProduct,
    imgProduct,
    nameProduct,
    priceProduct,
    quantityProduct,
    typeProduct,
  }) => (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate(
          PRODUCTS_DETAIL_SCREEN,{
          _id: _id,
          codeProduc: codeProduct,
          descriptionProduct: descriptionProduct,
          imgProduct: imgProduct,
          nameProduct: nameProduct,
          priceProduct: priceProduct,
          quantityProduct: quantityProduct,
          typeProduct: typeProduct,
          }
        )
      }>
     <Block
          marginLeft={'8%'}
          backgroundColor={'white'}
          width={160}
         marginTop={12}
          radius={10}
          >
          <Image style={styles.ilist} source={{uri: imgProduct}}></Image>
          <Block
            paddingLeft={'5%'}
            padding={3}
            marginTop={8}
            height={70}
      
            >
            <Block width={140} paddingTop={5}>
              <Block width={'100%'} height={20} > 
              <Text bold>{nameProduct}</Text>
              </Block>
              <Block width={100} marginTop={10}>
                <Text color={'#18A2E1'} bold size={16}>
                  {formatMoney(priceProduct)}
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

      <SafeAreaView style={{width: '100%', paddingHorizontal: 14}}>
        <FlatList
          numColumns={2}
          data={listProduct}
          renderItem={({item}) => (
            <Item
              _id={item._id}
              codeProduct={item.codeProduct}
              descriptionProduct={item.descriptionProduct}
              imgProduct={item.imgProduct}
              nameProduct={item.nameProduct}
              priceProduct={item.priceProduct}
              quantityProduct={item.quantityProduct}
              typeProduct={item.typeProduct}
            />
          )}
          keyExtractor={item => item._id}
        />
      </SafeAreaView>
    </View>
  );
};

export default ListProducts;

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
