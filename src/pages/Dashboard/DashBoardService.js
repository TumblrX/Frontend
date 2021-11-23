import configureStore from '../../redux/store';
import { setPosts } from '../../redux/DashBoardReducer';
import api from '../../api/api';

const fetchPost = async () => {
  try {
    const response = await api.get('/posts');
    configureStore.dispatch(setPosts(response.data));
    console.log(response.data);
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
