import Account from "../Account";
import { cleanup, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

beforeEach(() => {
  cleanup();
});

test("testing rendering different sections", () => {
  // this is the page that contains all the other sections
  // only tests on rendering will be done ;
  render(<Account />);
  expect(screen.getByTestId("email-section")).toBeVisible();
  expect(screen.getByTestId("password-section")).toBeVisible();
  expect(screen.getByTestId("security-seciton")).toBeVisible();
});

test("rendering the delete account section", () => {
  render(<Account />);
  expect(screen.getByTestId("delete-account-button")).toBeVisible();
});
