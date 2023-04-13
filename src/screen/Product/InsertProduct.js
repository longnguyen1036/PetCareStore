import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import Block from '../../components/Block';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import SelectDropdown from 'react-native-select-dropdown';
import productApi from '../../api/productApi';
import ImagePicker from 'react-native-image-crop-picker';
import {Toast} from 'react-native-toast-message/lib/src/Toast';

const categorypets = ['Thức ăn', 'Vệ sinh', 'Phụ kiện', 'Khác...'];
const categorygenderpets = ['Đực', 'Cái'];

const InsertProduct = ({navigation}) => {
  const [nameProduct, setNameProduct] = useState();
  const [priceProduct, setPriceProduct] = useState();
  const [imageUri, setImageUri] = useState();
  const [descriptionProduct, setDescriptionProduct] = useState();
  const [quantityProduct, setQuantityProduct] = useState();
  const [typeProduct, setTypeProduct] = useState();
  const [codeProduct, setCodeProduct] = useState();
  const [loading, setLoading] = useState(false);

  const handleChooseImage = async () => {
    try {
      const image = await ImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: true,
      });
      console.log('imageeeeeeeeee', image);
      setImageUri(image);

      // const urlimage = await productApi.InsertImage(image)
      // setUrlImage(urlimage.data.data.link);
      // console.log('link hinh ne', urlimage.data.data.link)
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

  const addProduct = async () => {
    try {
      setLoading(true);
      const res = await productApi.InsertProduct(
        nameProduct,
        priceProduct,
        imageUri,
        descriptionProduct,
        quantityProduct,
        typeProduct,
        nameProduct,
        'productStore',
      );
      if (res.status === 200) {
        setLoading(false);
        showToast();
        navigation.goBack();
        console.log('success');
      } else {
        setLoading(false);
        showToast2();
        console.log('thất bại');
      }
    } catch (error) {
      showToast2();
      setLoading(false);
      console.log('loi them san pham', error);
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

        {imageUri ? (
          <Block marginLeft={'5%'}>
            <Image
              source={{uri: imageUri.path}}
              style={{width: 100, height: 100}}
            />
          </Block>
        ) : (
          <TouchableOpacity
            style={styles.iconAdd}
            onPress={() => handleChooseImage()}>
            <FontAwesome5 style={{}} color={'black'} name="plus" size={25} />
          </TouchableOpacity>
        )}

        <View style={styles.conTent}>
          <View>
            <Text style={styles.nameProduct}>Tên sản phẩm</Text>
          </View>
          <View style={styles.textInput}>
            <TextInput
              placeholder="Nhập tên sản phẩm"
              onChangeText={setNameProduct}
              value={nameProduct}
            />
          </View>

          <View>
            <Text style={styles.nameProduct}>Mô tả</Text>
          </View>
          <View style={styles.textInput}>
            <TextInput
              placeholder="Ví dụ: Đồ chơi cho chó, thức ăn cho mèo..."
              onChangeText={setDescriptionProduct}
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
            <Text style={styles.nameProduct}>Phân loại</Text>
          </View>

          <SelectDropdown
            data={categorypets}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
              setTypeProduct(selectedItem);
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
            defaultButtonText={'Thức ăn'}
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
            onPress={() => addProduct()}>
            {loading == true ? (
              <ActivityIndicator size={'large'} color={'grey'} />
            ) : (
              <Text style={{color: 'white', fontSize: 16, fontWeight: '600'}}>
                Thêm sản phẩm
              </Text>
            )}
          </TouchableOpacity>
        </View>
        <View style={{height: 200}}></View>
      </ScrollView>
      <Toast />
    </View>
  );
};

export default InsertProduct;

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
    marginHorizontal: '6%',
    marginVertical: '2%',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },

  conTent: {
    paddingHorizontal: '5%',
    height: '70%',

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
    marginTop: '5%',
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
    height: 30,
    backgroundColor: 'white',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#444',
  },
  dropdown4BtnTxtStyle: {color: '#444', textAlign: 'left'},
});
