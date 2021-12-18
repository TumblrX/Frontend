import api from '../../api/api';

const forgetPassword = async (email) => {
  let done = false;
  try {
    // eslint-disable-next-line no-unused-vars
    await api.post('/api/user/forgot-password', {
      email,
    });
    done = true;
  } catch (err) {
    // empty
  }
  return done;
};

export default forgetPassword;
