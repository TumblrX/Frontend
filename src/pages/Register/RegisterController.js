/* eslint-disable react-hooks/rules-of-hooks */
import register from './RegisterService';
import checkEmail from './CheckEmailService';
import checkUserName from './CheckUserNameService';
import { useDispatch, useSelector } from 'react-redux';
import {
  setErrorMessage, redirectToDashboard,
} from '../../redux/register';

const registerController = function () {
  const { errors } = useSelector((state) => state.register);

  const dispatch = useDispatch();

  const setToken = (token) => {
    localStorage.token = token;
  };

  const checkNonEmptyFields = (e) => {
    if (e.target && e.target.email.value !== '' && e.target.password.value !== '' && e.target.blogName.value !== '') {
      return true;
    }
    if (e.target && e.target.email.value === '' && e.target.password.value === '' && e.target.blogName.value === '') {
      dispatch(setErrorMessage(errors.fillData));
    } else if (e.target && e.target.email.value === '') {
      dispatch(setErrorMessage(errors.fillEmail));
    } else if (e.target && e.target.password.value === '') {
      dispatch(setErrorMessage(errors.fillPassword));
    } else if (e.target && e.target.blogName.value === '') {
      dispatch(setErrorMessage(errors.fillBlogName));
    }
    return false;
  };

  const validateEmail = (email) => {
    const emailPattern = /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!emailPattern.test(email)) {
      dispatch(setErrorMessage(errors.invalidEmail));
    }
    return emailPattern.test(email);
  };

  const validatePassword = (password) => {
    const notShortPassword = /(?=.{8,})/;
    const strongPassword = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/;
    const mediumPassword = /((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))/;
    if (!notShortPassword.test(password)) {
      dispatch(setErrorMessage(errors.shortPassword));
      return false;
    } if (!(strongPassword.test(password)) && !(mediumPassword.test(password))) {
      dispatch(setErrorMessage(errors.weakPassword));
      return false;
    }
    return true;
  };

  /**
  * @description Check that the user enter a valid data during login and procced to login if valid
  * @param {MyEvent} e - The observable event.
  * @listens MyEvent
  */
  const registerHandler = async (e) => {
    e.preventDefault();
    try {
      if (checkNonEmptyFields(e) && validateEmail(e.target.email.value)) {
        const unusedEmail = await checkEmail(e.target.email.value);
        if (!unusedEmail) {
          dispatch(setErrorMessage(errors.usedEmail));
        }
        if (unusedEmail && validatePassword(e.target.password.value)) {
          const unusedBlogName = await checkUserName(e.target.blogName.value);
          if (!unusedBlogName) {
            dispatch(setErrorMessage(errors.usedBlogName));
          }
          if (unusedBlogName) {
            const response = await register(
              e.target.blogName.value,
              e.target.email.value,
              e.target.password.value,
            );
            if (response.result === true) {
              setToken(response.token);
              dispatch(redirectToDashboard());
            }
          }
        }
      }
    } catch (err) {
    // empty
    }
  };
  return {
    registerHandler,
  };
};

export default registerController;
