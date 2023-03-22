import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  FlatList,
} from 'react-native';
import Block from '../../components/Block';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import SelectDropdown from 'react-native-select-dropdown';
import productApi from '../../api/productApi';
import ImagePicker from 'react-native-image-crop-picker';

const categorypets = ['Chó', 'Mèo', 'Hamster', 'Vẹt', 'Khác...'];
const categorygenderpets = ['Đực', 'Cái'];

  const [namePet, setNamePet] = useState();
  const [agePet, setAgePet] = useState();
  const [typePet, setTypePet] = useState();
  const [imageUri, setImageUri] = useState(null);
  const [pricePet, setPricePet] = useState();
  const [quantityPet, setQuantityPet] = useState();
  const [descriptionPet, setDescriptionPet] = useState();
  const [genderPet, setGenderPet] = useState();
  const [urlImage, setUrlImage] = useState();

  const handleChooseImage = async () => {
        width: 300,
        height: 400,
        cropping: true,
      });

    }
  }

  const addProduct = async () => {
  }
  return (
    <View style={styles.container}>
      <ScrollView style={{}}>
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
              onChangeText={setNamePet}
              value={namePet}
            />
          </View>

          <View>
            <Text style={styles.nameProduct}>Mô tả</Text>
          </View>
          <View style={styles.textInput}>
            <TextInput
              placeholder="Ví dụ: mèo lông ngán, chó giống Đức..."
              onChangeText={setDescriptionPet}
              value={descriptionPet}
            />
          </View>

          <View>
            <Text style={styles.nameProduct}>Giá sản phẩm</Text>
          </View>
          <View style={styles.textInput}>
            <TextInput placeholder="Nhập giá sản phẩm" keyboardType="numeric" onChangeText={setPricePet} value={pricePet} />
          </View>

          <View>
            <Text style={styles.nameProduct}>Số lượng</Text>
          </View>
          <View style={styles.textInput}>
            <TextInput placeholder="Nhập số lượng" keyboardType="numeric" onChangeText={setQuantityPet} value={quantityPet} />
          </View>

          <View>
            <Text style={styles.nameProduct}>Tuổi</Text>
          </View>
          <View style={styles.textInput}>
          </View>

          <View>
            <Text style={styles.nameProduct}>Loại</Text>
          </View>

          <SelectDropdown
            data={categorypets}
            onSelect={(selectedItem, index) => {
              console.log('ehehehehe', selectedItem, index);
              setTypePet(selectedItem)
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
            defaultButtonText={'Chọn loại thú cưng'}
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
              setGenderPet(selectedItem)
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
            defaultButtonText={'Gender'}
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
          <TouchableOpacity style={styles.PressInsert} onPress={() => addProduct()}>
              Thêm sản phẩm
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default InsertPet;

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
    fontSize: 14,
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
    width: '65%',
    height: 40,
    backgroundColor: '#FFF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#444',
  },
});
