/* eslint-disable no-unused-vars */
import api from '../../../api/api';
import configureStore from '../../../redux/store';
import { setNumOfFollowing, setFollowing, setIsReady, setFound, setNewFollowing } from '../../../redux/userFollowing';
/**
 * this function makes a get request to the server to get the blogs that a user follows
 * @function fetchFollowing
 * @return {void} return nothing
 */
const fetchFollowing = async () => {
  try {
    const response = await api.get('/api/user/following');
    console.log('succcess in fetch following');
    configureStore.dispatch(setNumOfFollowing(response.data.numberOfFollowing));
    console.log('following', response.data.followingBlogs);
    if (response.data.followingBlogs) {
      configureStore.dispatch(setFollowing(response.data.followingBlogs));
    }
    configureStore.dispatch(setIsReady(true));
  } catch (err) {
    console.log(`Error message: ${err.message}`);
  }
};
/**
 * this function makes a post request to the server to follow a certain blog 
 * using search box in following page
 * @function searchFollow
 * @param {string} blogid
 * @return {void} return nothing
 */
const searchFollow = async (bloghandle) => {
    try {
      const response = await api.post('/api/user/follow', { handle: bloghandle });
      console.log('success');
      configureStore.dispatch(setFound(true));
      configureStore.dispatch(setNewFollowing());
    } catch (err) {  
      console.log(`Error: ${err.message}`);
    }
};

export { fetchFollowing, searchFollow };
