import {BASE_URL_TEST} from './BASE_URL';
import {getToken, setToken} from '../helper/auth';
import axios from 'axios';

const InsertPet = async (
  namePet,
  agePet,
  typePet,
  image,
  pricePet,
  quantityPet,
  descriptionPet,
  genderPet,
  code,
  nameModel,
) => {
  try {
    console.log(
      'log insert pet',
      namePet,
      agePet,
      typePet,
      image,
      pricePet,
      quantityPet,
      descriptionPet,
      genderPet,
      code,
      nameModel,
    );
    const token = await getToken();
    const formData = new FormData();
    formData.append('namePet', namePet);
    formData.append('agePet', agePet);
    formData.append('typePet', typePet);
    // formData.append('image', image);
    formData.append('image', {
      uri: image.path,
      type: image.mime,
      name: image.path.split('/').pop(),
    });
    formData.append('pricePet', pricePet);
    formData.append('quantityPet', quantityPet);
    formData.append('descriptionPet', descriptionPet);
    formData.append('genderPet', genderPet);
    formData.append('code', code);
    formData.append('nameModel', nameModel);

    console.log('formDatadsds', formData._parts);

    const insertPet = await axios.post(
      `${BASE_URL_TEST}/addproduct`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          token: `Bearer ${token}`,
        },
      },
    );

    console.log('insert thanh cong', insertPet);
    return insertPet;
  } catch (error) {
    console.log('insert pet error', error);
  }
};

const InsertProduct = async (
  nameProduct,
  priceProduct,
  image,
  descriptionProduct,
  quantityProduct,
  typeProduct,
  codeProduct,
  nameModel,
) => {
  try {
    console.log(
      'log insert pet',
      nameProduct,
      priceProduct,
      image,
      descriptionProduct,
      quantityProduct,
      typeProduct,
      codeProduct,
      nameModel,
    );
    const token = await getToken();
    const formData = new FormData();
    formData.append('nameProduct', nameProduct);
    formData.append('priceProduct', priceProduct);
    formData.append('image', {
      uri: image.path,
      type: image.mime,
      name: image.path.split('/').pop(),
    });
    formData.append('descriptionProduct', descriptionProduct);
    formData.append('quantityProduct', quantityProduct);
    formData.append('typeProduct', typeProduct);
    formData.append('codeProduct', codeProduct);
    formData.append('nameModel', nameModel);

    console.log('formDatadsds', formData._parts);

    const insertProduct = await axios.post(
      `${BASE_URL_TEST}/addproduct`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          token: `Bearer ${token}`,
        },
      },
    );

    console.log('insert thanh cong', insertProduct);
    return insertProduct;
  } catch (error) {
    console.log('insert pet error', error);
  }
};

const InsertService = async (
  nameService,
  priceService,
  image,
  descriptionService,
  typeService,
  quantityService,
  timeService,
  nameModel,
) => {
  try {
    console.log(
      'log insert pet',
      nameService,
      priceService,
      image,
      descriptionService,
      typeService,
      quantityService,
      timeService,
      nameModel,
    );
    const token = await getToken();
    const formData = new FormData();
    formData.append('nameService', nameService);
    formData.append('priceService', priceService);
    formData.append('image', {
      uri: image.path,
      type: image.mime,
      name: image.path.split('/').pop(),
    });
    formData.append('descriptionService', descriptionService);
    formData.append('typeService', typeService);
    formData.append('quantityService', quantityService);
    formData.append('timeService', timeService);
    formData.append('nameModel', nameModel);

    console.log('formDatadsds', formData._parts);

    const insertService = await axios.post(
      `${BASE_URL_TEST}/addproduct`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          token: `Bearer ${token}`,
        },
      },
    );

    console.log('insert thanh cong', insertService);
    return insertService;
  } catch (error) {
    console.log('insert pet error', error);
  }
};

const InsertImage = async image => {
  try {
    console.log('insert image', image);
    const file = {
      uri: image.path,
      type: image.mime,
      name: image.path.split('/').pop(),
    };
    const formData = new FormData();
    formData.append('image', file);
    console.log('formDataneneenen', formData._parts);
    const insertImage = await axios.post(
      `http://pes.store/api/upLoadOne`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuaWNrTmFtZSI6IkjDoG8gaG9hIHPDoG5oIMSRaeG7h3UiLCJ1c2VyTmFtZSI6IjA4NjU2NTg1NDQiLCJfaWQiOiI2M2U0YmUzMTlhMmYwZmYwN2MzNmNlNjEiLCJpYXQiOjE2NzkzMjEyMDR9.ZTSFNdq_Pz-ROLxOuP9Gk8p04JL_SA750Dwh3ZBtyKA`,
        },
      },
    );
    console.log('api image', insertImage);
    return insertImage;
  } catch (error) {
    console.log('insert image error', error);
  }
};

const getAllProduct = async () => {
  try {
    const token = await getToken();
    const getProduct = await axios.get(`${BASE_URL_TEST}/getpopulate`, {
      headers: {
        token: `Bearer ${token}`,
      },
    });

    // console.log('getall product', getProduct )
    return getProduct;
  } catch (error) {
    console.log('getall product error', error);
  }
};

const EditProduct = async (
  _id,
  namePet,
  agePet,
  typePet,
  pricePet,
  quantityPet,
  descriptionPet,
  genderPet,
  code,
  nameModel,
) => {
  try {
    const token = await getToken();
    const editProduct = await axios.post(
      `${BASE_URL_TEST}/edtting`,
      {
        _id,
        namePet,
        agePet,
        typePet,
        pricePet,
        quantityPet,
        descriptionPet,
        genderPet,
        code,
        nameModel,
      },
      {
        headers: {
          token: `Bearer ${token}`,
        },
      },
    );

    console.log('EditProduct', editProduct )
    return editProduct;
  } catch (error) {
    console.log('EditProduct error', error);
  }
};

export default {
  InsertPet,
  InsertImage,
  InsertProduct,
  InsertService,
  getAllProduct,
  EditProduct
};
