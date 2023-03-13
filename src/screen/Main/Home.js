import { ScrollView, StyleSheet, Text, View , Image, TouchableOpacity, FlatList} from 'react-native'
import React from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { SliderBox } from "react-native-image-slider-box";
import Block from '../../components/Block'
import AntDesign from 'react-native-vector-icons/AntDesign';


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

  const renderItem = ({item}) => {
    return (
      <Block
        marginLeft={'8%'}
        backgroundColor={'#E6EAED'}
        width={150}
        height={168}>
        <Image style={styles.ilist} source={item.images}></Image>
        <Block paddingLeft={'5%'} margin={5} backgroundColor={'white'} height={70}>
          <Block paddingTop={5}>
            <Text>{item.name}</Text>
            <Text marginTop={7} size={12}>{item.price} VND</Text>
          </Block>
          <TouchableOpacity style={styles.nut}>
            <AntDesign name="right" size={25} />
          </TouchableOpacity>
        </Block>
      </Block>
    );
  };

const Home = () => {
    const images = [
        require('../../assets/image/anhcamnang.png'),
        require('../../assets/image/anhcamnang1.png'),
        require('../../assets/image/caphe.png'),
        require('../../assets/image/main.png'),
        require('../../assets/image/salad.png'),

    ];
  return (
    <View style={{flex: 1, backgroundColor: '#F5F5F5'}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: '5%', marginTop: '3%'}}>
        <View>
            <Text style ={{fontSize: 16, fontWeight: '700', color: '#18A2E1'}}>Welcome to</Text>
            <Text style ={{fontSize: 22, fontWeight: '700', color: 'black'}}>Tên tài khoản</Text>

        </View>
        <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <FontAwesome5 style={{marginRight: '15%'}} color={'black'} name='lock' size={25} />
            <TouchableOpacity>
                <Image source={require('../../assets/image/profiledog.png')}/>
            </TouchableOpacity>
            

        </View>

      </View>

      <View style={{marginTop: '10%'}}>
        <SliderBox 
            images={images}
            dotColor="#FFEE58"
            inactiveDotColor="#90A4AE"
            autoplay = {true}
            // autoplayInterval={1000}
            circleLoop={true}
            ImageComponentStyle={{borderRadius: 15, width: '90%', marginTop: 5}}
        />

      </View>

      <View style={{paddingHorizontal: '5%', marginTop: '5%'}}>
        <Text style ={{fontSize: 20, fontWeight: '700', color: 'black'}}>Danh mục</Text>
      </View>

      <View style ={{flexDirection: 'row', justifyContent: 'space-around', marginTop: '3%'}}>
        <TouchableOpacity style={{backgroundColor: '#18A2E1', padding: 10, borderRadius: 8}}>
            <FontAwesome5  color={'black'} name='paw' size={25} />

        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor: '#18A2E1', padding: 10, borderRadius: 8}}>
            <FontAwesome5  color={'black'} name='clock' size={25} />

        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor: '#18A2E1', padding: 10, borderRadius: 8}}>
            <FontAwesome5  color={'black'} name='toolbox' size={25} />

        </TouchableOpacity>
      </View>
      <View style={{paddingHorizontal: '5%', marginTop: '3%'}}>
        <Text style ={{fontSize: 20, fontWeight: '700', color: 'black'}}>Top bán chạy</Text>
      </View>
      <View style ={{marginTop: '3%'}}>
        <FlatList
        numColumns={2}
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
        />

      </View>

    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    ilist: {
        width: 80,
        height: 90,
        marginLeft: '20%',
      },
      nut: {
        width: 32,
        height: 32,
        backgroundColor: '#F2F3F2',
        position: 'absolute',
        right: '5%',
        bottom: '8%',
        alignItems: 'center',
        borderRadius: 4,
        paddingTop: '15%',
      },
})