/* eslint-disable no-unused-vars */
import api from '../../../../api/api';

  /**
   * this function makes a post request to the server to follow a certain blog
   * @function follow
   * @param {string} blogid
   * @return {void} return nothing
   */
  const follow = async (blogid) => {
    try {
      const response = await api.post('/api/user/follow', { _id: blogid });
      console.log('success');
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };
  /**
   * this function makes a delete request to the server to unfollow a certain blog
   * @function unfollow
   * @param {string} blogid
   * @return {void} return nothing
   */
  const unfollow = async (blogid) => {
    try {
      const response = await api.delete('/api/user/unfollow', { _id: blogid });
      console.log('success');
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };
export { follow, unfollow };
