import api from '../../api/api';
/**
 * this function makes a post request to the json server
 * @function sendData
 * @param {object} userData
 * @return {void} return nothing
 */
const sendData = async (userData) => {
  try {
    const response = await api.post('/createBlog', userData);
    console.log(response);
  } catch (err) {
    console.log(`Error message: ${err.message}`);
  }
};

export default sendData;
