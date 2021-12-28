import api from '../../api/api';

const getUserInfo = async () => {
  try {
    const response = await api.get('/api/user/info');
    console.log(response);
    return response;
  } catch (err) {
    return undefined;
  } 
};

export default getUserInfo;
