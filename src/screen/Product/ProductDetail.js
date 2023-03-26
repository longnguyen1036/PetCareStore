import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useRoute } from '@react-navigation/native';
import formatMoney from '../../components/FormatMoney';
import { EDIT_PRODUCTS_SCREEN } from '../../router/ScreenName';

const ProductDetail = ({navigation}) => {
  const route = useRoute();
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

          <TouchableOpacity>
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
    </View>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({});
