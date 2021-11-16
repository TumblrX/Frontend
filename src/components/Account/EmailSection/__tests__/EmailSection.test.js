import EmailSection from "../EmailSection"
import { render, screen, cleanup } from "@testing-library/react";




test("Should render Email Component", () => {
  render(<EmailSection/>);

  const EmailSection = screen.getByTestId("Email"); 
  expect(EmailSection).toBeInTheDocument(); 
});
