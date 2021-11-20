import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './Dashboard';
import { act, render, fireEvent, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Check that the page renders correctly", () => {

    // test('Navbar is shown', () => {
    //     const { getByTestId } = render(<Dashboard />);
    //     const navbar = getByTestId("testNavbar");
    //     expect(navbar).toBeTruthy();
    // })


    // test('postContainer is shown',  () => {
    //     const { getByTestId } =  render(<Dashboard />);
    //     const postContainer = getByTestId("testPostContainer");
    //     expect(postContainer).toBeTruthy();
    // })

    test('Explore is shown',  () => {
        const { getByTestId } =  render(<Dashboard />);
        const Explore = getByTestId("testExplore");
        expect(Explore).toBeTruthy();
    })
    
    test('post is shown',  async () => {
        const { getByTestId } =  await render(<Dashboard />);
        setTimeout(()=>{} , 10000)
        const post = getByTestId("testPost0");
        expect(post).toBeTruthy();
    })

    
    



    
})

describe.only("Check the validity of submissions", () => {
    // test('Recaptcha error message is hidden', () => {
    //     const { queryByTestId } = render(<ForgetPassword />);
    //     const error = queryByTestId("recaptchaError");
    //     expect(error).toBeFalsy();
    // })
    
    // test('Email error message is hidden', () => {
    //     const { queryByTestId } = render(<ForgetPassword />);
    //     const error = queryByTestId("error");
    //     expect(error).toBeFalsy();
    // })
    
    // test('Confirmaion message is hidden', () => {
    //     const { queryByTestId } = render(<ForgetPassword />);
    //     const confirmation = queryByTestId("confirmation");
    //     expect(confirmation).toBeFalsy();
    // })

    // test('check that error message appears when input is empty', () => {
    //     render(<ForgetPassword />);
    //     const btn = screen.getByTestId("reset");
    //     fireEvent.click(btn);
    //     const error = screen.getByText("Please enter your email address.");
    //     expect(error).toBeTruthy();
    // })

    // test('check that error message appears when input is not email',  () => {
    //     render(<ForgetPassword />);
    //     const email = screen.getByTestId("email");
    //     fireEvent.change(email, { target: { value: "Hello" } });
    //     expect(email.value).toBe("Hello");
    //     const btn = screen.getByTestId("reset");
    //     fireEvent.click(btn);
    //     const error = screen.getByText("Please enter your email address.");
    //     expect(error).toBeInTheDocument();
    // })


    /*test('check that recaptcha error message appears when input is valid email and recaptcha not checked', async () => {
        
        render(<ForgetPassword />);
        const email = screen.getByTestId("email");
        fireEvent.change(email, { target: { value: "taher@gmail.com" } });
        expect(email.value).toBe("taher@gmail.com");
        const btn = screen.getByTestId("reset");
        fireEvent.click(btn);
        const error = document.getElementById("recaptchaError");  
        expect(error).toBeInTheDocument();
    })*/

    /*
    test('Confirmation message appears when input is in the data base and recaptcha is checked', () => {
  
          const { queryByTestId } = render(<ForgetPassword />);
          const form = queryByTestId("form");
          const email = queryByTestId("email");
          fireEvent.change(email, { target: { value: "taher@gmail.com" } })
          fireEvent.click(form);
          expect(queryByTestId("confirmation")).toBeFalsy();
      })
      */

})