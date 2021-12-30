import login from './LoginService';
import getUserInfo from './UserInfoService';
import { useDispatch } from 'react-redux';
import { setUserInfo } from '../../redux/UserInfo';
import {
  showFillData,
  showFillEmail,
  showFillPassword,
  showWrongData,
  redirectToDashboard,
} from '../../redux/login';

const LoginController = function () {
  const dispatch = useDispatch();

  /**
* @description Check that the user enter a valid data during login and procced to login if valid
* @param {MyEvent} e - The observable event.
* @listens MyEvent
*/
  const loginHandler = async (e) => {
    e.preventDefault();
    try{
      if (e.target && e.target.email.value !== '' && e.target.password.value !== '') {
        const response = await login(e.target.email.value, e.target.password.value);
        if (response.result === true) {       
          localStorage.userId = response.userId;
          localStorage.InfinteScrolling = response.InfinteScrolling;
          localStorage.handle = response.handle;
          localStorage.blog1 = response.blogs[0];
          localStorage.blogs = JSON.stringify(response.blogs);
          localStorage.token = response.token;          
          const response2 = await getUserInfo();
          dispatch(setUserInfo(response2.data));
          dispatch(redirectToDashboard());
        } else {
          dispatch(showWrongData());
        }
      } else if (e.target.email.value === '' && e.target.password.value === '') {
        dispatch(showFillData());
      } else if (e.target.email.value !== '') {
        dispatch(showFillPassword());
      } else {
        dispatch(showFillEmail());
      }
    }catch(e){
      dispatch(showWrongData());
    }    
  };

  return {
    loginHandler,
  };
};

export default LoginController;
