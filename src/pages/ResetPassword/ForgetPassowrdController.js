import forgetPassword from './forgetPasswordService';
import { useDispatch } from 'react-redux';
import {
  setHideForm, setHideConfirm, setHideError, setHideEmptyEmail,
} from '../../redux/forgetPassword';

const ForgetPasswordController = function () {
  
  const dispatch = useDispatch();
  
  const forgetPasswordHandler = async (e) => {
    e.preventDefault();   
    if (e.target.email && e.target.email.value !== '') {     
        
      const reponse = await forgetPassword(e.target.email.value);      
      if (reponse === true){
        dispatch(setHideEmptyEmail(true));
        dispatch(setHideError(true));
        dispatch(setHideConfirm(false));
        dispatch(setHideForm(true));
      }else{
        dispatch(setHideError(false));
        dispatch(setHideEmptyEmail(true));
      }   
    } else {            
        dispatch(setHideEmptyEmail(false));
    }
  };
 
  return {
    forgetPasswordHandler,
  };
};

export default ForgetPasswordController;
