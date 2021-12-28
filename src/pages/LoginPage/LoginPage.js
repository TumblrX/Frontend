/* eslint-disable no-unused-vars */
import { useEffect } from 'react';
import loginPageStyle from './LoginPage.module.scss';
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import LoginController from './LoginController';
import { redirectToDashboard } from '../../redux/login';
import { GoogleLogin } from 'react-google-login';
import api from '../../api/api';
import {responseGoogle, responseGoogleFail} from './GoogleService'

const LoginComponent = function () {
  const {
    hideFillData, hideFillEmail, hideFillPassword, hideWrongData, dashboard,
  } = useSelector((state) => state.login);
 
  const { loginHandler } = LoginController();

  const dispatch = useDispatch();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (localStorage.getItem('token')) { dispatch(redirectToDashboard()); }
  });

  return (
    <div className={loginPageStyle.bodyLogin}>
      {dashboard
          && (
            <Redirect to="/dashboard" />
          )}
      <div className={loginPageStyle.container}>
        <h2 data-testid="h2"> tumblr </h2>
        <form data-testid="form" onSubmit={loginHandler}>

          {!hideFillData
                && (
                  <div data-testid="emptyData" id={loginPageStyle.incorrectUser}>You do have to fill this stuff out, you know.</div>
                )}

          {!hideFillEmail
                && (
                  <div data-testid="emptyEmail" id={loginPageStyle.incorrectUser}>You forgot to enter your email!</div>
                )}

          {!hideFillPassword
                && (
                  <div data-testid="emptyPassword" id={loginPageStyle.incorrectUser}>You forgot to enter your password!</div>
                )}

          {!hideWrongData
                && (
                  <div data-testid="wrongData" id={loginPageStyle.incorrectUser}>Your email or password were incorrect.</div>
                )}

          <input data-testid="email" type="text" name="email" id="email" placeholder="Email" />
          <input data-testid="password" type="password" name="password" id="password" placeholder="Password" />
          <p>
            By clicking &quot;log in&quot;, or continuing with the other options below,
            you agree to Tumblr’ s
            {' '}
            <a href="#"> Terms of Service </a>
            {' '}
            and
            have read the
            {' '}
            <a href="#"> Privacy Policy </a>
          </p>
          <input data-testid="login" id="login" type="submit" value="Log in" />
          <p className={loginPageStyle.bigParagraphe}>
            <a href="/forgetPassword" id={loginPageStyle.forgetPassword}> Forgot your password?</a>
          </p>
        </form>
        <div id={loginPageStyle.or}>
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
        <p className={loginPageStyle.bigParagraphe}>
          {' '}
          New to Tumblr ?
          <a href="#"> Sign up! </a>
        </p>
      </div>
    </div>
  );
};

export default LoginComponent;
