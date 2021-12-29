import api from '../../api/api';

const getUserInfo = async () => {
  try {
    const response = await api.get('/api/user/info');
    return response;
  } catch (err) {
    return undefined;
  } 
};

export default getUserInfo;
