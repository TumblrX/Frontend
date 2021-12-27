/* eslint-disable no-plusplus */
import { useSelector, useDispatch } from 'react-redux';
import FollowingSection from './FollowingSection/FollowingSection';
import {
  setSearchValue, setsearchResult, setSearchDone, setPrevSearchValue, setValidSearch, setFound,
} from '../../../redux/userFollowing';
import { searchFollow } from './FollowingServices';

const useFollowingHandler = () => {
  const {
    Following, searchValue, Found,
  } = useSelector((state) => state.following);
  const dispatch = useDispatch();
  /**
   * this function is to show the fetched blogs that a user follows
   * @function showFollowing
   * @return {JSX} return jsx of the fetched blogs that a user follows to be rendered in the following page
   */
  const showFollowing = () => (
    Following.map((follower) => (
      <FollowingSection data={follower} key={follower.id} />
    ))
  );
  /**
   * this function handle the event of changing search box input to keep it in sync with the state
   * @function handleChange
   * @param {event} event
   * @return {void} return nothing
   */
  const handleChange = (event) => {
    dispatch(setSearchDone(false));
    dispatch(setSearchValue(event.target.value));
    if(event.target.value.length>0){
      dispatch(setValidSearch(false));
      console.log("hi from search");
    }else{
      dispatch(setValidSearch(true));  
      console.log("hi from not search");
    }
  };
  /**
   *  this function handle the event of submitting search form
   * @function handleSubmit
   * @param {event} event
   * @return {void} return nothing
   */
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(setSearchDone(false));
    if (searchValue.length > 0) {
        dispatch(setFound(false));
        searchFollow(searchValue);
        if (Found) {
        dispatch(setsearchResult('you are now following'));
        } else {
        dispatch(setsearchResult('no blog found with handle'));
        }
        dispatch(setSearchDone(true));
        dispatch(setPrevSearchValue(searchValue));
        const SearchSection = document.getElementById('SearchSection');
        SearchSection.style.display = 'block';
    }
  };
  return {
    showFollowing,
    handleChange,
    handleSubmit,
  };
};

export default useFollowingHandler;
