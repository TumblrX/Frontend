import { cleanup, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Sounds from "../Sounds";

beforeEach(() => {
  cleanup();
});

test("renders learn react link", () => {
  render(<Sounds />);
  expect(screen.getByTestId("messageing-sounds-checkbox")).toBeVisible();
});
