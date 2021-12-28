import api from '../../api/api';

const getSettings = async () => {
  let response ;
  let result;
  try{
    response = await api.get(`/api/blog/reterive-settings/:${localStorage.getItem('blog1')}`);
    console.log(response);
    result = true;
  }catch(e){
    // empty
    console.log('Error');
  } 
  return {
    response,
    result,
  }
};

export default getSettings;
