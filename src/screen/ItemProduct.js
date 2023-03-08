import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const ItemProduct = () => {
  return (
    <View style ={{alignItems: 'center', justifyContent: 'center', flex: 1, }}>
        <View style ={{backgroundColor: '#E6EAED', width: 150, height: 186, borderRadius: 8, paddingHorizontal: 8}}>
            <View style={{alignItems: 'center'}}>
                <Image source={require('../assets/image/profileavatar.png')}></Image>
            </View>
            <View style ={{backgroundColor: 'white', borderRadius: 8, marginTop: '12%', paddingHorizontal: 5, paddingVertical: 5 }}>
                <View style={{marginTop: '2%'}}>
                    <Text style={{fontSize: 15, fontWeight: '500', color: 'black'}}>Sua bo Bio Milk</Text>
                </View>
                <View style={{marginTop: '8%', flexDirection: 'row', justifyContent: 'space-between',}}>
                    <Text style={{color: 'black'}}>800.000D</Text>
                    <TouchableOpacity style={{backgroundColor: '#E6EAED', borderRadius: 5, width: 25, height: 25, justifyContent: 'center', alignItems: 'center'}}>
                        <FontAwesome5 style={{}} color={'black'} name='chevron-right' size={18} />

                    </TouchableOpacity>
                </View>
            </View>
      
        </View>
      
    </View>
  )
}

export default ItemProduct

const styles = StyleSheet.create({})