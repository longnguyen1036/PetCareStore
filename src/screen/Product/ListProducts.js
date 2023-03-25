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
import React, {useEffect, useState} from 'react';
import Block from '../../components/Block';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {
  INSERT_PRODUCTS_SCREEN,
  PRODUCTS_DETAIL_SCREEN,
} from '../../router/ScreenName';
import productApi from '../../api/productApi';
import formatMoney from '../../components/FormatMoney';

const ListProducts = ({navigation}) => {
  const [listProduct, setListProduct] = useState([]);

  const getAllProduct = async () => {
    const getListProductApi = await productApi.getAllProduct();
    console.log('getAllProductApi', getListProductApi.data.data[0]);

    setListProduct(getListProductApi.data.data[0]);
  };

  useEffect(() => {
    getAllProduct();
  }, []);

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
      onPress={() => navigation.navigate(PRODUCTS_DETAIL_SCREEN , {
        _id: _id,
        codeProduct: codeProduct,
        descriptionProduct: descriptionProduct,
        imgProduct: imgProduct,
        nameProduct: nameProduct,
        priceProduct: priceProduct,
        quantityProduct: quantityProduct,
        typeProduct: typeProduct,
      })}
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
      <Block alignCenter marginTop={'2%'}>
        <Image style={{width: 100, height: 110}} source={{uri: imgProduct}}></Image>
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
            {nameProduct}
          </Text>
        </View>
        <View
          style={{
            marginTop: '8%',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={{color: 'black'}}>{formatMoney(priceProduct)}</Text>
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

      <SafeAreaView>
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
