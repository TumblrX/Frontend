/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
import configureStore from '../../redux/store';
import { setPosts } from '../../redux/DashBoardReducer';
import api from '../../api/api';

const fetchPost = async () => {
  try {
    console.log('fetchPost is called');
    const response = await api.get('/api/user/dashboard?limit=2&page=1');
    let arr = [];
    response.data.posts.map((post, index) => (
      arr.push(post.content)
    ));
    configureStore.dispatch(setPosts(arr));
    // await console.log('arr -->', arr);
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
// old code
// const response = await api.get('/posts');
// configureStore.dispatch(setPosts(response.data));
// console.log(response.data);
