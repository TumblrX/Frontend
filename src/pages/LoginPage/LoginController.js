import login from './LoginService';
import getUserInfo from './UserInfoService';
import getBlogInfo from './BlogInfoService';
import { useDispatch , useSelector } from 'react-redux';
import { setID , setInfinteScrolling } from '../../redux/UserInfo';
import {
  showFillData,
  showFillEmail,
  showFillPassword,
  showWrongData,
  redirectToDashboard,
} from '../../redux/login';

const LoginController = function () {
  const dispatch = useDispatch();

  const setToken = (token) => {
    localStorage.token = token;
  };
  
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
          setToken(response.token);
          const response2 = await getUserInfo();
          dispatch(setID(response2.data.blogs[0]));
          console.log(response2.data.blogs[0]);
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
