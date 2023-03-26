import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
  Modal,
} from 'react-native';
import Block from '../../components/Block';
import React, {useState} from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useRoute} from '@react-navigation/native';
import formatMoney from '../../components/FormatMoney';
import {EDIT_PETS_SCREEN} from '../../router/ScreenName';
import productApi from '../../api/productApi';



const PetDetail = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const deletePet = async (id,nameModel) =>{
    console.log('iddsadsad', id, nameModel)
    const a = await productApi.DelelePet(id,nameModel);
    setModalVisible(false);
    navigation.goBack()
    console.log(a)
  }


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


  console.log('heheheh')
  return (
    <View style={{backgroundColor: '#dcdcdc', height: '100%'}}>
      <View >
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

        <View style={{alignItems: 'center'}}>
          <Image
            source={{uri: imgPet}}
            style={{width: 220, height: 240, borderRadius: 8}}></Image>
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
        <View style={{marginTop: '3%', marginLeft: '10%'}}>
          <Text style={{fontSize: 20, color: 'black', fontWeight: 'bold'}}>
            Tên: {namePet}
          </Text>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>Giá: {formatMoney(pricePet)}</Text>
          <Text style={{fontSize: 17, color: 'black', fontWeight: '600'}}>
            Tình trạng: Còn hàng
          </Text>
        </View>
        <Block marginLeft={'10%'}>
        <View style={{flexDirection: 'row', width: '73%', marginTop: '3%',}}>
          <TouchableOpacity
            style={{backgroundColor: 'white', padding: 8, borderRadius: 8, alignItems: 'center'}}>
            <Text style={{fontSize: 16, color: 'black', fontWeight: '700'}}>
              Danh mục
            </Text>
            <Text>{typePet}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: 'white',
              marginLeft: '10%',
              padding: 8,
              borderRadius: 8,
              alignItems: 'center'
            }}>
            <Text style={{fontSize: 16, color: 'black', fontWeight: '700'}}>
              Dành cho
            </Text>
            <Text>{typePet}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: 'white',
              marginLeft: '10%',
              padding: 8,
              borderRadius: 8,
              alignItems: 'center'
            }}>
            <Text style={{fontSize: 16, color: 'black', fontWeight: '700'}}>
              Số lượng: 
            </Text>
            <Text>{quantityPet}</Text>
          </TouchableOpacity>
        </View>
        </Block>

        <View
          style={{
            marginTop: '5%',
            width: '73%',
            backgroundColor: 'white',
            borderRadius: 8,
            width: '80%',
            height: 80,
            marginLeft: '10%',
          }}>
         

            <View style={{marginLeft: '2%', width: '75%', height: 51}}>
              <Text style={{fontSize: 18, color: 'black', fontWeight: '500'}}>
                Mô tả:
              </Text>
              <Text>{descriptionPet}</Text>
            </View>
          </View>

        <TouchableOpacity
          onPress={() =>
            navigation.navigate(EDIT_PETS_SCREEN, {
              agePet: ageProduct,
              _id: id,
              code: codeProduct,
              descriptionPet: descriptionProduct,
              imgPet: imgProduct,
              genderPet: genderProduct,
              namePet: nameProduct,
              pricePet: priceProduct,
              quantityPet: quantityProduct,
              typePet: typeProduct,
            })
          }
          style={{
            marginTop: '5%',
            backgroundColor: '#18A2E1',
            padding: '3%',
            borderRadius: 8,
            alignItems: 'center',
            width: '50%',
            marginLeft: '25%',

          }}>
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
                onPress={() => deletePet(id,'petStore')}>
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

export default PetDetail;

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
