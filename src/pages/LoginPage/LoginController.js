import login from './LoginService';
import { useDispatch } from 'react-redux';
import { setID } from '../../redux/UserInfo';
import {
  showFillData,
  showFillEmail,
  showFillPassword,
  showWrongData,
  redirectToDashboard,
} from '../../redux/login';
import api from '../../api/api';

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

    if (e.target && e.target.email.value !== '' && e.target.password.value !== '') {
      const response = await login(e.target.email.value, e.target.password.value);
      if (response.result === true) {
        setToken(response.token);
        const re = await api.get('/api/user/info');
        // separate it later
        console.log(re.data);
        setID(re.data.id);
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
  };

  return {
    loginHandler,
  };
};

export default LoginController;
