/* eslint-disable no-underscore-dangle */
import { useDispatch } from 'react-redux';
import {
  setPosts, setNumOfPosts, setBlogHandle, setBlogTitle,
  setAvatar, setId, setInitialLoading,
} from '../../redux/blog';
import api from '../../api/api';
import { useHistory } from 'react-router-dom';

const useBlogHandler = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  /**
   * this function makes a get request to the server to get posts of a certain blog
   * @function fetchPost
   * @param {string} blogName
   * @return {void} return nothing
   */
  const fetchBlogData = async (blogName) => {
    try {
      const response = await api.get(`/api/blog/${blogName}`);
      if (response.data.ownBlog) {
        console.log(response.data.post);
        if (response.data.post) {
          dispatch(setPosts(response.data.post));
          dispatch(setNumOfPosts(response.data.post.length));
        }
        dispatch(setBlogHandle(response.data.handle));
        dispatch(setBlogTitle(response.data.title));
        dispatch(setAvatar(response.data.avatar));
        dispatch(setId(response.data._id));
        dispatch(setInitialLoading(false));
      } else {
        history.push('/notfound');
      }
    } catch (err) {
      history.push('/notfound');
      console.log(`Error: ${err.message}`);
    }
  };
  return {
    fetchBlogData,
  };
};
export default useBlogHandler;
