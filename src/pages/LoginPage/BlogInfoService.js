import api from '../../api/api';

const getBlogInfo = async (id) => {
  try {
    const response = await api.get(`/api/blog/:${id}`);
    return response;
  } catch (err) {
    return undefined;
  } 
};

export default getBlogInfo;
