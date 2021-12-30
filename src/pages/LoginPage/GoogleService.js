import api from "../../api/api";
import getUserInfo from './UserInfoService';
import  configureStore  from '../../redux/store';
import { setUserInfo } from '../../redux/UserInfo';


const responseGoogle = async (response) => {
    try{
        const res2 = await api.post('/api/user/redirect', { id_token:response.tokenObj.id_token });
        localStorage.userId = res2.data.id;
        localStorage.InfinteScrolling = res2.data.InfinteScrolling;
        if (!res2.data.InfinteScrolling)
            localStorage.InfinteScrolling = 'false';
        localStorage.handle = res2.data.name;
        localStorage.blog1 = res2.data.blogs[0];
        localStorage.blogs = JSON.stringify(res2.data.blogs);
        localStorage.token = res2.data.token;  
        const response2 = await getUserInfo();
        configureStore.dispatch(setUserInfo(response2.data));
    }catch(e){
        // empty
    }
}

const responseGoogleFail =  (response) => {
    // empty
}

export{
    responseGoogle,
    responseGoogleFail,
}