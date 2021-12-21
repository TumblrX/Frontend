/* eslint-disable no-unused-vars */
import api from '../../api/api';
/**
 * this function makes a post request to the json server
 * @function sendData
 * @param {object} userData
 * @return {void} return nothing
 */
const sendData = async (userData, history, handleURLUsed) => {
  try {
    const response = await api.post('/api/blog/create', userData);
    console.log('succeed');
    history.push(`/blog/${userData.handle}`);
  } catch (err) {
    handleURLUsed();
    console.log(`Error message: ${err.message}`);
  }
};

export default sendData;
