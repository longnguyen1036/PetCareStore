import {
    Image,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    SafeAreaView,
    ScrollView,
    Alert,
    Linking
  } from 'react-native';
  import React,{useState, useEffect} from 'react';
  import Block from '../../components/Block';
  import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
  import {useNavigation} from '@react-navigation/native';
  import AsyncStorage from '@react-native-async-storage/async-storage';
  import { EDIT_PROFILE_ACCOUNT, EDIT_PROFILE_ADDRESS, HISTORY_PRODUCTS, HISTORY_SERVICES, LOGIN_SCREEN } from '../../router/ScreenName';
  import { useDispatch, useSelector } from 'react-redux';
  import { loggedAction, logoutAction } from '../../redux/actions/authAction';
import authApi from '../../api/authApi';


  const Profile = ({navigation}) => {
    const dispatch = useDispatch()
    const authState = useSelector(state => state.authState.userInfo)
    console.log('authState: ' , authState.id)
    
    const [profileStore, setProFileStore] = useState()

    const signOut = async () => {
    Alert.alert(
        'Đăng xuất',
        'Bạn có chắc sẽ đăng xuất tài khoản này',
        [
          {
            text: 'Không',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {
            text: 'Có',
            onPress: async () => {
            AsyncStorage.setItem('checkLogin', 'false');
            const checkLogin = await AsyncStorage.getItem('checkLogin'); 
            dispatch(logoutAction());
              
              console.log('dang xuat')
            },
          },
        ],
        {cancelable: false},
      );
    };

    const getInformation =  async () => {
      const getProfile = await authApi.getProfile(authState.id)
      setProFileStore(getProfile.data.data)
    }

    useEffect(() => {
      getInformation();
    },[])

    const getLocation =  () => {
        const address = profileStore.addressStore[0]
        const url = `https://www.google.com/maps/search/${encodeURIComponent(address)}`
        Linking.openURL(url)
    }

    console.log('getInformation', profileStore);
    return (
      <View style={{alignItems: 'center', backgroundColor: '#dcdcdc', flex: 1}}>
        <View
          style={{
            height: '25%',
            width: '100%',
            backgroundColor: '#18A2E1',
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
          }}>
          <Block
            row={1}
            alignCenter
            width={'100%'}
            justifySpaceBetween
            paddingHorizontal={10}
            marginTop={'2%'}>
            <FontAwesome5 name="chevron-left" size={30} />
            <Text
              style={{
                width: '60%',
                color: 'white',
                fontSize: 20,
                fontWeight: 'bold',
              }}>
              Tài khoản
            </Text>
          </Block>
        </View>
        <View
          style={{
            height: '27%',
            width: '90%',
            backgroundColor: '#FFFFFF',
            borderRadius: 10,
            marginTop: '-25%',
          }}>
          <View>
            <View
              style={{
                flexDirection: 'row',
                paddingHorizontal: 10,
                paddingVertical: 10,
              }}>
              <View>
                <Image
                  source={require('../../assets/image/profileavatar.png')}
                  style={{}}></Image>
              </View>
              <View style={{marginLeft: 10, justifyContent: 'center'}}>
                <Text style={{fontSize: 20, fontWeight: '700', color: 'black'}}>
                  {profileStore?.nameStore}
                </Text>
                <Text style={{marginTop: 10}}>{profileStore?.emailStore}</Text>
                <TouchableOpacity onPress={() => getLocation()}>

                <Text style={{marginTop: 5, color: 'blue'}}>
                  {profileStore?.addressStore[0]}
                </Text>
                </TouchableOpacity>
                <Text style={{marginTop: 5}}>
                  {profileStore?.phoneStore}
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginTop: '1%',
            }}>
            <TouchableOpacity

              style={{
                backgroundColor: '#18A2E1',
                width: '30%',
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
                padding: 10,
                borderRadius: 10,
              }}
              onPress={() => signOut()}>
              <Text style={{color: 'white', fontWeight: 'bold'}}>Camera</Text>
              <FontAwesome5 name="camera-retro" size={25} color={'white'} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: '#18A2E1',
                width: '30%',
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
                padding: 10,
                borderRadius: 10,
              }}>
              <Text style={{color: 'white', fontWeight: 'bold'}}>Chat</Text>
              <FontAwesome5 name="sms" size={25} color={'white'} />
            </TouchableOpacity>
          </View>
        </View>
  
        <View style={{width: '90%', marginTop: '3%', flexDirection: 'row'}}>
          <TouchableOpacity
            style={{backgroundColor: '#18A2E1', padding: 8, borderRadius: 8}}>
            <FontAwesome5 name="stream" size={30} color={'white'} />
          </TouchableOpacity>
          <View style={{marginLeft: '3%'}}>
            <Text style={{fontSize: 18, color: 'black', fontWeight: 'bold'}}>
              Chỉnh sửa tài khoản
            </Text>
            <Text>Chỉnh sửa và quản lý tài khoản của bạn</Text>
          </View>
        </View>
  
        <View
          style={{
            width: '90%',
            marginTop: '3%',
            backgroundColor: '#18A2E1',
            height: '13%',
            borderRadius: 8,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              paddingHorizontal: 10,
            }}
            onPress={() => navigation.navigate(EDIT_PROFILE_ACCOUNT)}>
            <Text
              style={{
                width: '90%',
                fontSize: 16,
                color: 'white',
                fontWeight: 'bold',
              }}>
              Thay đổi mật khẩu
            </Text>
            <FontAwesome5 color={'white'} style={{width: '10%'}} name="chevron-right" size={18} />
          </TouchableOpacity>
          <View
            style={{
              borderWidth: 0.5,
              borderColor: 'white',
              width: '95%',
              marginTop: '3%',
            }}></View>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              paddingHorizontal: 10,
              marginTop: '3%',
            }}
            onPress={ ()=>navigation.navigate(EDIT_PROFILE_ADDRESS)}>
            <Text
              style={{
                width: '90%',
                fontSize: 16,
                color: 'white',
                fontWeight: 'bold',
              }}>
              Thay địa chỉ
            </Text>
            <FontAwesome5 color={'white'} style={{width: '10%'}} name="chevron-right" size={18} />
          </TouchableOpacity>
        </View>
        <View style={{width: '90%', marginTop: '3%', flexDirection: 'row'}}>
          <TouchableOpacity
            style={{backgroundColor: '#18A2E1', padding: 8, borderRadius: 8}}>
            <FontAwesome5 name="comments" size={30} color={'white'} />
          </TouchableOpacity>
          <View style={{marginLeft: '3%'}}>
            <Text style={{fontSize: 18, color: 'black', fontWeight: 'bold'}}>
              Hỗ trợ và phản hồi
            </Text>
            <Text>Liên hệ với chúng tôi</Text>
          </View>
        </View>
  
        <View
          style={{
            width: '90%',
            marginTop: '3%',
            backgroundColor: '#18A2E1',
            height: '18%',
            borderRadius: 8,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TouchableOpacity
          onPress={ ()=>navigation.navigate(HISTORY_PRODUCTS)}
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              paddingHorizontal: 10,
            }}>
            <Text
              style={{
                width: '90%',
                fontSize: 16,
                color: 'white',
                fontWeight: 'bold',
              }}>
              Lịch sử mua hàng
            </Text>
            <FontAwesome5
              style={{width: '10%'}}
              name="chevron-right"
              size={18}
              color={'white'}
            />
          </TouchableOpacity>
          <View
            style={{
              borderWidth: 0.5,
              borderColor: 'white',
              width: '95%',
              marginTop: '3%',
            }}></View>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              paddingHorizontal: 10,
              marginTop: '3%',
            }}
            onPress={ ()=>navigation.navigate(HISTORY_SERVICES)}>
            <Text
              style={{
                width: '90%',
                fontSize: 16,
                color: 'white',
                fontWeight: 'bold',
              }}>
              Lịch sử đặt dịch vụ
            </Text>
            <FontAwesome5
              style={{width: '10%'}}
              name="chevron-right"
              size={18}
              color={'white'}
            />
          </TouchableOpacity>
  
         
          <View
            style={{
              borderWidth: 0.5,
              borderColor: 'white',
              width: '95%',
              marginTop: '3%',
            }}></View>
          <TouchableOpacity
          onPress={() => signOut()}
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              paddingHorizontal: 10,
              marginTop: '3%',
            }}>
            <Text
              style={{
                width: '90%',
                fontSize: 16,
                color: 'white',
                fontWeight: 'bold',
              }}>
              Đăng xuất
            </Text>
            <FontAwesome5
              style={{width: '10%'}}
              name="chevron-right"
              size={18}
              color={'white'}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  
  export default Profile;
  
  const styles = StyleSheet.create({});
  