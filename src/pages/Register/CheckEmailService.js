import api from '../../api/api';

const checkEmail = async (email) => {
  let isValid = true;
  try {
    await api.post('/api/user/email-check', {
      email,
    });
    isValid = false;
  } catch (err) {
    // empty
  }
  return isValid;
};
export default checkEmail;
