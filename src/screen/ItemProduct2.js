import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const ItemProduct2 = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <View style={{width: 380, backgroundColor: '#E6EAED', flexDirection: 'row', justifyContent: 'space-around', paddingVertical: 10, borderRadius: 8 }}>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Image source={require('../assets/image/profileavatar.png')}></Image>
            </View>
            <View>
                <View style ={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                    <View>
                        <Text style={{fontSize: 18, color: 'black'}}>Tỉa lông chó</Text>
                        <Text style={{color: 'red'}}>100000</Text>
                        <Text style={{color: 'black'}}>150000</Text>
                    </View>
                    <TouchableOpacity style={{backgroundColor: 'white', borderRadius: 5, width: 25, height: 25, justifyContent: 'center', alignItems: 'center'}}>
                        <FontAwesome5 style={{}} color={'black'} name='chevron-right' size={18} />

                    </TouchableOpacity>

                </View>
                <View>
                    <Text>Cửa hàng: Petmart</Text>
                    <Text style={{width: 250, fontSize: 16, color: 'black'}}>Địa chỉ: 147 Nguyễn Sỹ Sách, phường 15, Tân Bình, thành phố Hồ Chí Minh.</Text>

                </View>
            </View>

        </View>
      
    </View>
  )
}

export default ItemProduct2

const styles = StyleSheet.create({})