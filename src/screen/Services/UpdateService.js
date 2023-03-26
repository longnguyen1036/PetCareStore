import {
    StyleSheet,
    View,
    Image,
    TouchableOpacity,
    TextInput,
    SafeAreaView,
    FlatList,
    Modal,
    Alert,
  } from 'react-native';
  import React, {useEffect, useState} from 'react';
  import Block from '../../components/Block';
  import Text from '../../components/Text';
  import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
  import SelectDropdown from 'react-native-select-dropdown';
  import ImagePicker from 'react-native-image-crop-picker';
  import productApi from '../../api/productApi';
  import {useRoute} from '@react-navigation/native';
  import Toast, {ErrorToast} from 'react-native-toast-message';
import { HOME_SCREEN } from '../../router/ScreenName';
  
  const categoryproducts = ['Chó', 'Mèo', 'Hamster', 'Vẹt', 'Khác...'];
  
  const UpdateService = ({navigation}) => {
    const route = useRoute()
    const {
        _id,
        descriptionService,
        imgService,
        nameService,
        priceService,
        quantityService,
        timeService,
        typeService
    } = route.params
    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisibleTime, setModalVisibleTime] = useState(false);
    const [time, setTime] = useState('');
 
    
    const [nameServiceUpdate, setNameSeriveUpdate] = useState(nameService);
    const [id, setId] = useState(_id);
    const [descriptionServiceUpdate, setDescriptionServiceUpdate] = useState(descriptionService);
    const [imgServiceUpdate, setImgSeriveUpdate] = useState(imgService);
    const [priceServiceUpdate, setPriceSeriveUpdate] = useState(priceService);
    const [timeServiceUpdate, setTimeSeriveUpdate] = useState(timeService);
    const [typeServiceUpdate, setTypeSeriveUpdate] = useState(typeService);
    const [quantityServiceUpdate, setQuantitySeriveUpdate] = useState(quantityService);

    const [imageEdit, setImageEdit] = useState();
    const [loading, setLoading] = useState(false);
  
   console.log('gia gia ', timeServiceUpdate)

   const pushAdd = () => {
      const arrAdd = [...timeService, {
        "time": "+",
        "status": true
      }];
      setTimeSeriveUpdate(arrAdd)
      
   }

   useEffect(() => {
      pushAdd()
   },[])
  
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
      timeServiceUpdate.pop()
      // const timeApi = JSON.stringify(timeServiceUpdate);

      const res = await productApi.EditProduct3(
        id,
        nameServiceUpdate,
        priceServiceUpdate,
        descriptionServiceUpdate,
        typeServiceUpdate,
        quantityServiceUpdate,
        timeServiceUpdate,
        'serviceStore',
      );
      console.log('resss', res)
      if (res.status === 200) {
        setLoading(false);
        showToast();
        navigation.navigate(HOME_SCREEN);
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
  
    const insertTimeService = () => {
      const arrTime = [...timeServiceUpdate];
      arrTime.push(arrTime[arrTime.length - 1]);
  
      arrTime[arrTime.length - 2] = {...time};
  
      setTimeSeriveUpdate(arrTime);
      setModalVisibleTime(false);

    }

    const eventChangeColor = (item) => {
      if(item.time === '+'){
        console.log('arrTime: ', timeService);
      }else{
        for (let i = 0; i < timeServiceUpdate.length; i++) {
          if(item.time == timeServiceUpdate[i].time){
            const tmp = [...timeServiceUpdate]
            tmp[i].status = !tmp[i].status
            setTimeSeriveUpdate(tmp)
            console.log('hahahaaha', timeServiceUpdate)
            return 
          }
        }
      }
    }

    const renderItem = ({item}) => {
      console.log('itemmm', item);
      return (
        <TouchableOpacity
          onPress={() => {
              eventChangeColor(item),
              item.time === '+' ? setModalVisibleTime(true) : setModalVisibleTime(false)
          }}>
          <Block
            alignCenter
            margin={5}
            width={60}
            height={60}
            paddingVertical={ 15}
            backgroundColor={'#ECF2F8'}>
            <Text bold style={{fontSize:  18, color: item.status == false ? 'grey' : 'black' }}>
              {item.time}
            </Text>
          </Block>
        </TouchableOpacity>
      );
    };
  
    return (
      <View style={styles.container}>
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
                source={{uri: imgServiceUpdate}}
                style={{width: 100, height: 100, borderRadius: 8}}></Image>
            </View>
          )}
      </View>
  
        <View style={styles.conTent}>
          <View>
            <Text style={styles.nameProduct}>Tên dịch vụ</Text>
          </View>
          <View style={styles.textInput}>
          <TextInput
                placeholder="Nhập tên dịch vụ"
                onChangeText={setNameSeriveUpdate}
                value={nameServiceUpdate}
              />
          </View>
  
          <View>
              <Text style={styles.nameProduct}>Mô tả</Text>
            </View>
            <View style={styles.textInput}>
              <TextInput
                placeholder="Ví dụ: massage cho chó mèo từ a tới z,.... "
                onChangeText={setDescriptionServiceUpdate}
                value={descriptionServiceUpdate}
              />
            </View>
          <View>
            <Text style={styles.nameProduct}>Giá dịch vụ</Text>
          </View>
          <View style={styles.textInput}>
            <TextInput placeholder="Nhập giá dịch vụ" 
            keyboardType="numeric"
            onChangeText={setPriceSeriveUpdate}
            value={priceServiceUpdate}/>
          </View>
  
          <View>
              <Text style={styles.nameProduct}>Số lượng</Text>
            </View>
            <View style={styles.textInput}>
              <TextInput
                placeholder="Nhập số lượng"
                keyboardType="numeric"
                onChangeText={setQuantitySeriveUpdate}
                value={quantityServiceUpdate}
              />
            </View>
  
          <View>
            <Text style={styles.nameProduct}>Giống</Text>
          </View>
  
          <SelectDropdown
            data={categoryproducts}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
              setTypeSeriveUpdate(selectedItem)
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
            defaultButtonText={typeServiceUpdate}
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
            <Text style={styles.nameProduct}>Thời gian</Text>
          </View>
  
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Block
              backgroundColor={'white'}
              border={1}
              width={180}
              height={50}
              radius={10}
              alignCenter
              paddingTop={10}>
              <Text size={18} color={'black'}>
                Thời gian
              </Text>
            </Block>
          </TouchableOpacity>
        </View>
        <View style={styles.viewPressInsert}>
        <TouchableOpacity style={styles.PressInsert} onPress={() => editProduct()}>
            <Text style={{color: 'white', fontSize: 16, fontWeight: '600'}}>
              Sửa dịch vụ
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
          <View style={styles.modalView}>
            <FlatList numColumns={4} data={timeServiceUpdate} renderItem={renderItem} />
  
            <Block row margin={10}>
              <TouchableOpacity
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>Đồng ý</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, styles.buttonClose2]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>Hủy</Text>
              </TouchableOpacity>
            </Block>
          </View>
        </Modal>
  
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisibleTime}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisibleTime(!modalVisibleTime);
          }}>
          <View
            style={{
              width: 350,
              height: 350,
              backgroundColor: 'white',
              marginTop: '50%',
              marginLeft: '5%',
              paddingHorizontal: 12,
            }}>
            <TextInput
              value={time}
              onChangeText={time =>
                setTime({time: time.toString(), status: true, })
              }
              placeholder="Nhập thời gian dịch vụ 12:00"
              style={{
                marginTop: '20%',
                paddingHorizontal: 12,
                backgroundColor: '#ECF2F8',
                height: 44,
                fontSize: 19,
              }}></TextInput>
            <Block row marginTop={'40%'} marginLeft={'22%'}>
              <TouchableOpacity
                style={[styles.button, styles.buttonClose]}
                onPress={() => insertTimeService()}>
                <Text style={styles.textStyle}>Đồng ý</Text>
              </TouchableOpacity>
  
              <TouchableOpacity
                style={[styles.button, styles.buttonClose2]}
                onPress={() => setModalVisibleTime(!modalVisibleTime)}>
                <Text style={styles.textStyle}>Hủy</Text>
              </TouchableOpacity>
            </Block>
          </View>
        </Modal>
      </View>
    );
  };
  
  export default UpdateService;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
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
      height: 30,
      backgroundColor: '#FFF',
      borderRadius: 8,
      borderWidth: 1,
      borderColor: '#444',
    },
    dropdown4BtnTxtStyle: {color: '#444', textAlign: 'left'},
    modalView: {
      margin: 30,
      marginTop: '60%',
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 10,
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
      marginRight: 10,
    },
    button2: {
      borderRadius: 5,
      padding: 10,
      elevation: 2,
      marginRight: 10,
    },
  
    buttonClose: {
      backgroundColor: '#52B4FF',
      width: 100,
    },
    buttonClose2: {
      backgroundColor: '#7C7C7C',
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
  });
  