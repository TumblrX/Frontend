import React from 'react';
import {
  render,
} from '@testing-library/react';
import LoginPage from './LoginPage';

describe('Check that the page renders correctly', () => {
  test('h2 is shown', () => {
    const { getByTestId } = render(<LoginPage />);
    const h2 = getByTestId('h2');
    expect(h2).toBeTruthy();
  });

  test('form is shown', () => {
    const { getByTestId } = render(<LoginPage />);
    const form = getByTestId('form');
    expect(form).toBeTruthy();
  });

  test('Buttons are shown', () => {
    render(<LoginPage />);
    const buttons = document.getElementsByTagName('button');
    expect(buttons).toHaveLength(2);
  });

  test('Empty data error message is hidden', () => {
    const { queryByTestId } = render(<LoginPage />);
    const error = queryByTestId('emptyData');
    expect(error).toBeFalsy();
  });

  test('Empty Email error message is hidden', () => {
    const { queryByTestId } = render(<LoginPage />);
    const error = queryByTestId('emptyEmail');
    expect(error).toBeFalsy();
  });

  test('Empty Password error message is hidden', () => {
    const { queryByTestId } = render(<LoginPage />);
    const error = queryByTestId('emptyPassword');
    expect(error).toBeFalsy();
  });

  test('Invalid email or password error message is hidden', () => {
    const { queryByTestId } = render(<LoginPage />);
    const error = queryByTestId('wrongData');
    expect(error).toBeFalsy();
  });
});

/*
describe('Check the validity of submissions', () => {
   test('check that error message appears when input is empty', async () => {
    await act(async () => {
      const { getByTestId } = render(<LoginPage />);
      const btn = getByTestId('login');
      await fireEvent.click(btn);
      const error = screen.getByText('You do have to fill this stuff out, you know.');
      expect(error).toBeInTheDocument();
    });
  });

});
*/
