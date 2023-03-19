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
import { INSERT_PETS_SCREEN, INSERT_SERVICES_SCREEN } from '../../router/ScreenName';

const DATA = [
  {
    id: '1',
    title: 'First Item',
    price: 800000,
    price1: 900000,
    address: 'Địa chỉ: 147 Nguyễn Sỹ Sách, phường 15, Tân Bình, thành phố Hồ Chí Minh.',
    image: require('../../assets/image/profileavatar.png'),
  },
  {
      id: '2',
      title: 'First Item',
      price: 700000,
      price1: 800000,
      address: 'Địa chỉ: 147 Nguyễn Sỹ Sách, phường 15, Tân Bình, thành phố Hồ Chí Minh.',
      image: require('../../assets/image/profileavatar.png'),
  },
  {
      id: '3',
      title: 'First Item',
      price: 600000,
      price1: 700000,
      address: 'Địa chỉ: 147 Nguyễn Sỹ Sách, phường 15, Tân Bình, thành phố Hồ Chí Minh.',
      image: require('../../assets/image/profileavatar.png'),
  },
  {
      id: '4',
      title: 'First Item',
      price: 500000,
      price1: 600000,
      address: 'Địa chỉ: 147 Nguyễn Sỹ Sách, phường 15, Tân Bình, thành phố Hồ Chí Minh.',
      image: require('../../assets/image/profileavatar.png'),
  },
  {
      id: '5',
      title: 'First Item',
      price: 400000,
      price1: 400000,
      address: 'Địa chỉ: 147 Nguyễn Sỹ Sách, phường 15, Tân Bình, thành phố Hồ Chí Minh.',
      image: require('../../assets/image/profileavatar.png'),
  },
];

const Item = ({title, price, image, price1, address}) => (
  <View style={{width: '100%', backgroundColor: '#E6EAED', flexDirection: 'row', justifyContent: 'space-around', paddingVertical: 10, borderRadius: 8, marginTop: '5%' }}>
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image source={image}></Image>
          </View>
          <View>
              <View style ={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                  <View>
                      <Text style={{fontSize: 18, color: 'black'}}>{title}</Text>
                      <Text style={{color: 'red'}}>{price}</Text>
                      <Text style={{color: 'black'}}>{price1}</Text>
                  </View>
                  <TouchableOpacity style={{backgroundColor: 'white', borderRadius: 5, width: 25, height: 25, justifyContent: 'center', alignItems: 'center'}}>
                      <FontAwesome5 style={{}} color={'black'} name='chevron-right' size={18} />

                  </TouchableOpacity>

              </View>
              <View>
                  <Text>Cửa hàng: Petmart</Text>
                  <Text style={{width: 250, fontSize: 16, color: 'black'}}>{address}</Text>

              </View>
          </View>

      </View>
);


const ListServices = ({navigation}) => {
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
        <TouchableOpacity onPress={()=>navigation.navigate(INSERT_SERVICES_SCREEN)}>
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

      <SafeAreaView style={{paddingHorizontal: 10}}>
      <FlatList
            
            data={DATA}
            renderItem={({item}) => <Item title={item.title} price={item.price} image={item.image} 
            price1={item.price1} address={item.address}/>}
            keyExtractor={item => item.id}
        
        />
      </SafeAreaView>
    </View>
  );
};

export default ListServices;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
