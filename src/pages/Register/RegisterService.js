import api from '../../api/api';

const register = async (blogName, email, password) => {
  let succeeded = true;
  let token;
  try {
    const response = await api.post('/api/user/register', {
      username: blogName,
      email,
      password,
    });
    token = response.data.token;
  } catch (err) {
    succeeded = false;
    token = 'noToken';
  }
  return {
    result: succeeded,
    token,
  };
};

export default register;
