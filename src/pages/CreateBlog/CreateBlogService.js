import api from '../../api/api';
/**
 * this function makes a post request to the json server
 * @function sendData
 * @param {object} userData
 * @return {void} return nothing
 */
const sendData = async (userData, history, handleURLUsed) => {
  try {
    const response = await api.post('/createBlog', userData);
    if (response.status === 200) {
      history.push(`/blog/${userData.handle}`);
    } else if (response.status === 400) {
      handleURLUsed();
    }
  } catch (err) {
    console.log(`Error message: ${err.message}`);
  }
};

export default sendData;
