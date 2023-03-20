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
        <Image style={styles.ilist} source={item.images}></Image>
          <Block paddingTop={5}>
          </Block>
          <TouchableOpacity style={styles.nut}>
          </TouchableOpacity>
        </Block>
      </Block>
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
