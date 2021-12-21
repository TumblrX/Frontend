import configureStore from '../../redux/store';
import { setPosts } from '../../redux/DashBoardReducer';
import api from '../../api/api';

const fetchPost = async () => {
  try {
    const response = await api.get('/api/user/dashboard?limit=12&page=2');
    // console.log('response -->', response.data);
    if (response.data['for-youPosts'].length !== 0) {
      configureStore.dispatch(setPosts(response.data['for-youPosts']));
    } else {
      configureStore.dispatch(setPosts(response.data.posts));
    }
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
