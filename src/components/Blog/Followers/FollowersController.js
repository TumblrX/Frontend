import React from 'react';
import { useSelector } from 'react-redux';
import FollowerSection from './followerSection/FollowerSection';

const useHandler = () => {
  const { followers } = useSelector((state) => state.blogfollowers);
  const showFollowers = () => (
    followers.map((follower) => (
      <FollowerSection data={follower} key={follower.id} />
    ))
  );
  const handleSideClick = () => {
    const sideMenu = document.getElementById('span1');
    if (sideMenu.style.display === 'none') { sideMenu.style.display = 'block'; } else { sideMenu.style.display = 'none'; }
  };
  return {
    showFollowers,
    handleSideClick,
  };
};

export default useHandler;
