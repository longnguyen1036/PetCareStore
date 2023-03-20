import AsyncStorage from '@react-native-async-storage/async-storage';


export const USER_KEY = "auth-key";

export const setToken = async (token) => {
  try {
    
    await AsyncStorage.setItem(USER_KEY, token);
    // const userInfo = decodeToken(token)
    // await AsyncStorage.setItem(USER_INFO, JSON.stringify(user));
  } catch (error) {
    //
    console.log(error,"Khong luu Token");
  }
};

export const getToken = async () => {
    try {
      const token = await AsyncStorage.getItem(USER_KEY);
      if (token) {
        return token
      }
      return null
    } catch (error) {
      return null;
    }
  };