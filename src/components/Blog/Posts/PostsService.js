/* eslint-disable no-console */
import configureStore from '../../../redux/store';
import { setPosts, setNumOfPosts, setInitialLoading } from '../../../redux/blogPosts';
import api from '../../../api/api';

/**
 * this function makes a post request to the json server to get posts of a certain blog
 * @function fetchPost
 * @return {void} return nothing
 */
const fetchPost = async () => {
  try {
    const response = await api.get('/posts');
    configureStore.dispatch(setPosts(response.data));
    configureStore.dispatch(setNumOfPosts(response.data.length));
    configureStore.dispatch(setInitialLoading(false));
  } catch (err) {
    if (err.response) {
      // Not in the 200 response range
      console.log(err.response.data);
      console.log(err.response.status);
      console.log(err.response.headers);
    } else {
      console.log(`Error: ${err.message}`);
    }
  }
};
export default fetchPost;
