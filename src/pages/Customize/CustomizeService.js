import api from '../../api/api';

const customzie = async (dataToSend, id) => {
  try{
    const response = await api.put(`/api/blog/${id}`,dataToSend);
    console.log(response);
  }catch(e){
    // empty
    console.log('Error');
  } 
};

export default customzie;
