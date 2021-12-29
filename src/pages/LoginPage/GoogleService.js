import api from "../../api/api";
import getUserInfo from './UserInfoService';
import  configureStore  from '../../redux/store';
import { setUserInfo } from '../../redux/UserInfo';


const responseGoogle = async (response) => {
    console.log('Login Success:=======>  ', response.tokenObj.id_token);
    try{
        const res2 = await api.post('/api/user/redirect', { id_token:response.tokenObj.id_token });
        console.log(res2);
        localStorage.userId = res2.data.id;
        localStorage.InfinteScrolling = res2.data.InfinteScrolling;
        localStorage.handle = res2.data.name;
        localStorage.blogs = res2.data.blogs;
        localStorage.blog1 = res2.data.blogs[0];
        localStorage.token = res2.data.token;  
        const response2 = await getUserInfo();
        configureStore.dispatch(setUserInfo(response2.data));
        console.log(response);
        console.log(res2);
    }catch(e){
        console.log('Login :=======>  faillllllllllllled');
    }
}

const responseGoogleFail =  (response) => {
    console.log('Login :=======>  faillllllllllllled');
}

export{
    responseGoogle,
    responseGoogleFail,
}