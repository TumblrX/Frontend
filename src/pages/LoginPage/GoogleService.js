import api from "../../api/api";

const responseGoogle = async (response) => {
    console.log('Login Success:=======>  ', response.tokenObj.id_token);
    const res2 = await api.post('/api/user/redirect', { id_token:response.tokenObj.id_token });
    console.log(response);
    console.log(res2);
}

const responseGoogleFail =  (response) => {
    console.log('Login :=======>  faillllllllllllled');
}

export{
    responseGoogle,
    responseGoogleFail,
}