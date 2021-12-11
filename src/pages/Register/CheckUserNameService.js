import api from '../../api/api';

const checkUserName = async (blogName) => {
  let isValid = true;
  try {
    await api.post('/api/user/username-check', {
      username: blogName,
    });
    isValid = false;
  } catch (e) {
    // empty
  }
  return isValid;
};

export default checkUserName;
