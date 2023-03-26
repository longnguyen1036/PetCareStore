import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
  Modal,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Block from '../../components/Block';
import {useRoute} from '@react-navigation/native';
import formatMoney from '../../components/FormatMoney';
import { EDIT_SERVICES_SCREEN } from '../../router/ScreenName';

const ServiceDetail = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const route = useRoute();
  const {
    _id,
    descriptionService,
    imgService,
    nameService,
    priceService,
    quantityService,
    timeService,
    typeService,
  } = route.params;

  const [id, setId] = useState(_id);
  const [nameServiceDetail, setNameServiceDetail] = useState(nameService);
  const [descriptionServiceDetail, setDescriptionServiceDetail] = useState(descriptionService);
  const [priceServiceDetail, setPriceServiceDetail] = useState(priceService);
  const [imgServiceDetail, setImgServiceDetail] = useState(imgService);
  const [timeServiceDetail, setTimeServiceDetail] = useState(timeService);
  const [quantityServiceDetail, setQuantityServiceDetail] = useState(quantityService);
  const [typeServiceDetail, setTypeServiceDetail] = useState(typeService);
  // console.log('image', timeServiceDetail.lenght);
  const arr = timeServiceDetail;
const size = arr.length;

console.log(size); //

  const renderItem = ({item}) => {
    // console.log('itemmm', item);
    // item.forEach(element => {
    //   console.log(element)
    // });
    // console.log('phuoc', phuoc)
    return (

        <Block
          alignCenter
          margin={5}
          width={60}
          height={60}
          paddingVertical={15}
          backgroundColor={'#ECF2F8'}>
          <Text style={{fontSize: 18, color: item.status == false ? 'grey' : 'black' }}>
            {item.time}
          </Text>
        </Block>
    );
  };

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
            source={{uri: imgServiceDetail}}
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
        <View style={{marginTop: '3%', width: '73%'}}>
          <Text style={{fontSize: 20, color: 'black', fontWeight: 'bold'}}>
            {nameServiceDetail}
          </Text>

          
          <Text style={{fontSize: 18, fontWeight: 'bold',color: 'black' }}>Giá: {formatMoney(priceServiceDetail)}</Text>
          <Text style={{fontSize: 18, fontWeight: 'bold', color: 'red'}}>Khuyến mãi: {formatMoney(priceServiceDetail*80/100)}</Text>

        </View>
        <View style={{flexDirection: 'row', width: '73%', marginTop: '3%'}}>
          <TouchableOpacity
          onPress={()=>setModalVisible2()}
            style={{backgroundColor: 'white', padding: 8, borderRadius: 8}}>
            <Text style={{fontSize: 16, color: 'black', fontWeight: '700', marginTop: '10%'}}>
              Thời gian
            </Text>
            <Block absolute left={'90%'} top={'-10%'} backgroundColor={'red'} width={20} height={20} radius={10}>
              <Text style={{color: 'white', textAlign: 'center', }}>{size}</Text>
            </Block>
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
            <Text>{typeServiceDetail}</Text>
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
            <Text style = {{textAlign: 'center'}}>{quantityServiceDetail}</Text>
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
              <Text>{descriptionServiceDetail}</Text>
            </View>
          </View>

        <TouchableOpacity
          style={{
            marginTop: '5%',
            backgroundColor: '#18A2E1',
            padding: '3%',
            borderRadius: 8,
          }} 
          onPress={() => navigation.navigate(EDIT_SERVICES_SCREEN, {
              _id: id,
              descriptionService: descriptionServiceDetail,
              imgService: imgServiceDetail,
              nameService: nameServiceDetail,
              priceService: priceServiceDetail,
              quantityService: quantityServiceDetail,
              timeService: timeServiceDetail,
              typeService: typeServiceDetail
          })} 
          >
          <Text style={{fontSize: 20, color: 'white', fontWeight: '300'}}>
            Chỉnh sửa sản phẩm
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
                onPress={() => setModalVisible(!modalVisible)}>
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

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible2}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible2(!modalVisible2);
        }}>
        <View style={styles.modalView}>
          <FlatList numColumns={4} data={timeServiceDetail} renderItem={renderItem} />

          <Block row margin={10}>
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible2(!modalVisible2)}>
              <Text style={styles.textStyle}>Đồng ý</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.buttonClose2]}
              onPress={() => setModalVisible2(!modalVisible2)}>
              <Text style={styles.textStyle}>Hủy</Text>
            </TouchableOpacity>
          </Block>
        </View>
      </Modal>
    </View>
  );
};

export default ServiceDetail;

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
