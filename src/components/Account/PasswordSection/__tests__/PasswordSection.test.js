
import PasswordSection from "../PasswordSection";
import { cleanup, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import Account from "../../Account"


beforeEach(()=>{
  cleanup()
})
// test("render dots from the user", () => {
//   // it is not a silly test because test is clickable 
//   render(<PasswordSection />);
//   const dots = screen.getByTestId("dots");
//   expect(dots).toBeVisible();
//   //expect(passBox).toHaveClass("hidden");
// });

test("hide cancel and save buttons",()=>{
  render(<PasswordSection/>)
  const inputFileds=screen.getByTestId("password-section-input-field"); 
  expect(inputFileds).toHaveClass("hidden"); 
})


test("on user click the buttons container is displayed",()=>{
  render(<Account/>)
  const editButton = screen.getByTestId("password-edit-button"); 
  expect(editButton).toBeVisible(); 
  userEvent.click(editButton); 
  const sectionContainsAllButtons = screen.getByTestId("password-section-input-field"); 
  expect(sectionContainsAllButtons).not.toHaveClass("hidden"); 
})