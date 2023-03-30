import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Block from '../../components/Block';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import SelectDropdown from 'react-native-select-dropdown';
import {useRoute} from '@react-navigation/native';
import {ScrollView} from 'react-native-gesture-handler';
import ImagePicker from 'react-native-image-crop-picker';
import productApi from '../../api/productApi';
import formatMoney from '../../components/FormatMoney';
import {Toast} from 'react-native-toast-message/lib/src/Toast';
import { HOME_SCREEN, PETS_SCREEN } from '../../router/ScreenName';

const categoryproducts = ['Chó', 'Mèo', 'Hamster', 'Vẹt', 'Khác...'];
const categorygenderpets = ['Đực', 'Cái'];

const UpdatePet = ({navigation}) => {
  const route = useRoute();
  const {
    agePet,
    _id,
    code,
    descriptionPet,
    imgPet,
    genderPet,
    namePet,
    pricePet,
    quantityPet,
    typePet,
  } = route.params;

  const [id, setId] = useState(_id);
  const [nameProduct, setNameProduct] = useState(namePet);
  const [ageProduct, setAgeProduct] = useState(agePet);
  const [codeProduct, setCodeProduct] = useState(code);
  const [descriptionProduct, setDecriptionProduct] = useState(descriptionPet);
  const [genderProduct, setGenderProduct] = useState(genderPet);
  const [imgProduct, setImgProduct] = useState(imgPet);
  const [priceProduct, setPriceProduct] = useState(pricePet);
  const [quantityProduct, setQuantityProduct] = useState(quantityPet);
  const [typeProduct, setTypeProduct] = useState(typePet);
  const [imageEdit, setImageEdit] = useState();
  const [loading, setLoading] = useState(false);


  const handleChooseImage = async () => {
    try {
      const image = await ImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: true,
      });
      console.log('imageeeeeeeeee', image);
      setImageEdit(image);
    } catch (error) {
      console.log('erorr hinh', error);
    }
  };


  const showToast = () => {
    Toast.show({
      type: 'success',
      text1: 'Them thanh cong',
      visibilityTime: 2000,
      autoHide: true,
      topOffset: 30,
      bottomOffset: 40,
    });
  };

  const showToast2 = () => {
    Toast.show({
      type: 'error',
      text1: 'Them that bai',
      visibilityTime: 2000,
      autoHide: true,
      topOffset: 30,
      bottomOffset: 40,
    });
  };

  const editProduct = async () => {
    try {
      setLoading(true);
      const res = await productApi.EditProduct(
        id,
        nameProduct,
        ageProduct,
        typeProduct,
        priceProduct,
        quantityProduct,
        descriptionProduct,
        genderProduct,
        nameProduct,
        'petStore',
      );
      if (res.status === 200) {
        setLoading(false);
        showToast();
        navigation.navigate(PETS_SCREEN);
        console.log('success');
      } else {
        setLoading(false);
        showToast2();

        console.log('thất bại');
      }
    } catch (error) {
      showToast2();

      setLoading(false);
      console.log('loi sửa san pham', error);
    }
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.hearderIcon}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <FontAwesome5
              style={{}}
              color={'black'}
              name="chevron-left"
              size={25}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            marginHorizontal: '6%',
            marginVertical: '2%',
            flexDirection: 'row',
            position: 'relative',
          }}>
          {imageEdit ? (
            <View>
              <Image
                source={{uri: imageEdit.path}}
                style={{width: 100, height: 100, borderRadius: 8}}></Image>
              <TouchableOpacity
                style={styles.iconAdd}
                onPress={() => handleChooseImage()}>
                <FontAwesome5
                  style={{marginTop: 5}}
                  color={'black'}
                  name="edit"
                  size={25}
                />
              </TouchableOpacity>
            </View>
          ) : (
            <View>
              <Image
                source={{uri: imgProduct}}
                style={{width: 100, height: 100, borderRadius: 8}}></Image>
              {/* <TouchableOpacity style={styles.iconAdd} onPress={() => handleChooseImage()}>
                      <FontAwesome5 style={{marginTop: 5}} color={'black'} name="edit" size={25} />
                    </TouchableOpacity> */}
            </View>
          )}
        </View>

        <View style={styles.conTent}>
          <View>
            <Text style={styles.nameProduct}>Tên Thú cưng</Text>
          </View>
          <View style={styles.textInput}>
            <TextInput  placeholder="Nhập tên sản phẩm" value={nameProduct} onChangeText={setNameProduct} />
          </View>

          <View>
            <Text style={styles.nameProduct}>Mô tả</Text>
          </View>
          <View style={styles.textInput}>
            <TextInput
              placeholder="Ví dụ: mèo lông ngán, chó giống Đức..."
              onChangeText={setDecriptionProduct}
              value={descriptionProduct}
            />
          </View>

          <View>
            <Text style={styles.nameProduct}>Giá sản phẩm</Text>
          </View>
          <View style={styles.textInput}>
            <TextInput
            placeholder="Nhập giá sản phẩm"
            keyboardType="numeric"
              onChangeText={setPriceProduct}
              value={priceProduct}
            />
          </View>

          <View>
            <Text style={styles.nameProduct}>Số lượng</Text>
          </View>
          <View style={styles.textInput}>
            <TextInput
            placeholder="Nhập số lượng"
            keyboardType="numeric"
              onChangeText={setQuantityProduct}
              value={quantityProduct}
            />
          </View>

          <View>
            <Text style={styles.nameProduct}>Tuổi</Text>
          </View>
          <View style={styles.textInput}>
            <TextInput
              placeholder="Ví dụ: 1 tháng, 2 năm..."
              onChangeText={setAgeProduct}
              value={ageProduct}
            />
          </View>

          <View>
            <Text style={styles.nameProduct}>Loại</Text>
          </View>

          <SelectDropdown
            data={categoryproducts}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
              setTypeProduct(selectedItem)
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              // text represented after item is selected
              // if data array is an array of objects then return selectedItem.property to render after item is selected
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              // text represented for each item in dropdown
              // if data array is an array of objects then return item.property to represent item in dropdown
              return item;
            }}
            defaultButtonText={typeProduct}
            buttonStyle={styles.dropdown4BtnStyle}
            buttonTextStyle={styles.dropdown4BtnTxtStyle}
            renderDropdownIcon={isOpened => {
              return (
                <FontAwesome5
                  name={isOpened ? 'chevron-up' : 'chevron-down'}
                  color={'black'}
                  size={18}
                />
              );
            }}
          />

          <View>
            <Text style={styles.nameProduct}>Giới tính</Text>
          </View>

          <SelectDropdown
            data={categorygenderpets}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
              setGenderProduct(selectedItem)
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              // text represented after item is selected
              // if data array is an array of objects then return selectedItem.property to render after item is selected
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              // text represented for each item in dropdown
              // if data array is an array of objects then return item.property to represent item in dropdown
              return item;
            }}
            defaultButtonText={genderProduct}
            buttonStyle={styles.dropdown4BtnStyle}
            buttonTextStyle={styles.dropdown4BtnTxtStyle}
            renderDropdownIcon={isOpened => {
              return (
                <FontAwesome5
                  name={isOpened ? 'chevron-up' : 'chevron-down'}
                  color={'black'}
                  size={18}
                />
              );
            }}
          />
        </View>
        <View style={styles.viewPressInsert}>
          <TouchableOpacity
            style={styles.PressInsert}
            onPress={() => editProduct()}>
            {loading == true ? (
              <ActivityIndicator size={'large'} color={'grey'} />
            ) : (
              <Text style={{color: 'white', fontSize: 16, fontWeight: '600'}}>
                Sửa sản phẩm
              </Text>
            )}
          </TouchableOpacity>
        </View>

        <View style={{height: 100}}></View>
      </ScrollView>
    </View>
  );
};

export default UpdatePet;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#F5F5F5',
  },

  hearderIcon: {
    paddingHorizontal: '2%',
    marginVertical: '2%',
  },
  iconAdd: {
    height: 40,
    width: 40,
    backgroundColor: '#d3d3d3',
    borderRadius: 8,
    alignItems: 'center',
    position: 'absolute',
    left: 90,
    top: -25,
  },

  conTent: {
    paddingHorizontal: '5%',
    height: '60%',
    justifyContent: 'space-between',
  },
  nameProduct: {
    fontSize: 16,
    color: 'black',
    fontWeight: '600',
  },
  textInput: {
    borderBottomWidth: 0.5,
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
    height: 60,
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
});
