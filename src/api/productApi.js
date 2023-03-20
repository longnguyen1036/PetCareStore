import { BASE_URL_TEST } from "./BASE_URL";
import { getToken, setToken } from '../helper/auth';
import axios from "axios";

const InsertPet = async (namePet, agePet, typePet, image, pricePet, quantityPet, descriptionPet, genderPet, code, nameModel) => {
    try {
        console.log('log insert pet', namePet, agePet, typePet, image, pricePet, quantityPet, descriptionPet, genderPet, code, nameModel)
        const token = await getToken();
        console.log('token heheheeh', token);
        const formData = new FormData();
         formData.append('namePet', namePet);
        formData.append('agePet', agePet);
        formData.append('typePet', typePet);
        // formData.append('image', image);
        formData.append('image', {
            uri: image.path,
            type: image.mime,
            // name: image.filename,
          });
        formData.append('pricePet', pricePet);
        formData.append('quantityPet', quantityPet);
        formData.append('descriptionPet', descriptionPet);
        formData.append('genderPet', genderPet);
        formData.append('code', code);
        formData.append('nameModel', nameModel);
        console.log('formDatadsds', formData._parts);
        const insertPet = await axios.post(`${BASE_URL_TEST}/addproduct`, formData._parts, {
            headers: {
                token: `Bearer ${token}`
            }
        })
        // đợi tui xem lại code cái
        
        console.log('insert thanh cong', insertPet)
        return insertPet
    } catch (error) {
        console.log('insert pet error', error);
    }
}

export default {
    InsertPet
}