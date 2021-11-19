import React, { useState } from 'react';
import forgetPasswordStyle from './ForgetPassword.module.scss';
import api from '../../api/api'
import ReCAPTCHA from "react-google-recaptcha";


export default function ForgetPassword() {

    const [hideForm, setHideForm] = useState(false);
    const [hideConfirm, setHideConfirm] = useState(true);
    const [hideError, setHideError] = useState(true);
    const [hideEmptyEmail, setHideEmptyEmail] = useState(true);
    const [hideRecaptchaError, setHideRecaptchaError] = useState(true);
    const [recaptcha, setRecaptcha] = useState(false);

    const forgetPasswordHandler = (e) => {
        e.preventDefault();

        if (e.target.email && e.target.email.value !== "") {
            if (recaptcha == false) {
                setHideRecaptchaError(false);
                setHideEmptyEmail(true);
                setHideError(true);
            }
            else {
                forgetPassword(e.target.email.value);
                setHideEmptyEmail(true);
                setHideRecaptchaError(true);
                setRecaptcha(false);
            }
        }
        else {
            setHideEmptyEmail(false);
            setHideRecaptchaError(true);

        }
    }


    const canceHandler = (e) => {
        e.preventDefault();
        setHideEmptyEmail(true);
        // go to login again      
    }

    const doneHandler = (e) => {
        e.preventDefault();
        setHideForm(false);
        setHideConfirm(true);
        // go to the main page
    }

    const forgetPassword = async (email) => {

        try {
            const response = await api.post('/forgotPassword', {
                email: email
            });

            console.log(response.data);
            setHideForm(true);
            setHideConfirm(false);
            setHideError(true);

        } catch (err) {
            setHideError(false);
            console.log("Error message: " + err.message);
        }
        console.log(email)
    }

    function onChange(value) {
        console.log("Captcha value:", value);
        setRecaptcha(!recaptcha);
    }

    return (
        <div data-testid="body" className={forgetPasswordStyle.body}>
            <div data-testid="container" className={forgetPasswordStyle.container}>
                <h2 data-testid="h2" >tumblr</h2>
                {!hideForm &&
                    (
                        <form data-testid="form" onSubmit={forgetPasswordHandler}>
                            
                            <input data-testid="email" type="email" name="email" id="email" placeholder="Email" />

                            {!hideError &&
                                (
                                    <p data-testid="error" id="error" >There was an error submitting your request.</p>
                                )
                            }

                            {!hideRecaptchaError &&
                                (
                                    <p data-testid="recaptchaError"  name="recaptchaError" >There was an error submitting your request.</p>
                                )
                            }


                            {!hideEmptyEmail && (
                                <p id="error" data-testid="error" >Please enter your email address.</p>
                            )}

                            <div data-testid="recaptcha"     
                            
                            className={forgetPasswordStyle.recaptcha}>
                                <ReCAPTCHA
                                    sitekey="6Le9C0YdAAAAAK5iSBhKrlLEGV6av3COAi5l8sC6"
                                    onChange={onChange}
                                />
                            </div>

                            <div className={forgetPasswordStyle.buttons}>
                                <button data-testid="cancel" onClick={canceHandler} > Cancel </button>
                                <input data-testid="reset" name="reset" type="submit" value="Reset password" />
                            </div>
                        </form>
                    )
                }

                {!hideConfirm &&
                    (
                        <div data-testid="confirmation" id={forgetPasswordStyle.confirmation} >
                            <p>
                                We've sent you an email with instructions to reset your password.
                                <br /> <br />
                                Please make sure it didn't wind up in your Junk Mail.
                                If you aren't receiving our password reset emails, see our <a href="#">  help documents</a>.
                            </p>
                            <button onClick={doneHandler}> Done </button>
                        </div>
                    )
                }
            </div>
        </div>
    )
}
