/* eslint-disable no-underscore-dangle */
import { useDispatch } from 'react-redux';
import {
  setPosts, setInitialLoading, setNumOfPosts,
} from '../../../redux/blogPosts';
import api from '../../../api/api';
import { useHistory } from 'react-router-dom';

const usePostHandler = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  /**
   * this function makes a get request to the server to get posts of a certain blog
   * @function fetchBlogPosts
   * @param {string} blogId
   * @return {void} return nothing
   */
  const fetchBlogPosts = async (blogId) => {
    try {
      const response = await api.get(`/api/blog/${blogId}/posts`);
      console.log(response.data.data);
      if (response.data.data) {
        dispatch(setPosts(response.data.data));
        dispatch(setNumOfPosts(response.data.data.length));
        dispatch(setInitialLoading(false));
      } else {
        history.push('/notfound');
      }
    } catch (err) {
      history.push('/servererror');
      console.log(`Error: ${err.response.data.message}`);
    }
  };
  return {
    fetchBlogPosts,
  };
};
export default usePostHandler;
