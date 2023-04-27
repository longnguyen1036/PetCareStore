import { ScrollView, StyleSheet, View , Image, TouchableOpacity, FlatList} from 'react-native'
import React, { useEffect, useState } from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { SliderBox } from "react-native-image-slider-box";
import Block from '../../components/Block'
import Text from '../../components/Text'
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import { NOTIFICATION_SCREEN, PETS_SCREEN, PRODUCTS_SCREEN, SERVICES_SCREEN } from '../../router/ScreenName';
import { useSelector } from 'react-redux';
import productApi from '../../api/productApi';
const DATA = [
    {
      id: 1,
      name: 'BEAGLE CƯNG CƯNG',
      price: 1800000,
      images: require('../../assets/image/salad.png'),
    },
    {
      id: 2,
      name: 'BEAGLE CƯNG CƯNG',
      price: 2000000,
      images: require('../../assets/image/salad.png'),
    },
  ];

 

const Home = ({navigation}) => {
  // const test = useSelector(state => state.authState.userInfo)
  const [listProduct, setListProduct] = useState([])
  const authState2 = useSelector(state => state.authState.userInfo)

  console.log('authState2', authState2)
  


  const renderItem = ({item}) => {
    return (
      <TouchableOpacity>
      <Block
       radius={10}
        marginLeft={'8%'}
        backgroundColor={'#E6EAED'}
        width={160}
        height={198}>
        <Image style={styles.ilist} source={item.images}></Image>
        <Block radius={10} paddingLeft={'5%'} margin={5} backgroundColor={'white'} height={80}>
          <Block paddingTop={5}>
            <Text >{item.name}</Text>
            <Text color={'black'}>Cate</Text>
            <Text marginTop={7} size={15}>{item.price} VND</Text>
          </Block>
          <TouchableOpacity style={styles.nut}>
            <AntDesign color={'white'} name="right" size={25} />
          </TouchableOpacity>
        </Block>
      </Block>
      </TouchableOpacity>
    );
  };
    const images = [
        require('../../assets/image/anhcamnang.png'),
        require('../../assets/image/anhcamnang1.png'),
        require('../../assets/image/caphe.png'),
        require('../../assets/image/main.png'),
        require('../../assets/image/salad.png'),

    ];
  return (
   
    <View style={{flex: 1, backgroundColor: '#DADADA'}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: '5%', marginTop: '3%'}}>
        <View>
            <Text style ={{fontSize: 16, fontWeight: '700', color: '#18A2E1'}}>Welcome to</Text>
            <Text style ={{fontSize: 22, fontWeight: '700', color: 'black'}}>Tên tài khoản</Text>

        </View>
        <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity onPress={()=> navigation.navigate(NOTIFICATION_SCREEN)}>
              <Entypo style={{marginRight: '15%'}} color={'black'} name='bell' size={25} />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image source={require('../../assets/image/profiledog.png')}/>
            </TouchableOpacity>
            

        </View>

      </View>

       <View style={{marginTop: '10%'}}>
        {/* <SliderBox 
            images={images}
            dotColor="#FFEE58"
            inactiveDotColor="#90A4AE"
            autoplay = {true}
            // autoplayInterval={1000}
            circleLoop={true}
            ImageComponentStyle={{borderRadius: 15, width: '90%', marginTop: 5}}
        /> */}

      </View> 

      <View style={styles.category}>
      <View style={{paddingHorizontal: '3%', marginTop: '3%', marginBottom: '3%'}}>
        <Text style ={{fontSize: 20, fontWeight: '700', color: 'black'}}> Danh mục</Text>
      </View>
        <Block marginLeft={60} marginRight={50} row>
          <TouchableOpacity onPress={ ()=>navigation.navigate(PETS_SCREEN)}>
            <View style={styles.categories}>
              <MaterialIcons
                style={styles.icc}
                color={'white'}
                name="pets"
                size={30}
              />
            </View>
            <Text style={{marginLeft: '10%'}}>Thú cưng</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={ ()=>navigation.navigate(PRODUCTS_SCREEN)}>
            <View style={styles.categories}>
              <FontAwesome5
                style={styles.icc}
                color={'white'}
                name="shopping-cart"
                size={25}
              />
            </View>
            <Text style={{marginLeft: '10%'}}>Sản phẩm</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={ ()=>navigation.navigate(SERVICES_SCREEN)}>
            <View style={styles.categories}>
              <Ionicons
                style={styles.icc}
                color={'white'}
                name="time"
                size={30}
              />
            </View>
            <Text style={{marginLeft: '15%'}}>Dịch vụ</Text>
          </TouchableOpacity>
        </Block>
      </View>
      {/* <View style={{paddingHorizontal: '5%', marginTop: '3%'}}>
        <Text style ={{fontSize: 20, fontWeight: '700', color: 'black'}}>Top bán chạy</Text>
      </View>
      <View style ={{marginTop: '3%'}}> */}
        <FlatList
        numColumns={2}
            data={listProduct}
            renderItem={renderItem}
            keyExtractor={item => item.id}
        />

      {/* </View> */}

    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
    marginTop: 5,
  },
  h2: {
    flexDirection: 'row',
    marginRight: 10,
  },
  h1: {
    flexDirection: 'column',
    marginLeft: 10,
  },
  t1: {
    fontSize: 16,
    color: '#18A2E1',
  },
  t2: {
    fontSize: 22,
    color: 'black',
  },
  i1: {
    width: 40,
    height: 40,
  },
  pagerView: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    width: '90%',
    height: 200,
  },
  p1: {
    backgroundColor: '#18A2E1',
    borderRadius: 10,
    height: 200,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  i2: {
    width: '50%',
    height: '100%',
  },
  tp1: {
    width: '50%',
    fontSize: 19,
    color: 'white',
    left: '10%',
    top: '10%',
  },
  ic: {
    top: '10%',
    right: '20%',
  },

  categories: {
    marginTop: '2%',
    width: 50,
    height: 50,
    backgroundColor: '#18A2E1',
    justifyContent: 'center',
    marginLeft: '15%',
    borderRadius: 5,
  },
  icc: {
    marginLeft: '20%',
  },
 
  category: {
    marginTop: '2%',
  },
  viewlist: {
    marginLeft: '15%',
    backgroundColor: '#E6EAED',
    width: 150,
    height: 168,
  },

  seachImage: {
    padding: 10,
    marginLeft: 10,
    height: 20,
    width: 20,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  ilist: {
    width: 100,
    height: 100,
    marginLeft: '19%',
    marginTop: '2%',
    marginBottom: '2%',

  },
  nut: {
    width: 32,
    height: 32,
    backgroundColor: '#18A2E1',
    position: 'absolute',
    right: '5%',
    bottom: '8%',
    alignItems: 'center',
    borderRadius: 4,
    paddingTop: '15%',
  },
});