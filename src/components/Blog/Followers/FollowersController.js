/* eslint-disable no-plusplus */
import React from 'react';
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
  const showFollowers = () => (
    followers.map((follower) => (
      <FollowerSection data={follower} key={follower.id} />
    ))
  );
  const handleChange = (event) => {
    dispatch(setSearchDone(false));
    dispatch(setSearchValue(event.target.value));
  };
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
