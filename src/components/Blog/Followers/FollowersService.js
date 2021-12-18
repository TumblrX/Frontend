import api from '../../../api/api';
import configureStore from '../../../redux/store';
import { setNumOfFollowers, setFollowers, setIsReady } from '../../../redux/blogFollowers';
/**
 * this function makes a get request to the server to get followers of a certain blog
 * @function fetchFollowers
 * @return {void} return nothing
 */
const fetchFollowers = async () => {
  try {
    const response = await api.get('blogFollowers');
    console.log(response);
    if (response.status === 200) {
      configureStore.dispatch(setNumOfFollowers(response.data.numberOfFollowers));
      configureStore.dispatch(setFollowers(response.data.followers));
      configureStore.dispatch(setIsReady(true));
    }
  } catch (err) {
    console.log(`Error message: ${err.message}`);
  }
};

export default fetchFollowers;
