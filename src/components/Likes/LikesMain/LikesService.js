/* eslint-disable no-underscore-dangle */
import { useDispatch } from 'react-redux';
import {
  setLikes, setInitialLoading, setNumOfLikes,
} from '../../../redux/Likes';
import api from '../../../api/api';
import { useHistory } from 'react-router-dom';

const useLikesHandler = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  /**
   * this function makes a get request to the server to get posts that the user liked
   * @function fetchLikes
   * @return {void} return nothing
   */
  const fetchLikes = async () => {
    try {
      const response = await api.get('/api/user/likes');
      console.log(response.data);
      dispatch(setLikes(response.data.likePosts));
      dispatch(setNumOfLikes(response.data.likedCount));
      dispatch(setInitialLoading(false));
    } catch (err) {
      history.push('/servererror');
      console.log(`Error: ${err.message}`);
    }
  };
  return {
    fetchLikes,
  };
};
export default useLikesHandler;
