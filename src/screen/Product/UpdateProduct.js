import { StyleSheet, Text, View ,Image, TouchableOpacity, TextInput, SafeAreaView, FlatList } from 'react-native'
import React from 'react'
import Block from '../../components/Block'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import SelectDropdown from 'react-native-select-dropdown'

const categoryproducts = ["Thức ăn", "Dây", "Quần", "Jerry"]

const UpdateProduct = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.hearderIcon}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <FontAwesome5 style={{}} color={'black'} name='chevron-left' size={25} />
        </TouchableOpacity>

      </View>

      <View style={{marginHorizontal: '6%',
        marginVertical: '2%', flexDirection: 'row'}}>
            <Image source={require('../../assets/image/profiledog.png')}/>
            <Image source={require('../../assets/image/profiledog.png')}/>
            <TouchableOpacity style={styles.iconAdd}>
                    <FontAwesome5 style={{}} color={'black'} name='plus' size={25} />
            </TouchableOpacity>

      </View>

      

      

      <View style={styles.conTent}>
        <View>
            <Text style={styles.nameProduct}>Tên dịch vụ</Text>
        </View>
        <View style={styles.textInput}>
            <TextInput  placeholder='Nhập tên dịch vụ'/>
        </View>

        <View>
            <Text style={styles.nameProduct}>Giá dịch vụ</Text>
        </View>
        <View style={styles.textInput}>
            <TextInput placeholder='Nhập giá dịch vụ'/>
        </View>

        <View>
            <Text style={styles.nameProduct}>Danh mục</Text>
        </View>

        <SelectDropdown
            data={categoryproducts}
            onSelect={(selectedItem, index) => {
                console.log(selectedItem, index)
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
                // text represented after item is selected
                // if data array is an array of objects then return selectedItem.property to render after item is selected
                return selectedItem
            }}
            rowTextForSelection={(item, index) => {
                // text represented for each item in dropdown
                // if data array is an array of objects then return item.property to represent item in dropdown
                return item
            }}

            defaultButtonText={'Chó'}

            buttonStyle={styles.dropdown4BtnStyle}
            buttonTextStyle={styles.dropdown4BtnTxtStyle}

            renderDropdownIcon={isOpened => {
                return <FontAwesome5 name={isOpened ? 'chevron-up' : 'chevron-down'} color={'black'} size={18} />;
              }}
        />


        <View>
            <Text style={styles.nameProduct}>Giới tính</Text>
        </View>

        <SelectDropdown
            data={categoryproducts}
            onSelect={(selectedItem, index) => {
                console.log(selectedItem, index)
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
                // text represented after item is selected
                // if data array is an array of objects then return selectedItem.property to render after item is selected
                return selectedItem
            }}
            rowTextForSelection={(item, index) => {
                // text represented for each item in dropdown
                // if data array is an array of objects then return item.property to represent item in dropdown
                return item
            }}

            defaultButtonText={'Thú y'}

            buttonStyle={styles.dropdown4BtnStyle}
            buttonTextStyle={styles.dropdown4BtnTxtStyle}

            renderDropdownIcon={isOpened => {
                return <FontAwesome5 name={isOpened ? 'chevron-up' : 'chevron-down'} color={'black'} size={18} />;
              }}
        />




        

        
      </View>
      <View style={styles.viewPressInsert}>
        <TouchableOpacity style={styles.PressInsert}>
            <Text style={{color: 'white', fontSize: 16, fontWeight: '600'}}>Thêm sản phẩm</Text>

        </TouchableOpacity>

      </View>

      
    </View>
  )
}

export default UpdateProduct

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5'
    
    },
    
    hearderIcon: {
        paddingHorizontal: '2%',
        marginVertical: '2%',
    
    },
    iconAdd: {
        height: 40,
        width: 40,
        backgroundColor: '#d3d3d3',
        marginLeft: '5%',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    
    },
    
    conTent: {
        paddingHorizontal: '5%',
        height: '60%',
        justifyContent: 'space-between'
    
    },
    nameProduct: {
        fontSize: 16,
        color: 'black',
        fontWeight: '600'
    
    },
    textInput: {
        borderBottomWidth: 0.5
    
    },
    viewPressInsert: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '10%',
        
    
    },
    
    PressInsert: {
        backgroundColor: '#18A2E1',
        width: '50%',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        height: 60
    
    },
    dropdown4BtnStyle: {
        width: '50%',
        height: 50,
        backgroundColor: '#FFF',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#444',
      },
      dropdown4BtnTxtStyle: {color: '#444', textAlign: 'left'},
})