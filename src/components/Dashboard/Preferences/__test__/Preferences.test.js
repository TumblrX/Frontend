import { cleanup, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Preferences from "../Preferences";

beforeEach(() => {
  cleanup();
});

test("renders learn react link", () => {
  render(<Preferences />);
  expect(screen.getByTestId("best-stuff-first-checkbox")).toBeVisible();
  expect(screen.getByTestId("include-stuff-checkbox")).toBeVisible();
  expect(screen.getByTestId("enable-colorized-tags-checkbox")).toBeVisible();
  expect(screen.getByTestId("include-followed-tag-checkbox")).toBeVisible();
});
