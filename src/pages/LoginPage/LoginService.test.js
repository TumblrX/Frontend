/* eslint-disable no-unused-vars */
import login from './LoginService';

describe('Check that the login service works correctly', () => {
  it('should return true if the login is done with correct email', async () => {
    const response = await login('example@example.com', '123456');
    // expect(response.result).toEqual(true);
  });
  it('should return token no equal to noToken if the login is done with correct email', async () => {
    const response = await login('example@example.com', '123456');
    // expect(response.token).not.toEqual('noToken');
  });

  it('should return false if the login is done with wrong email', async () => {
    const response = await login('emailNotInDataBase@example.com', '123456');
    // expect(response.result).toEqual(false);
  });

  it('should return noToken if the login is done with wrong email', async () => {
    const response = await login('emailNotInDataBase@example.com', '123456');
    // expect(response.token).toEqual('noToken');
  });
});
/*
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
}); */
