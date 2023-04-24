import { BASE_URL_TEST } from "./BASE_URL";
import { getToken, setToken } from '../helper/auth';

import axios from "axios";

const Register = async (nameStore, emailStore, passStore, addressStore, phoneStore) => {
    try {
        console.log('log name accccc', nameStore, emailStore, passStore, addressStore, phoneStore);
        const register = await axios.post(`${BASE_URL_TEST}/email`,
            {
                nameStore,
                emailStore,
                passStore,
                addressStore,
                phoneStore
            });
        // console.log('api register',register);
        return register;
    } catch (error) {
        console.log('loi api register', error);
        return null;
    }
};

const OTPRegister = async (otpAcount) => {

    try {
        // console.log( 'log name accccc',otpAcount);
        const registerotp = await axios.post(`${BASE_URL_TEST}/checkotp`,
            {
                otpAcount,
            });
        // console.log('api registerotp',registerotp);
        return registerotp;
    } catch (error) {
        console.log('loi api registerotp', error);
        return error;
    }
}
const Login = async (emailStore, passStore) => {

    try {
        console.log('truyen vao login', emailStore, passStore);
        const login = await axios.post(`${BASE_URL_TEST}/checklogin`,
            {
                emailStore,
                passStore
            });
        console.log('api login', login);
        return login;

    } catch (error) {
        console('loi api login error', error);
        return error;
    }
}

const getProfile = async (id) => {
    try {
        console.log('id', id);
        const token = await getToken();
        const getProduct = await axios.get(`${BASE_URL_TEST}/getastore/${id}`, {
            headers: {
                token: `Bearer ${token}`,
            },
        });
        // console.log('getProduct', getProduct)
        return getProduct

    } catch (error) {
        console('loi api getProfile error', error);

    }

}

const UpdateTokenFCM = async (tokenFCM) => {
    try {
        const token = await getToken();
        const getProduct = await axios.post(`${BASE_URL_TEST}/updateuser`,
        {
            tokenFCM
        },
        {
            headers: {
                token: `Bearer ${token}`,
            },
        });
        // console.log('UpdateTokenFCM', getProduct)
        return getProduct

    } catch (error) {
        console('loi api UpdateTokenFCM error', error);

    }

}
export default {
    Register,
    OTPRegister,
    Login,
    getProfile,
    UpdateTokenFCM
}