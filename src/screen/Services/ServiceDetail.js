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

import MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';
import Block from '../../components/Block';
const createTwoButtonAlert = () =>
  Alert.alert('Xac nhan xoa san pham', 'Ban co chac chan muon xoa khong', [
    {
      text: 'Cancel',
      onPress: () => console.log('Cancel Pressed'),
      style: 'cancel',
    },
    {text: 'OK', onPress: () => console.log('OK Pressed')},
  ]);

const ServiceDetail = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const [ItemsImage, setItemsImage] = useState([
    {key: 1, image: require('../../assets/image/detail1.png')},
    {key: 2, image: require('../../assets/image/detail2.png')},
    {key: 3, image: require('../../assets/image/detail1.png')},
    {key: 4, image: require('../../assets/image/detail2.png')},
    {key: 5, image: require('../../assets/image/detail1.png')},
    {key: 6, image: require('../../assets/image/detail2.png')},
    {key: 7, image: require('../../assets/image/detail1.png')},
    {key: 8, image: require('../../assets/image/detail2.png')},
    {key: 9, image: require('../../assets/image/detail1.png')},
  ]);

  const [selectedImage, setSelectedImage] = useState(
    require('../../assets/image/detail1.png'),
  );
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
          <TouchableOpacity onPress={()=> navigation.goBack()}>
            <FontAwesome5 name="chevron-left" size={30} color={'black'} />
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>setModalVisible(true)}>
            <MaterialCommunityIcons name="delete" size={30} color={'black'} />
          </TouchableOpacity>
        </View>

        <View>
          <Image
            source={selectedImage}
            style={{width: 200, height: 200, borderRadius: 8}}></Image>
        </View>

        <ScrollView style={{width: '40%'}} horizontal={true}>
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
        </ScrollView>
        <View style={{marginTop: '3%', width: '73%'}}>
          <Text style={{fontSize: 20, color: 'black', fontWeight: 'bold'}}>
            BEAGLE CƯNG CƯNG
          </Text>

          <View
          style={{
            marginTop: '5%',
            flexDirection: 'row',
            width: '93%',
            justifyContent: 'space-between',
            backgroundColor: 'white',
            alignItems: 'center',
            padding: 8,
            borderRadius: 8,
          }}>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                backgroundColor: '#18A2E1',
                padding: 5,
                borderRadius: 8,
                alignItems: 'center',
              }}>
              <Image source={require('../../assets/image/iconimg.png')}></Image>
            </View>

            <View style={{marginLeft: '5%'}}>
              <Text style={{fontSize: 18, color: 'black', fontWeight: '500'}}>
                matpetfamily
              </Text>
              <Text>Store</Text>
            </View>
          </View>

          <TouchableOpacity
            style={{
              backgroundColor: '#18A2E1',
              borderRadius: 8,
              alignItems: 'center',
              justifyContent: 'center',
              padding: 5,
              height: 40,
            }}>
            <FontAwesome5 name="comments" size={20} color={'white'} />
          </TouchableOpacity>
        </View>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>700.000đ</Text>
         
        </View>
        <Block marginTop={'5%'} row >
        <View>
          <TouchableOpacity
            style={{
              backgroundColor: 'white',
              marginLeft: '5%',
              padding: 8,
              borderRadius: 8,
            }}>
            <Text style={{fontSize: 16, color: 'black', fontWeight: '700'}}>
              Giong
            </Text>
            <Text>Meo</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            style={{
              backgroundColor: 'white',
              marginLeft: '5%',
              padding: 8,
              borderRadius: 8,
            }}>
            <Text style={{fontSize: 16, color: 'black', fontWeight: '700'}}>
              Loai
            </Text>
            <Text>Cat tia</Text>
          </TouchableOpacity>
        </View>
        </Block>

        

        <TouchableOpacity
          style={{
            marginTop: '5%',
            backgroundColor: '#18A2E1',
            padding: '3%',
            borderRadius: 8,
          }}>
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
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Image style={{width: 60, height: 60}}  source={require('../../assets/image/warning.png')}></Image>
            <Text style={styles.modalText}>Xac nhan xoa dich vu!</Text>
            <Block row justifySpaceBetween>
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Đồng ý</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.buttonClose2]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Huy</Text>
            </TouchableOpacity>
            </Block>
          </View>
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
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      button: {
        borderRadius: 5,
        padding: 10,
        elevation: 2
      },
      buttonOpen: {
        backgroundColor: "#52B4FF",
      },
      buttonClose: {
        backgroundColor: "#52B4FF",
        width: 100,
      },
      buttonClose2: {
        marginLeft: '10%',
        backgroundColor: "grey",
        width: 100,
      },
      textStyle: {
        fontSize: 18,
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      },
      hinh: {
        marginTop: 20,
        marginLeft: '5%',
        width: '100%',
        height: 350,
      },
});
