const checkNonEmptyFields = (email , password , blogName ) => {
    if (email !== '' && password !== '' && blogName !== '') {
      return 4;
    }
    if (email === '' && password === '' && blogName === '') {
      return 0;
    } else if (email === '') {
        return 1;
    } else if (password === '') {
        return 2;
    } else {
      return 3;
    }
};
export default checkNonEmptyFields;