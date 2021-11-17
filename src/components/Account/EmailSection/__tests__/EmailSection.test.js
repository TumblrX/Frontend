import EmailSection from "../EmailSection";
import { cleanup, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import Account from "../../Account"


beforeEach(()=>{
  cleanup()
})
test("renders Email Box and hide Password Box", () => {
  render(<EmailSection />);
  const emailBox = screen.getByTestId(/email-box/i);
  const passBox  = screen.getByTestId(/password-box/i); 
  expect(emailBox).toBeVisible();
  expect(passBox).toHaveClass("hidden");
});

test("hide cancel and save buttons",()=>{
  render(<EmailSection/>)
  // const cancelButton= screen.getByTestId(/cancel-button/i);
  // const saveButton= screen.getByTestId(/save-button/i);
  const sectionContainsAllButtons = screen.getByTestId(/buttons-container/i); 
  expect(sectionContainsAllButtons).toHaveClass("hidden"); 

})


test("on user click the buttons container is displayed",()=>{
  render(<Account/>)
  // Account should be renderd beacuse the test that is run 
  // tests click on the edit button , and the  code 
  // has query to the form element which will not be renderd 
  // if you render only the EmailSection 
  const editButton = screen.getByTestId("email-edit-button"); 
  expect(editButton).toBeVisible(); 
  userEvent.click(editButton);
  // jest.mock("../EmailSection")
  // const iconClick=jest.mock(); 
  // expect(iconClick).toHaveBeenCalledTimes(0); 
  const sectionContainsAllButtons = screen.getByTestId(/buttons-container/i); 
  expect(sectionContainsAllButtons).not.toHaveClass("hidden"); 
})

