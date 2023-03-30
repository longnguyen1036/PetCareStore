import { Image, StyleSheet, View, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import Block from '../../components/Block';
import Text from '../../components/Text';

const ProductNotification = () => {
    const DATA = [
        {
          id: 1,
          name: 'BEAGLE CƯNG CƯNG',
          category: 'Thú cưng',
          price: 1800000,
          images: require('./../../assets/image/dog.png'),
        },
        {
          id: 2,
          name: 'BEAGLE CƯNG CƯNG',
          category: 'Thú cưng',
          price: 2000000,
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
              border={1}>
              <Block row>
                <Block width={'72%'} height={97} marginTop={10} marginLeft={10}>
                  <Block row>
                    <Image
                      style={{borderRadius: 20, width: 40, height: 40, }} source={require('../../assets/image/profiledog.png')}></Image>
                    <Block marginLeft={10}>
                      <Text>Thong bao dai qua troi qua dat</Text>
                      <Text size={10}>5 min ago</Text>
                    </Block>
                  </Block>
                  {/* <Block row marginTop={'8%'}>
                         <TouchableOpacity style={{width: 65, height: 30,borderWidth: 1, backgroundColor: '#3162D6', marginLeft: 5}}>
                          <Text>Đồng ý</Text>
                         </TouchableOpacity>
                         <TouchableOpacity style={{width: 65, height: 30, borderWidth: 1, marginLeft: 10}}></TouchableOpacity>
                  </Block> */}
                </Block>
                <Image
                  style={{width: 95, height: 95, margin: 1, backgroundColor: 'green', borderRadius: 15}}
                  source={require('../../assets/image/dog.png')}></Image>
              </Block>
            </Block>
          </TouchableOpacity>
        );
      };
      
  return (
    <Block backgroundColor={'white'} flex={1}>
      <Block marginTop={5}>
        <FlatList key={DATA.name} data={DATA} renderItem={renderItem} />
      </Block>
    </Block>
  );
}

export default ProductNotification

const styles = StyleSheet.create({})