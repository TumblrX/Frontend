/* eslint-disable no-unused-vars */
import { follow, unfollow } from '../../../Blog/Followers/followerSection/followservice';
import { setFollowingStatus } from '../../../../redux/userFollowing';
import { useDispatch } from 'react-redux';

const useFollowingSectionHandler = () => {
  const dispatch = useDispatch();  
  const handleSideClick = (event) => {
    const sideMenu = event.currentTarget.querySelector('#list');
    if (sideMenu.style.display === 'none') { sideMenu.style.display = 'block'; } else { sideMenu.style.display = 'none'; }
  };
  const handleClick = (id, followingStatus) => {
    if(followingStatus==='Follow'){
        follow({_id: id});
        dispatch(setFollowingStatus({id: id , status: "unFollow" }));  
    }
    else{
        unfollow({_id: id});
        dispatch(setFollowingStatus({id: id , status: "Follow" }));  
    }
  };
  return {
    handleSideClick,
    handleClick,
  };
};

export default useFollowingSectionHandler;