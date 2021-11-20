/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
/* eslint-disable no-multiple-empty-lines */
import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import forgetPasswordStyle from './ForgetPassword.module.scss';
import api from '../../api/api';

// eslint-disable-next-line react/function-component-definition
export default function ForgetPassword() {
  const [hideForm, setHideForm] = useState(false);
  const [hideConfirm, setHideConfirm] = useState(true);
  const [hideError, setHideError] = useState(true);
  const [hideEmptyEmail, setHideEmptyEmail] = useState(true);
  const [hideRecaptchaError, setHideRecaptchaError] = useState(true);
  const [recaptcha, setRecaptcha] = useState(false);

  /**
 * @description Send request to send the reset password mail to the user
 * @param {string} email - email of the user
 * @param {string} password - password of the user
*/

  const forgetPassword = async (email) => {
    try {
      // eslint-disable-next-line no-unused-vars
      /* const response = await api.post('/forgotPassword', {
        email,
      }); */

      setHideForm(true);
      setHideConfirm(false);
      setHideError(true);
    } catch (err) {
      setHideError(false);
    }
  };


  /**
 * @description Check that the user enter a valid data reseting his password
 * @param {MyEvent} e - The observable event.
 * @listens MyEvent
*/
  const forgetPasswordHandler = (e) => {
    e.preventDefault();
    /**
     * in case of valid email processed to check on recaptcha
     */
    if (e.target.email && e.target.email.value !== '') {
      if (recaptcha === false) {
        /**
       * in case  that recaptcha not checked show error
       */
        setHideRecaptchaError(false);
        setHideEmptyEmail(true);
        setHideError(true);
      } else {
        /**
         * if valid email and recaptcha is checked send succsseded
         */
        forgetPassword(e.target.email.value);
        setHideEmptyEmail(true);
        setHideRecaptchaError(true);
        setRecaptcha(false);
      }
    } else {
      /**
       * if no email show an error
       */
      setHideEmptyEmail(false);
      setHideRecaptchaError(true);
    }
  };
  /**
 * @description When user presses cancel it return back to the login page
 * @param {MyEvent} e - The observable event.
 * @listens MyEvent
*/
  const canceHandler = (e) => {
    e.preventDefault();
    setHideEmptyEmail(true);
    // go to login again
  };
  /**
 * @description When user presses done it return back to the main page
 * @param {MyEvent} e - The observable event.
 * @listens MyEvent
*/
  const doneHandler = (e) => {
    e.preventDefault();
    setHideForm(false);
    setHideConfirm(true);
    // go to the main page
  };


  function onChange() {
    setRecaptcha(!recaptcha);
  }

  return (
    <div data-testid="body" className={forgetPasswordStyle.bodyForget}>
      <div data-testid="container" className={forgetPasswordStyle.container}>
        <h2 data-testid="h2">tumblr</h2>
        {!hideForm
                    && (
                    <form data-testid="form" onSubmit={forgetPasswordHandler}>

                      <input data-testid="email" type="email" name="email" id="email" placeholder="Email" />

                      {!hideError
                                && (
                                <p data-testid="error" id="error">There was an error submitting your request.</p>
                                )}

                      {!hideRecaptchaError
                                && (
                                <p data-testid="recaptchaError" name="recaptchaError">There was an error submitting your request.</p>
                                )}

                      {!hideEmptyEmail && (
                      <p id="error" data-testid="error">Please enter your email address.</p>
                      )}

                      <div
                        data-testid="recaptcha"
                        className={forgetPasswordStyle.recaptcha}
                      >
                        <ReCAPTCHA
                          sitekey="6Le9C0YdAAAAAK5iSBhKrlLEGV6av3COAi5l8sC6"
                          // eslint-disable-next-line react/jsx-no-bind
                          onChange={onChange}
                        />
                      </div>

                      <div className={forgetPasswordStyle.buttons}>
                        <button type="button" data-testid="cancel" onClick={canceHandler}> Cancel </button>
                        <input className={forgetPasswordStyle.reset} data-testid="reset" name="reset" type="submit" value="Reset password" />
                      </div>
                    </form>
                    )}

        {!hideConfirm
                    && (
                    <div data-testid="confirmation" id={forgetPasswordStyle.confirmation}>
                      <p>
                        We&apos;ve sent you an email with instructions to reset your password.
                        <br />
                        {' '}
                        <br />
                        Please make sure it didn&apos;t wind up in your Junk Mail.
                        If you aren&apos;t receiving our password reset emails, see our
                        {' '}
                        <a href="#">  help documents</a>
                        .
                      </p>
                      <button type="button" onClick={doneHandler}> Done </button>
                    </div>
                    )}
      </div>
    </div>
  );
}
