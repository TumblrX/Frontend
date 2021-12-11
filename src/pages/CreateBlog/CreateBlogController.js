import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  setIsRobot, setBlogHandle, setBlogTitle, setBlogPrivacy, setBlogPassword,
} from '../../redux/createBlog';
import { useHistory } from 'react-router-dom';
import sendData from './CreateBlogService';

const useHandler = () => {
  const {
    blogHandle, blogTitle, blogIsPrivate, blogPassword, isRobot,
  } = useSelector((state) => state.create);
  const dispatch = useDispatch();
  const history = useHistory();
  /**
   * this function tests if input string has special characters
   * @function checkIfStringHasSpecialChar
   * @param {string} _string
   * @return {bool} return true  if input string contaions special character and false otherwise
   */
  const checkIfStringHasSpecialChar = (_string) => {
    const spChars = /[!@#$%^&*()_+=[\]{};':"\\|,.<>/?]+/;
    if (spChars.test(_string)) {
      return true;
    }
    return false;
  };
  const recatchaLoaded = useCallback(
    () => {
      console.log('captch loaded');
    },
    [],
  );
  /**
   * this function is the callback function for Recaptcha to update the isRobot state
   * @function verifyCallback
   * @param {bool} Response
   * @return {bool} return true  if input string contaions special character and false otherwise
   */
  const verifyCallback = (Response) => {
    if (Response) {
      dispatch(setIsRobot(false));
      const errorRobotCheck = document.getElementById('error_robot_check');
      errorRobotCheck.style.display = 'none';
    }
  };
  const expiredCallback = (Response) => {
    if (Response) {
      dispatch(setIsRobot(true));
    }
  };
  /**
   * this function handle the event of changing checkbox of making the blog private
   * it keep it in sync with the state
   * @function handleCheckChange
   * @param {event} event
   * @return {void} return nothing it just an event handler
   */
  const handleCheckChange = (event) => {
    dispatch(setBlogPrivacy(event.target.checked));
  };
  /**
   * this function handle the event of changing url input to keep it in sync with the state
   * it also makes some validations on the url like it doesnot contain hyphen at start or end
   * and that the urls doesnot contian any special characters
   * @function handleURLChange
   * @param {event} event
   * @return {void} return nothing it just an event handler
   */
  const handleURLChange = (event) => {
    const error = document.getElementById('errors');
    const errorURLEmpty = document.getElementById('error_url_empty');
    const errorURLContainsInvalid = document.getElementById('error_url_contains_invalid');
    const submitButton = document.getElementById('submit_button');
    const dashesError = document.getElementById('error_url_hyphen_starts_with');
    submitButton.disabled = false;
    dashesError.style.display = 'none';
    error.style.display = 'none';
    errorURLContainsInvalid.style.display = 'none';
    const url = event.target.value;
    dispatch(setBlogHandle(url));
    if (url[0] === '-' || url[url.length - 1] === '-') {
      error.style.display = 'block';
      dashesError.style.display = 'list-item';
      submitButton.disabled = true;
    }
    if (checkIfStringHasSpecialChar(url)) {
      error.style.display = 'block';
      errorURLContainsInvalid.style.display = 'list-item';
      submitButton.disabled = true;
    }
    if (url.length > 0) {
      errorURLEmpty.style.display = 'none';
    }
  };
  /**
   * this function handle the event of changing Title input to keep it in sync with the state
   * @function handleTitleChange
   * @param {event} event
   * @return {void} return nothing it just an event handler
   */
  const handleTitleChange = (event) => {
    const errorTitleEmpty = document.getElementById('error_title_empty');
    const errorTitleSmall = document.getElementById('error_title_small');
    const title = event.target.value;
    dispatch(setBlogTitle(title));
    console.log(blogTitle);
    if (title.length > 0) {
      errorTitleEmpty.style.display = 'none';
    }
    if (title.length > 6) {
      errorTitleSmall.style.display = 'none';
    }
  };
  /**
   * this function handle the event of changing Password input to keep it in sync with the state
   * @function handlePasswordChange
   * @param {event} event
   * @return {void} return nothing it just an event handler
   */
  const handlePasswordChange = (event) => {
    const errorPasswordEmpty = document.getElementById('error_password_empty');
    const errorPasswordSmall = document.getElementById('error_password_small');
    dispatch(setBlogPrivacy(true));
    const password = event.target.value;
    dispatch(setBlogPassword(password));
    if (password.length > 0) {
      errorPasswordEmpty.style.display = 'none';
    }
    if (password.length > 6) {
      errorPasswordSmall.style.display = 'none';
    }
  };
  const handleURLUsed = () => {
    const error = document.getElementById('errors');
    const errorURLTaken = document.getElementById('error_url_taken');
    error.style.display = 'block';
    errorURLTaken.style.display = 'list-item';
  };
  /**
   * this function handle the event of changing url input to keep it in sync with the state
   * it also makes some validations on the url like it doesnot contain hyphen at start or end
   * and that the urls doesnot contian any special characters
   * @function handleSubmit
   * @param {event} event
   * @return {void} return nothing it just an event handler
   */
  const handleSubmit = (event) => {
    event.preventDefault();
    const error = document.getElementById('errors');
    const errorURLEmpty = document.getElementById('error_url_empty');
    const errorTitleEmpty = document.getElementById('error_title_empty');
    const errorTitleSmall = document.getElementById('error_title_small');
    const errorPasswordEmpty = document.getElementById('error_password_empty');
    const errorPasswordSmall = document.getElementById('error_password_small');
    const errorRobotCheck = document.getElementById('error_robot_check');
    error.style.display = 'none';
    let okToSubmit = true;
    if (blogHandle.length === 0) {
      console.log('url length', blogHandle.length);
      error.style.display = 'block';
      errorURLEmpty.style.display = 'list-item';
      okToSubmit = false;
    } else {
      errorURLEmpty.style.display = 'none';
    }
    if (blogTitle.length === 0) {
      console.log('title Length', blogTitle.length);
      error.style.display = 'block';
      errorTitleEmpty.style.display = 'list-item';
      okToSubmit = false;
    } else {
      errorTitleEmpty.style.display = 'none';
    }
    if (blogIsPrivate && blogPassword.length === 0) {
      error.style.display = 'block';
      errorPasswordEmpty.style.display = 'list-item';
      okToSubmit = false;
    } else {
      errorPasswordEmpty.style.display = 'none';
    }
    if (blogTitle.length < 6) {
      error.style.display = 'block';

      errorTitleSmall.style.display = 'list-item';
      okToSubmit = false;
    } else {
      errorTitleSmall.style.display = 'none';
    }
    if (blogIsPrivate && blogPassword.length < 6) {
      error.style.display = 'block';
      errorPasswordSmall.style.display = 'list-item';
      okToSubmit = false;
    } else {
      errorPasswordSmall.style.display = 'none';
    }
    console.log('Robot ', isRobot);
    if (isRobot) {
      error.style.display = 'block';
      errorRobotCheck.style.display = 'list-item';
      okToSubmit = false;
    } else {
      errorRobotCheck.style.display = 'none';
    }
    if (okToSubmit) {
      error.style.display = 'none';
      console.log('Ok to Submit');
      sendData(
        {
          handle: blogHandle,
          title: blogTitle,
          isPrivate: blogIsPrivate,
          settings: {
            blogPassword,
          },
        },
        history,
        handleURLUsed,
      );
    }
  };
  return {
    verifyCallback,
    recatchaLoaded,
    expiredCallback,
    handleCheckChange,
    handleURLChange,
    handleTitleChange,
    handlePasswordChange,
    handleSubmit,
  };
};

export default useHandler;
