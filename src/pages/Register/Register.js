import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import registerStyle from './Register.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { redirectToDashboard } from '../../redux/register';
import RegisterController from './RegisterController';
import { GoogleLogin } from 'react-google-login';
import {responseGoogle, responseGoogleFail} from '../../pages/LoginPage/GoogleService'

/**
 * Component to render the Email Section in the Accountsettings in the Settings page
 * @author Taher Mohamed
 *
 * @component
 */
// eslint-disable-next-line react/function-component-definition
const Register = function () {
  const {
    errorMessage, dashboard, errorMessages,
  } = useSelector((state) => state.register);
  const { registerHandler } = RegisterController();

  const dispatch = useDispatch();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (localStorage.getItem('token')) { dispatch(redirectToDashboard()); }
  });

  return (
    <div className={registerStyle.bodyRegister}>
      {dashboard
          && (
            <Redirect to="/dashboard" />
          )}
      <div className={registerStyle.container}>
        <h2 data-testid="h2"> tumblr </h2>
        <form data-testid="form" onSubmit={registerHandler}>

          {errorMessage !== 12
            && (
              <div data-testid="errorMessage" id={registerStyle.incorrectUser}>
                {
                  errorMessages[errorMessage]
                }
              </div>
            )}

          <input data-testid="email" type="text" name="email" id="email" placeholder="Email" />
          <input type="password" name="password" id="password" placeholder="Password" />
          <input type="text" name="blogName" id="blogName" placeholder="Blog name" />
          <p>
            By clicking &quot;sign up&quot;, or continuing with the other options below,
            you agree to Tumblr’s
            {' '}
            <a href="#"> Terms of Service </a>
            {' '}
            and
            have read the
            {' '}
            <a href="#">  Privacy Policy </a>
          </p>
          <input data-testid="signup" id="signup" type="submit" value="Sign up" />
        </form>
        <div id={registerStyle.or}>
          {' '}
          <hr />
          {' '}
          <p> or </p>
          <hr />
          {' '}

        </div>
        <GoogleLogin
          clientId="331010848924-g1hvj1d05al26e39got3e6p67t42pffa.apps.googleusercontent.com"
          buttonText="Continue with Google"
          onSuccess={responseGoogle}
          onFailure={responseGoogleFail}
          cookiePolicy={'single_host_origin'}
        />
        <p className={registerStyle.trend}>
          <svg viewBox="0 0 21.8 21.8" width="22" height="24" fill="#ffffff"><path d="M10.9 21.8C4.9 21.8 0 16.9 0 10.9S4.9 0 10.9 0s10.9 4.9 10.9 10.9-4.9 10.9-10.9 10.9zM12 2.1c-.5-.1-1.8-.1-2 0-4.1.4-7.5 3.7-8 7.8-.1.5-.1 1.8 0 2 .4 4.2 3.8 7.6 8 8h2c4.1-.5 7.4-3.8 7.8-8v-2C19.2 5.8 16 2.6 12 2.1zm1.7 11.3c-.1.2-.2.3-.4.4l-6.7 2.5c-.5.2-1.1-.3-.9-.9l2.5-6.7c.1-.2.2-.3.4-.4l6.7-2.5c.5-.2 1.1.3.9.9l-2.5 6.7zm-1.9-3.3c-.5-.5-1.3-.5-1.7 0-.5.5-.5 1.3 0 1.7.5.5 1.3.5 1.7 0 .4-.4.4-1.2 0-1.7z" /></svg>
          <span>
            {' '}
            <a href="#"> Here&apos;s what&apos;s trending </a>
            {' '}
          </span>
        </p>
      </div>
    </div>
  );
};
export default Register;
