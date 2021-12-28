import api from '../../api/api';

const customzie = async (dataToSend) => {
  try{
    const response = await api.put(`/api/blog/${localStorage.getItem('blog1')}`,dataToSend);
    console.log(response);
  }catch(e){
    // empty
    console.log('Error');
  } 
};

export default customzie;
