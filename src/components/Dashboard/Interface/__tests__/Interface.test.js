import { cleanup, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Interface from "../Interface"



beforeEach(()=>{
  cleanup()
})

test("renders learn react link", () => {
  render(<Interface/>);
  expect(screen.getByTestId("enable-endless-scrolling-checkbox")).toBeVisible(); 
  
});