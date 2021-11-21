import { cleanup, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Notifictions from '../Notifictions';

beforeEach(() => {
  cleanup();
});

test('check the rendering of the user avatar', () => {
  render(<Notifictions />);

  expect(screen.getByTestId('avatar-icon')).toBeVisible();
  expect(screen.getByTestId('notifications-section-edit-button')).toBeVisible();
});

test('hide the form of the notifications', () => {
  render(<Notifictions />);
  const form = screen.getByTestId('notifications-form');
  const styleValueBeforeClick = 'display: none; margin-top: 20px; color: rgb(68, 68, 68);';

  expect(form).toHaveAttribute('style', styleValueBeforeClick);
});

test('show after click on edit', () => {
  render(<Notifictions />);
  const styleValueAfterClick = 'display: block; margin-top: 20px; color: rgb(68, 68, 68);';
  const editIcon = screen.getByTestId('notifications-section-edit-button');
  userEvent.click(editIcon);
  const form = screen.getByTestId('notifications-form');
  expect(form).toHaveAttribute('style', styleValueAfterClick);
});

test('check rendering the checkbuttons', () => {
  render(<Notifictions />);

  const editIcon = screen.getByTestId('notifications-section-edit-button');
  userEvent.click(editIcon);
  expect(screen.getByTestId('new-followers-checkbox')).toBeVisible();
  expect(screen.getByTestId('new-replies-checkbox')).toBeVisible();
  expect(screen.getByTestId('mentions-checkbox')).toBeVisible();
  expect(screen.getByTestId('answered-asks-checkbox')).toBeVisible();
  expect(screen.getByTestId('notifications-selection-box')).toBeVisible();
  expect(screen.getByTestId('notifications-cancel-button')).toBeVisible();
  expect(screen.getByTestId('notifications-save-button')).toBeVisible();
});

test('check hide form after clicking on cancel button', () => {
  render(<Notifictions />);
  const editIcon = screen.getByTestId('notifications-section-edit-button');
  userEvent.click(editIcon);
  const cancelButton = screen.getByTestId('notifications-cancel-button');
  userEvent.click(cancelButton);
  expect(screen.getByTestId('notifications-cancel-button')).not.toBeVisible();
  expect(screen.getByTestId('notifications-save-button')).not.toBeVisible();
});
