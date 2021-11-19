import React, { useState } from 'react';
import forgetPasswordStyle from './ForgetPassword.module.scss';
import api from '../../api/api'

export default function ForgetPassword() {

    const [hideForm, setHideForm] = useState(false);
    const [hideConfirm, setHideConfirm] = useState(true);
    const [hideError, setHideError] = useState(true);
    const [hideEmptyEmail, setHideEmptyEmail] = useState(true);

    const forgetPasswordHandler = (e) => {
        e.preventDefault();
        if (e.target.email.value !== "") {
            forgetPassword(e.target.email.value);
            setHideEmptyEmail(true);
        }
        else {
            setHideEmptyEmail(false);
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

    return (
        <div className={forgetPasswordStyle.body}>
            <div className={forgetPasswordStyle.container}>
                <h2>tumblr</h2>
                {!hideForm &&
                    (
                        <form onSubmit={forgetPasswordHandler}>
                            {!hideError &&
                                (
                                    <p id="error" >There was an error submitting your request.</p>
                                )
                            }
                            <input type="email" name="email" id="email" placeholder="Email" />

                            {!hideEmptyEmail && (
                                <p id="error" >Please enter your email address. </p>
                            )}

                            <div className={forgetPasswordStyle.buttons}>
                                <button onClick={canceHandler}> Cancel </button>
                                <input type="submit" value="Reset password" />
                            </div>
                        </form>
                    )
                }

                {!hideConfirm &&
                    (
                        <div id={forgetPasswordStyle.confirmation} >
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
