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
  INSERT_PETS_SCREEN,
  INSERT_SERVICES_SCREEN,
  SERVICES_DETAIL_SCREEN,
} from '../../router/ScreenName';
import productApi from '../../api/productApi';

const ListServices = ({navigation}) => {
  const [listProduct, setListProduct] = useState([]);

  const getAllProduct = async () => {
    const getListProductApi = await productApi.getAllProduct();
    console.log('getAllProductApi', getListProductApi.data.data[1]);

    setListProduct(getListProductApi.data.data[1]);
  };

  useEffect(() => {
    getAllProduct();
  }, []);

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
      }
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
        <Image
          style={{width: 100, height: 120}}
          source={{uri: imgService}}></Image>
      </Block>
      <View
        style={{
          backgroundColor: 'white',
          paddingLeft: '4%',
          borderRadius: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View>
            <Text style={{fontSize: 18, color: 'black'}}>{nameService}</Text>
            <Text style={{color: 'red'}}>{priceService}</Text>
            <Text style={{color: 'black'}}>{(priceService * 100) / 20}</Text>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: '#F2F3F2',
              borderRadius: 5,
              width: 30,
              height: 30,
              paddingLeft: '5%',
              paddingTop: '2%',
              marginRight: '4%',
            }}>
            <FontAwesome5 color={'black'} name="chevron-right" size={18} />
          </TouchableOpacity>
        </View>
        <View>
          <Text>Cửa hàng: Petmart</Text>
          <Text style={{width: 250, fontSize: 16, color: 'black'}}>
            Dia chi cua hang
          </Text>
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
