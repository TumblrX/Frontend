import api from '../../api/api';

const customzie = async (dataToSend) => {
  try{
    await api.put(`/api/blog/${localStorage.getItem('blog1')}`,dataToSend);
    return true;
  }catch(e){
    return false
  } 
};

export default customzie;
