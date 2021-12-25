/* eslint-disable react-hooks/rules-of-hooks */
import register from './RegisterService';
import { useDispatch, useSelector } from 'react-redux';
import {
  setErrorMessage, redirectToDashboard,
} from '../../redux/register';
import validatePassword from './CheckValidPasswordService';
import validateEmail from './CheckValidEmailService';
import checkNonEmptyFields from './CheckNonEmptyFieldsService';
import validateBlogName from './CheckValidBlogName';

const registerController = function () {
  const { errors } = useSelector((state) => state.register);

  const dispatch = useDispatch();

  const setToken = (token) => {
    localStorage.token = token;
  };

  /**
  * @description Check that the user enter a valid data during login and procced to login if valid
  * @param {MyEvent} e - The observable event.
  * @listens MyEvent
  */
  const registerHandler = async (e) => {
    e.preventDefault();
    let email;
    let password;
    let blogName;
    let ret;
    try {
        if(e && e.target){
            // check if all feilds are filled
            email = e.target.email.value;
            password = e.target.password.value;
            blogName = e.target.blogName.value;
            ret  = checkNonEmptyFields(email , password, blogName);
            if (ret === 0)
                dispatch(setErrorMessage(errors.fillData));
            else if (ret === 1)
                dispatch(setErrorMessage(errors.fillEmail));
            else if (ret === 2 )
                dispatch(setErrorMessage(errors.fillPassword));
            else if (ret === 3)
                dispatch(setErrorMessage(errors.fillBlogName));
            else{
                // check if the email is valid
                if (validateEmail(email)){
                    // check if the password is valid
                    if (validatePassword(password)){
                        ret = validateBlogName(blogName);
                        if (ret === 1){
                          console.log(ret);
                          dispatch(setErrorMessage(errors.spacesOnly));
                        }else if(ret === 2){
                          dispatch(setErrorMessage(errors.includeSpecialChars));
                        }else if(ret === 3){
                          dispatch(setErrorMessage(errors.tooLongName));
                        }else{
                          // Doing register process and wait for the result
                          const response = await register(blogName, email, password); 
                          setToken(response.token);
                          dispatch(redirectToDashboard());  
                        }                         
                    }else{
                        dispatch(setErrorMessage(errors.shortPassword));
                    }
                }else{
                    dispatch(setErrorMessage(errors.invalidEmail));
                }
            }
        }else{
            dispatch(setErrorMessage(errors.fillData));
        }
    } catch (err) {
      if (err.response){
        const symbol = err.response.data.symbol;
        console.log(symbol);
        if (symbol === '1') {
          dispatch(setErrorMessage(errors.weakPassword));
        }else if (symbol === '2'){
          dispatch(setErrorMessage(errors.invalidEmail));
        }else if (symbol === '3'){
          console.log("here");
          dispatch(setErrorMessage(errors.usedEmail));
        }else if (symbol === '4'){
          dispatch(setErrorMessage(errors.usedBlogName));
        } 
      }else{
    // empty
      }
    }
  };
  return {
    registerHandler,
  };
};

export default registerController;
