import React, { useCallback } from 'react';
import Recaptcha from 'react-recaptcha';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import styles from './createBlog.module.scss';
import {
  setIsRobot, setBlogHandle, setBlogTitle, setBlogPrivacy, setBlogPassword,
} from '../../redux/createBlog';
import api from '../../api/api';
/**
 * Component to render the create blog page
 * @author Ahmed Mahmoud
 *
 * @component
 *
 */
const CreateBlog = function () {
  const {
    blogHandle, blogTitle, blogIsPrivate, blogPassword, isRobot,
  } = useSelector((state) => state.create);

  const dispatch = useDispatch();
  /**
   * this function makes a post request to the json server
   * @function sendData
   * @param {object} userData
   * @return {void} return nothing
   */
  const sendData = async (userData) => {
    try {
      const response = await api.post('/createBlog', userData);
      console.log(response);
    } catch (err) {
      console.log(`Error message: ${err.message}`);
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
      sendData({
        handle: blogHandle,
        title: blogTitle,
        isPrivate: blogIsPrivate,
        settings: {
          blogPassword,
        },
      });
    }
  };
  return (
    <div className={styles.baseContanier}>
      <div className={styles.contanier}>
        <div className={styles.content}>
          <h1>
            Create a new
            {blogIsPrivate ? 'Private' : ''}
            {' '}
            blog
          </h1>
          <div className={styles.blurb}>
            <p>
              This additional blog can be managed by multiple authors or set to private.
            </p>
            <p>
              <strong>Note</strong>
              : If you want to Like posts or Follow other users with this blog identity,
              you must log out and create a separate account.
            </p>
            <p>
              Learn more about
              {' '}
              <a href="https://tumblr.zendesk.com/hc/en-us/sections/205853348-Blog-management">Primary vs. Secondary blog features here</a>
              .
            </p>
          </div>
          <div
            id="errors"
            className={styles.errors_wrapper}
            style={{ display: 'none' }}
          >
            <ul>
              <li
                id="error_url_taken"
                style={{ display: 'none' }}
              >
                Blog url is not available!
              </li>
              <li
                id="error_url_hyphen_starts_with"
                style={{ display: 'none' }}
              >
                Can not do dashes at the start or end. Middles only.
              </li>
              <li
                id="error_url_contains_invalid"
                style={{ display: 'none' }}
              >
                Letters, numbers, and dashes only please.
              </li>
              <li
                id="error_url_empty"
                style={{ display: 'none' }}
              >
                URL can not be empty.
              </li>
              <li
                id="error_title_empty"
                style={{ display: 'none' }}
              >
                Title can not be empty.
              </li>
              <li
                id="error_title_small"
                style={{ display: 'none' }}
              >
                Title must be 6 char at least.
              </li>
              <li
                id="error_password_empty"
                style={{ display: 'none' }}
              >
                Password can not be empty.
              </li>
              <li
                id="error_password_small"
                style={{ display: 'none' }}
              >
                Password must be 6 char at least.
              </li>
              <li
                id="error_robot_check"
                style={{ display: 'none' }}
              >
                You need to verify that you are a real person.
              </li>
            </ul>
          </div>
          <form onSubmit={handleSubmit}>
            <div className={styles.firstSection}>
              <div className={styles.innerLeftColumn}>
                Title
              </div>
              <div className={styles.innerRightColumn}>
                <div className={styles.innerRightColumnFirst}>
                  <div className={styles.textFieldWrapper}>
                    <input
                      type="text"
                      className={styles.textField1}
                      value={blogTitle}
                      onChange={handleTitleChange}
                    />
                  </div>
                </div>
                <div className={styles.innerRightColumnSecond}>
                  (ie. Acme Corp, Sara & Jacob, My Awesome Blog)
                </div>
                <div className={styles.clear} />
              </div>
              <div className={styles.innerLeftColumn}>
                URL
              </div>
              <div className={styles.innerRightColumn}>
                <div className={styles.innerRightColumnFirst}>
                  <div className={styles.textFieldWrapper}>
                    <input
                      type="text"
                      className={styles.textField2}
                      id="new_group_name"
                      value={blogHandle}
                      onChange={handleURLChange}
                    />
                    <label
                      htmlFor="new_group_name"
                    >
                      .tumblr.com
                    </label>
                  </div>
                </div>
                <div className={styles.innerRightColumnSecond}>
                  (you can change this at any time)
                </div>
                <div className={styles.clear} />
              </div>
              <div className={`${styles.innerLeftColumn}`}>
                Privacy
              </div>
              <div className={`${styles.innerRightColumn} ${styles.final}`}>
                <table
                  border="0"
                  cellSpacing="0"
                  cellPadding="0"
                >
                  <tbody>
                    <tr>
                      <td valign="top">
                        <input
                          type="checkbox"
                          id="password_protected_checkbox"
                          checked={blogIsPrivate}
                          onChange={handleCheckChange}
                        />
                      </td>
                      <td valign="top">
                        <label
                          htmlFor="password_protected_checkbox"
                        >
                          Password protect this blog
                        </label>
                        <p>
                          This blog can only be viewed by people who enter this password:
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <input
                  className={styles.textField1}
                  style={{ width: '260px', marginLeft: '20px', border: '1px solid #d5d9dd' }}
                  id="new_group_password_protected"
                  type="text"
                  value={blogPassword}
                  onChange={handlePasswordChange}
                />
                <div className={styles.clear} />
              </div>
            </div>
            <div className={styles.secondSection}>
              <div style={{ marginBottom: '4px' }}>
                Are you a robot?
              </div>
              <Recaptcha
                sitekey="6Lfzj0QdAAAAAD6W8u9U-PhLTvbp2qmSzzogOSwy"
                render="explicit"
                verifyCallback={verifyCallback}
                onloadCallback={recatchaLoaded}
                expiredCallback={expiredCallback}
              />
              <br style={{ clear: 'both' }} />
              <Link to="/">
                <button
                  className={`${styles.chrome} ${styles.big}`}
                  style={{ float: 'right' }}
                >
                  Cancel
                </button>
              </Link>
              <button
                type="submit"
                className={`${styles.chrome} ${styles.big} ${styles.blue}`}
                id="submit_button"
              >
                <span id="submit_button_text">
                  Create
                  {' '}
                  {blogIsPrivate ? 'Private' : ''}
                  {' '}
                  blog
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default CreateBlog;
