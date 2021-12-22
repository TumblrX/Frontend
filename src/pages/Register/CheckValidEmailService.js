const validateEmail = (email) => {
    const emailPattern = /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return emailPattern.test(email);    
};
export default validateEmail;