import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
  Modal
} from 'react-native';
import React, {useState} from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useRoute } from '@react-navigation/native';
import formatMoney from '../../components/FormatMoney';
import { EDIT_PRODUCTS_SCREEN } from '../../router/ScreenName';
import productApi from '../../api/productApi';
import Block from '../../components/Block';

const ProductDetail = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const route = useRoute();
  const deletePet = async (id,nameModel) =>{
    console.log('iddsadsad', id, nameModel)
    const a = await productApi.DelelePet(id,nameModel);
    setModalVisible(false);
    navigation.goBack()
    console.log(a)
  }

  const {
    _id,
    codeProduct,
    descriptionProduct,
    imgProduct,
    nameProduct,
    priceProduct,
    quantityProduct,
    typeProduct,
  } = route.params;
  

  const [id, setId] = useState(_id);
  const [nameProductDetail, setNameDetail] = useState(nameProduct);
  const [codeProductDetail, setCodeProductDetail] = useState(codeProduct);
  const [descriptionProductDetail, setDecriptionProductDetail] = useState(descriptionProduct);
  const [imgProductDetail, setImgProductDetail] = useState(imgProduct);
  const [priceProductDetail, setPriceProductDetail] = useState(priceProduct);
  const [quantityProductDetail, setQuantityProductDetail] = useState(quantityProduct);
  const [typeProductDetail, setTypeProductDetail] = useState(typeProduct);
  console.log('image', id)
  return (
    <View style={{backgroundColor: '#dcdcdc', height: '100%'}}>
      <View style={{alignItems: 'center'}}>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-between',
            paddingHorizontal: '3%',
            paddingVertical: '3%',
          }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <FontAwesome5 name="chevron-left" size={30} color={'black'} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <MaterialCommunityIcons name="delete" size={30} color={'black'} />
          </TouchableOpacity>
        </View>

        <View>
          <Image
            source={{uri: imgProductDetail}}
            style={{width: 200, height: 200, borderRadius: 8}}></Image>
        </View>

        {/* <ScrollView style={{width: '40%'}} horizontal={true}>
          {ItemsImage.map(object => {
            return (
              <TouchableOpacity
                onPress={() => setSelectedImage(object.image)}
                key={object.key}
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: 8,
                }}>
                <Image source={object.image}></Image>
              </TouchableOpacity>
            );
          })}
        </ScrollView> */}
        <View style={{marginTop: '3%'}}>
          <Text style={{fontSize: 20, color: 'black', fontWeight: 'bold'}}>
            {nameProductDetail}
          </Text>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>{formatMoney(priceProductDetail)}</Text>
          <Text style={{fontSize: 17, color: 'black', fontWeight: '600'}}>
            Tình trạng: Còn hàng
          </Text>
        </View>
        <View style={{flexDirection: 'row', width: '73%', marginTop: '3%'}}>
          <TouchableOpacity
            style={{backgroundColor: 'white', padding: 8, borderRadius: 8}}>
            <Text style={{fontSize: 16, color: 'black', fontWeight: '700'}}>
              Danh mục
            </Text>
            <Text>Phụ kiện</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: 'white',
              marginLeft: '10%',
              padding: 8,
              borderRadius: 8,
            }}>
            <Text style={{fontSize: 16, color: 'black', fontWeight: '700'}}>
              Dành cho
            </Text>
            <Text>{typeProductDetail}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: 'white',
              marginLeft: '10%',
              padding: 8,
              borderRadius: 8,
            }}>
            <Text style={{fontSize: 16, color: 'black', fontWeight: '700'}}>
              Số lượng: 
            </Text>
            <Text>{quantityProductDetail}</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            marginTop: '5%',
            flexDirection: 'row',
            width: '73%',
            justifyContent: 'space-between',
            backgroundColor: 'white',
            alignItems: 'center',
            padding: 8,
            borderRadius: 8,
          }}>
         

            <View style={{marginLeft: '5%'}}>
              <Text style={{fontSize: 18, color: 'black', fontWeight: '500'}}>
                Mô tả:
              </Text>
              <Text>{descriptionProductDetail}</Text>
            </View>
          </View>

          
        <TouchableOpacity
          style={{
            marginTop: '5%',
            backgroundColor: '#18A2E1',
            padding: '3%',
            borderRadius: 8,
          }} 
          onPress={() => navigation.navigate(EDIT_PRODUCTS_SCREEN, {
              _id: id,
              codeProduct: codeProductDetail,
              descriptionProduct: descriptionProductDetail,
              imgProduct: imgProductDetail,
              nameProduct: nameProductDetail,
              priceProduct: priceProductDetail,
              quantityProduct: quantityProductDetail,
              typeProduct: typeProductDetail
          })} 
          >
          <Text style={{fontSize: 20, color: 'white', fontWeight: '800'}}>
            Chỉnh sửa
          </Text>
        </TouchableOpacity>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Image
              style={{width: 60, height: 60}}
              source={require('../../assets/image/warning.png')}></Image>
            <Text style={styles.modalText}>Xac nhan xoa dich vu!</Text>
            <Block row justifySpaceBetween>
              <TouchableOpacity
                style={[styles.button, styles.buttonClose]}
                onPress={() => deletePet(id,'productStore')}>
                  {/* onPress={() => */}
                <Text style={styles.textStyle}>Đồng ý</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, styles.buttonClose2]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>Huy</Text>
              </TouchableOpacity>
            </Block>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  modalView: {
    margin: 30,
    marginTop: '60%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 5,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#52B4FF',
  },
  buttonClose: {
    backgroundColor: '#52B4FF',
    width: 100,
  },
  buttonClose2: {
    marginLeft: '10%',
    backgroundColor: 'grey',
    width: 100,
  },
  textStyle: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  hinh: {
    marginTop: 20,
    marginLeft: '5%',
    width: '100%',
    height: 350,
  },
});

