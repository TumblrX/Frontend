import api from '../../../api/api';
import configureStore from '../../../redux/store';
import { setNumOfFollowers, setFollowers, setIsReady } from '../../../redux/blogFollowers';
/**
 * this function makes a get request to the server to get followers of a certain blog
 * @function fetchFollowers
 * @return {void} return nothing
 */
const fetchFollowers = async (blogid) => {
  try {
    const response = await api.get(`/api/blog/${blogid}/followers`);
    console.log('succcess in fetch followers');
    configureStore.dispatch(setNumOfFollowers(response.data.numberOfFollowers));
    console.log('followers', response.data.blogs);
    if (response.data.blogs) {
      configureStore.dispatch(setFollowers(response.data.blogs));
    }
    configureStore.dispatch(setIsReady(true));
  } catch (err) {
    console.log(`Error message: ${err.message}`);
  }
};

export default fetchFollowers;
