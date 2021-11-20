import React from 'react';
import {
  render, fireEvent, screen,
} from '@testing-library/react';
import ForgetPassword from './ForgetPassword';

describe('Check that the page renders correctly', () => {
  test('h2 is shown', () => {
    const { getByTestId } = render(<ForgetPassword />);
    const h2 = getByTestId('h2');
    expect(h2).toBeTruthy();
  });

  test('form is shown', () => {
    const { getByTestId } = render(<ForgetPassword />);
    const form = getByTestId('form');
    expect(form).toBeTruthy();
  });

  test('Recaptcha is shown', () => {
    const { getByTestId } = render(<ForgetPassword />);
    const recaptcha = getByTestId('recaptcha');
    expect(recaptcha).toBeTruthy();
  });

  test('Recaptcha error message is hidden', () => {
    const { queryByTestId } = render(<ForgetPassword />);
    const error = queryByTestId('recaptchaError');
    expect(error).toBeFalsy();
  });

  test('Email error message is hidden', () => {
    const { queryByTestId } = render(<ForgetPassword />);
    const error = queryByTestId('error');
    expect(error).toBeFalsy();
  });

  test('Confirmaion message is hidden', () => {
    const { queryByTestId } = render(<ForgetPassword />);
    const confirmation = queryByTestId('confirmation');
    expect(confirmation).toBeFalsy();
  });
});

describe('Check the validity of submissions', () => {
  test('check that error message appears when input is empty', () => {
    render(<ForgetPassword />);
    const btn = screen.getByTestId('reset');
    fireEvent.click(btn);
    const error = screen.getByText('Please enter your email address.');
    expect(error).toBeTruthy();
  });

  /*   test('check that error message appears when input is not email',  () => {
        render(<ForgetPassword />);
        const email = screen.getByTestId("email");
        fireEvent.change(email, { target: { value: "Hello" } });
        expect(email.value).toBe("Hello");
        const btn = screen.getByTestId("reset");
        fireEvent.click(btn);
        const error = screen.getByText("Please enter your email address.");
        expect(error).toBeInTheDocument();
    })
*/

  /* test('check that recaptcha error message appears when input is
  valid email and recaptcha not checked', async () => {

        render(<ForgetPassword />);
        const email = screen.getByTestId("email");
        fireEvent.change(email, { target: { value: "taher@gmail.com" } });
        expect(email.value).toBe("taher@gmail.com");
        const btn = screen.getByTestId("reset");
        fireEvent.click(btn);
        const error = document.getElementById("recaptchaError");
        expect(error).toBeInTheDocument();
    }) */

  /*
    test('Confirmation message appears when input is
    in the data base and recaptcha is checked', () => {

          const { queryByTestId } = render(<ForgetPassword />);
          const form = queryByTestId("form");
          const email = queryByTestId("email");
          fireEvent.change(email, { target: { value: "taher@gmail.com" } })
          fireEvent.click(form);
          expect(queryByTestId("confirmation")).toBeFalsy();
      })
      */
});
