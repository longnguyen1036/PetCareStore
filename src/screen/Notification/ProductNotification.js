import {
  Image,
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Block from '../../components/Block';
import Text from '../../components/Text';

const ProductNotification = () => {
  const DATA = [
    {
      id: 1,
      user: 'Minh Toan',
      name: 'Tỉa lông chó',
      time: '12:30',
      images: require('./../../assets/image/dog.png'),
    },
    {
      id: 2,
      user: 'Huu Phuoc',
      name: 'Gội đầu cho chó',
      time: '12:30',
      images: require('./../../assets/image/dog.png'),
    },
  ];

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity>
        <Block
          margin={'1%'}
          backgroundColor={'white'}
          width={'98%'}
          height={100}
          radius={10}>
          <Block row>
            <Block width={'72%'} height={97} marginTop={10} marginLeft={10}>
              <Block row width={'80%'} height={35}>
                <Image
                  style={{borderRadius: 20, width: 40, height: 40}}
                  source={require('../../assets/image/profiledog.png')}></Image>
                <Block marginLeft={10}>
                  <Text style={{color: 'black'}}>
                    {item.user} đã đặt dịch vụ {item.name}
                  </Text>
                  <Text size={10}>Thời gian: {item.time}</Text>
                </Block>
              </Block>
            </Block>
            <Image
              style={{
                marginTop: '1%',
                width: 90,
                height: 90,
                margin: 1,
                backgroundColor: 'green',
                borderRadius: 15,
              }}
              source={require('../../assets/image/dog.png')}></Image>
          </Block>
        </Block>
      </TouchableOpacity>
    );
  };

  return (
    <Block backgroundColor={'#F2F3F2'} flex={1}>
      <Block marginTop={5}>
        <FlatList key={DATA.name} data={DATA} renderItem={renderItem} />
      </Block>
    </Block>
  );
};

export default ProductNotification;

const styles = StyleSheet.create({});
