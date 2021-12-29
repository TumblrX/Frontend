/* eslint-disable no-unused-vars */
import axios from 'axios';
/**
 * this function makes a post request to the json server
 * @function sendData
 * @param {object} userData
 * @return {void} return nothing
 */
const sendData = async (userData, history, handleURLUsed) => {
  try {
    const response = await axios.post('/api/blog/create', userData);
    console.log('succeed');
    history.push(`/blog/${userData.handle}`);
  } catch (err) {
    if(err.response.status===400){
      handleURLUsed();
    }else{
      history.push(`/servererror`);
    }
    console.log(`Error message: ${err.message}`);
  }
};

export default sendData;
