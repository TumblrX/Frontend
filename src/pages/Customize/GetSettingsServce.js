import api from '../../api/api';

const getSettings = async () => {
  let response ;
  let result;
  try{
    console.log(localStorage.getItem('blog1'));
    response = await api.get(`/api/blog/reterive-settings/${localStorage.getItem('blog1')}`);
    console.log('settings ',response);
    result = true;
  }catch(e){
    // empty
    console.log('Error');
    result = false;
  } 
  return {
    response,
    result,
  }
};

export default getSettings;
