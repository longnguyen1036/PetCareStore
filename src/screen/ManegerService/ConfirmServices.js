import {
  Image,
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Block from '../../components/Block';
import {Text} from 'react-native';

const ConfirmServices = () => {
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
              <Block row marginTop={'8%'}>
                <TouchableOpacity
                  style={{
                    width: 65,
                    height: 25,
                    borderRadius: 2,
                    backgroundColor: '#18A2E1',
                    marginLeft: 5,
                    paddingTop: 2,
                  }}>
                  <Text style={{textAlign: 'center', color: 'white'}}>
                    Đồng ý
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    width: 65,
                    height: 25,
                    borderWidth: 0.2,
                    borderRadius: 2,
                    marginLeft: 10,
                    paddingTop: 2,
                  }}>
                  <Text style={{textAlign: 'center', color: 'black'}}>Huỷ</Text>
                </TouchableOpacity>
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
     
    );
  };

  return (
    <Block backgroundColor={'#E6EAED'} flex={1}>
      <Block marginTop={5}>
        <FlatList key={DATA.name} data={DATA} renderItem={renderItem} />
      </Block>
    </Block>
  );
};

export default ConfirmServices;

const styles = StyleSheet.create({});
