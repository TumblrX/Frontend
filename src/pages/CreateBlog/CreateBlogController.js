import { useSelector, useDispatch } from 'react-redux';
import {
  setBlogHandle, setBlogTitle, setBlogPrivacy, setBlogPassword,
} from '../../redux/createBlog';
import { useHistory } from 'react-router-dom';
import sendData from './CreateBlogService';

const useHandler = () => {
  const {
    blogHandle, blogTitle, blogIsPrivate, blogPassword,
  } = useSelector((state) => state.create);
  const dispatch = useDispatch();
  const history = useHistory();
  /**
   * this function checks if the error wrapping div should be displayed or not
   * @function checkerrordisplay
   * @return {void} return nothing
   */
  const checkerrordisplay = () => {
    const error = document.getElementById('errors');
    const errorURLEmpty = document.getElementById('error_url_empty');
    const errorTitleEmpty = document.getElementById('error_title_empty');
    const errorTitleSmall = document.getElementById('error_title_small');
    const errorPasswordEmpty = document.getElementById('error_password_empty');
    const errorPasswordSmall = document.getElementById('error_password_small');
    const errorURLContainsInvalid = document.getElementById('error_url_contains_invalid');
    const dashesError = document.getElementById('error_url_hyphen_starts_with');
    const errorURLTaken = document.getElementById('error_url_taken');
    let shouldhide = true;
    if (errorURLEmpty.style.display !== 'none') {
      shouldhide = false;
    }
    if (errorTitleEmpty.style.display !== 'none') {
      shouldhide = false;
    }
    if (errorTitleSmall.style.display !== 'none') {
      shouldhide = false;
    }
    if (errorPasswordEmpty.style.display !== 'none') {
      shouldhide = false;
    }
    if (errorPasswordSmall.style.display !== 'none') {
      shouldhide = false;
    }
    if (errorURLContainsInvalid.style.display !== 'none') {
      shouldhide = false;
    }
    if (dashesError.style.display !== 'none') {
      shouldhide = false;
    }
    if (errorURLTaken.style.display !== 'none') {
      shouldhide = false;
    }
    if (shouldhide) {
      error.style.display = 'none';
    }
  };
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
  /**
   * this function handle the event of changing checkbox of making the blog private
   * it keep it in sync with the state
   * @function handleCheckChange
   * @param {event} event
   * @return {void} return nothing it just an event handler
   */
  const handleCheckChange = (event) => {
    dispatch(setBlogPassword(''));
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
    const errorURLTaken = document.getElementById('error_url_taken');
    const errorURLContainsInvalid = document.getElementById('error_url_contains_invalid');
    const submitButton = document.getElementById('submit_button');
    const dashesError = document.getElementById('error_url_hyphen_starts_with');
    submitButton.disabled = false;
    dashesError.style.display = 'none';
    errorURLTaken.style.display = 'none';
    errorURLContainsInvalid.style.display = 'none';
    checkerrordisplay();
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
      checkerrordisplay();
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
    if (title.length > 0) {
      errorTitleEmpty.style.display = 'none';
      checkerrordisplay();
    }
    if (title.length >= 6) {
      errorTitleSmall.style.display = 'none';
      checkerrordisplay();
    }
  };
  /**
   * this function handle the event of focus for the password input field
   * @function handleFocusOut
   * @return {void} return nothing it just an event handler
   */
  const handleFocus = () => {
    dispatch(setBlogPrivacy(true));
  };
  /**
   * this function handle the event of outfocus for the password input field
   * @function handleFocusOut
   * @param {event} event
   * @return {void} return nothing it just an event handler
   */
  const handleFocusOut = (event) => {
    const password = event.target.value;
    if (!password.length) {
      dispatch(setBlogPrivacy(false));
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
      checkerrordisplay();
    }
    if (password.length > 6) {
      errorPasswordSmall.style.display = 'none';
      checkerrordisplay();
    }
  };
  /**
   * this function handle shows the url taken error
   * @function handleURLUsed
   * @return {void} return nothing
   */
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
    error.style.display = 'none';
    let okToSubmit = true;
    if (blogHandle.length === 0) {
      error.style.display = 'block';
      errorURLEmpty.style.display = 'list-item';
      okToSubmit = false;
    } else {
      errorURLEmpty.style.display = 'none';
      checkerrordisplay();
    }
    if (blogTitle.length === 0) {
      error.style.display = 'block';
      errorTitleEmpty.style.display = 'list-item';
      okToSubmit = false;
    } else {
      errorTitleEmpty.style.display = 'none';
      checkerrordisplay();
    }
    if (blogIsPrivate && blogPassword.length === 0) {
      error.style.display = 'block';
      errorPasswordEmpty.style.display = 'list-item';
      okToSubmit = false;
    } else {
      errorPasswordEmpty.style.display = 'none';
      checkerrordisplay();
    }
    if (blogTitle.length < 6) {
      error.style.display = 'block';

      errorTitleSmall.style.display = 'list-item';
      okToSubmit = false;
    } else {
      errorTitleSmall.style.display = 'none';
      checkerrordisplay();
    }
    if (blogIsPrivate && blogPassword.length < 6) {
      error.style.display = 'block';
      errorPasswordSmall.style.display = 'list-item';
      okToSubmit = false;
    } else {
      errorPasswordSmall.style.display = 'none';
      checkerrordisplay();
    }
    if (okToSubmit) {
      error.style.display = 'none';
      sendData(
        {
          handle: blogHandle,
          title: blogTitle,
          isPrivate: blogIsPrivate,
          password: blogPassword,
        },
        history,
        handleURLUsed,
      );
    }
  };
  return {
    handleCheckChange,
    handleURLChange,
    handleTitleChange,
    handlePasswordChange,
    handleSubmit,
    handleFocus,
    handleFocusOut,
  };
};

export default useHandler;
