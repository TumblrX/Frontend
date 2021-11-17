import SecuritySection from "../securitySection";
import { cleanup, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";



beforeEach(()=>{
  cleanup()
})

test("check the rendering of the security section",()=>{
  render(<SecuritySection/>); 
  expect(screen.getByTestId("email-user-about-activity-checkbox")).toBeVisible();
  
})