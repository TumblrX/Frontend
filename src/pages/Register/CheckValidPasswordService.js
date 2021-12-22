const validatePassword = (password) => {
    const notShortPassword = /(?=.{8,})/;
    return notShortPassword.test(password);    
};
export default validatePassword;