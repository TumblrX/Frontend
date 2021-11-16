import EmailSection from "../EmailSection";
import { cleanup, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";



beforeEach(()=>{
  cleanup()
})
test("renders learn react link", () => {
  render(<EmailSection />);
  const linkElement = screen.getByTestId(/email-box/i);
  expect(linkElement).toBeInTheDocument();
});
