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
import React, {useState} from 'react';
import Block from '../../components/Block';
import Text from '../../components/Text';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import SelectDropdown from 'react-native-select-dropdown';

const categoryproducts = ['Thức ăn', 'Dây', 'Quần', 'Jerry'];

const InsertService = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const DATA = [
    {
      id: 1,
      time: '08:00',
      status: true,
    },
    {
      id: 2,
      time: '08:30',
      status: false,
    },
    {
        id: 3,
        time: '08:30',
        status: false,
      },
      {
        id: 4,
        time: '08:30',
        status: false,
      },
      {
        id: 5,
        time: '08:30',
        status: false,
      },
      {
        id: 6,
        time: '08:30',
        status: false,
      },
      {
        id: 7,
        time: '+',
        status: false,
      },
  ];
  const renderItem = ({item}) => {
    console.log('itemmm',item);
    return (
      <TouchableOpacity >
        <Block paddingTop={20} alignCenter margin={5} width={60} height={60} backgroundColor={'#ECF2F8'}> 
            <Text>{item.time}</Text>
        </Block>
      </TouchableOpacity>
    );
  };


  return (
    <View style={styles.container}>
      <View style={styles.hearderIcon}>
        <TouchableOpacity>
          <FontAwesome5
            style={{}}
            color={'black'}
            name="chevron-left"
            size={25}
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.iconAdd}>
        <FontAwesome5 style={{}} color={'black'} name="plus" size={25} />
      </TouchableOpacity>

      <View style={styles.conTent}>
        <View>
          <Text style={styles.nameProduct}>Tên dịch vụ</Text>
        </View>
        <View style={styles.textInput}>
          <TextInput placeholder="Nhập tên dịch vụ" />
        </View>

        <View>
          <Text style={styles.nameProduct}>Giá dịch vụ</Text>
        </View>
        <View style={styles.textInput}>
          <TextInput placeholder="Nhập giá dịch vụ" />
        </View>

        <View>
          <Text style={styles.nameProduct}>Giống</Text>
        </View>

        <SelectDropdown
          data={categoryproducts}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index);
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
          defaultButtonText={'Chó'}
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
          <Text style={styles.nameProduct}>Loại dịch vụ</Text>
        </View>

        <SelectDropdown
          data={categoryproducts}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index);
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
          defaultButtonText={'Thú y'}
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
        <TouchableOpacity style={styles.PressInsert}>
          <Text style={{color: 'white', fontSize: 16, fontWeight: '600'}}>
            Thêm sản phẩm
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
            <FlatList
              numColumns={4}
              data={DATA}
              renderItem={renderItem}
              keyExtractor={item => item.id}
            />
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
    </View>
  );
};

export default InsertService;

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
    height: 50,
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
