/* eslint-disable no-underscore-dangle */
import { useDispatch } from 'react-redux';
import {
  setDrafts, setInitialLoading, setNumOfDrafts,
} from '../../../redux/blogDrafts';
import api from '../../../api/api';
import { useHistory } from 'react-router-dom';

const useDraftHandler = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  /**
   * this function makes a get request to the server to get drafts of a certain blog
   * @function fetchBlogDrafts
   * @param {string} blogId
   * @return {void} return nothing
   */
  const fetchBlogDrafts = async (blogId) => {
    try {
      const response = await api.get(`/api/blog/${blogId}/posts/draft`);
      console.log(response.data.data);
      if (response.data.data) {
        dispatch(setDrafts(response.data.data));
        dispatch(setNumOfDrafts(response.data.data.length));
        dispatch(setInitialLoading(false));
      } else {
        history.push('/notfound');
      }
    } catch (err) {
      history.push('/servererror');
      console.log(`Error: ${err.message}`);
    }
  };
  return {
    fetchBlogDrafts,
  };
};
export default useDraftHandler;
