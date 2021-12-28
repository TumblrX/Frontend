import React from 'react';
import forgetPasswordStyle from './ForgetPassword.module.scss';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ForgetPasswordController from './ForgetPassowrdController'
import { useEffect } from 'react';

export default function ForgetPassword() {

  const {
    hideForm,   
    hideConfirm ,
    hideError ,
    hideEmptyEmail ,   
  } = useSelector((state) => state.forgetPassword);

  const { forgetPasswordHandler } = ForgetPasswordController();

  useEffect(() => {
  }, [hideForm, hideConfirm , hideError , hideEmptyEmail ])

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

                      {!hideEmptyEmail && (
                      <p id="error" data-testid="error">Please enter your email address.</p>
                      )}

                      <div className={forgetPasswordStyle.buttons}>
                        <NavLink to="/login" className={forgetPasswordStyle.nav1}  >Cancel</NavLink>
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
                      <NavLink to="/"  ><button> Done </button></NavLink>                        
                    </div>
                    )}
      </div>
    </div>
  );
}
