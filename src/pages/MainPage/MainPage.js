import { useEffect } from 'react';
import mainPageStyle from './MainPage.module.scss';
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { redirectToDashboard } from '../../redux/mainPage';
import { GoogleLogin } from 'react-google-login';
import {responseGoogle, responseGoogleFail} from '../../pages/LoginPage/GoogleService'

/**
 * @author Taher Mohamed
 *
 * @component
 */
function MainPage() {
  const { dashboard } = useSelector((state) => state.mainPage);

  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem('token')) { dispatch(redirectToDashboard()); }
  });

  return (
    <div className={mainPageStyle.bodyMainPage}>
      {dashboard
      && (
        <Redirect to="/dashboard" />
      )}
      <div className={mainPageStyle.container}>
        <h2> tumblr </h2>
        <p className={mainPageStyle.p1}>
          Make stuff, look at stuff, talk about stuff, find your people.
        </p>
        <div className={mainPageStyle.content}>
          <a href="/register" className={mainPageStyle.buttonWrapper}>
            <button className={mainPageStyle.signup}>
              {' '}
              <span className={mainPageStyle.buttonText}> Sign up </span>
              {' '}
            </button>
          </a>
          <a href="/login" className={mainPageStyle.buttonWrapper}>
            <button className={mainPageStyle.login}>
              {' '}
              <span className={mainPageStyle.buttonText}>Log in</span>
              {' '}
            </button>
          </a>
          <div id={mainPageStyle.or}>
            {' '}
            <hr />
            {' '}
            <p> or </p>
            <hr />
            {' '}

          </div>
          <p>
            By continuing with the options below, you agree to Tumblr’s
            <a href="#"> Terms of Service </a>
            {' '}
            and
            have read the
            {' '}
            <a href="#">  Privacy Policy </a>
          </p>
        </div>
        <GoogleLogin
          clientId="331010848924-g1hvj1d05al26e39got3e6p67t42pffa.apps.googleusercontent.com"
          buttonText="Continue with Google"
          onSuccess={responseGoogle}
          onFailure={responseGoogleFail}
          cookiePolicy={'single_host_origin'}
        />
        <p className={mainPageStyle.trend}>
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
}
export default MainPage;
