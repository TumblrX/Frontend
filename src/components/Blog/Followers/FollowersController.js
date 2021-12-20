/* eslint-disable no-plusplus */
import { useSelector, useDispatch } from 'react-redux';
import FollowerSection from './followerSection/FollowerSection';
import {
  setSearchValue, setsearchResult, setSearchDone, setPrevSearchValue,
} from '../../../redux/blogFollowers';

const useHandler = () => {
  const {
    followers, searchValue, isReady,
  } = useSelector((state) => state.blogfollowers);
  const dispatch = useDispatch();
  /**
   * this function is to show the fetched followers in followers page of a blog
   * @function showFollowers
   * @return {JSX} return jsx of followers to be rendered in the followers page
   */
  const showFollowers = () => (
    followers.map((follower) => (
      <FollowerSection data={follower} key={follower.id} />
    ))
  );
  /**
   * this function is to show the fetched followers in followers page of a blog
   * @function handleChange
   * @param {event} event
   * @return {void} return nothing
   */
  const handleChange = (event) => {
    dispatch(setSearchDone(false));
    dispatch(setSearchValue(event.target.value));
  };
  /**
   *  this function handle the event of changing search box input to keep it in sync with the state
   * @param {event} event
   * @return {void} return nothing
   */
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(setSearchDone(false));
    if (isReady && searchValue.length > 0) {
      let found = false;
      for (let index = 0; index < followers.length; index++) {
        if (searchValue === followers[index].handle) {
          found = true;
          break;
        }
      }
      if (found) {
        dispatch(setsearchResult('follows'));
      } else {
        dispatch(setsearchResult('Does not follow'));
      }
      dispatch(setSearchDone(true));
      dispatch(setPrevSearchValue(searchValue));
      const SearchSection = document.getElementById('SearchSection');
      SearchSection.style.display = 'block';
    }
  };
  return {
    showFollowers,
    handleChange,
    handleSubmit,
  };
};

export default useHandler;
