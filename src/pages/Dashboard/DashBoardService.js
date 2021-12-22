import configureStore from '../../redux/store';
import { setPosts, setRadar, setExploreBlogs, removeBlog} from '../../redux/DashBoardReducer';
import api from '../../api/api';
import { follow }  from '../../components/Blog/Followers/followerSection/followservice'
import { useSelector } from 'react-redux';

const fetchPost = async (pageNum, pageNumPosts) => {
  try {
    // console.log('fetch post is called');
    // console.log('pageNum -->', pageNum);
    // console.log('response -->', response.data);
    const response = await api.get(`/api/user/dashboard?limit=${10}&page=${pageNum}`);
    if (response.data.hasOwnProperty('for-youPosts')) {
      configureStore.dispatch(setPosts(response.data['for-youPosts']));
    } else {
      configureStore.dispatch(setPosts(response.data.posts));
    }
    
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

const fetchRadar = async () => {
  try {
    const response = await api.get('/api/user/explore/1/for-you');
    console.log('radar -->', response.data['for-youPosts'])
    configureStore.dispatch(setRadar(response.data['for-youPosts']));
    // console.log('fetch radar is called', response.data);
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

const fetchExploreBlogs = async () =>{
  try {
    const response = await api.get('api/blog/explore/0/for-you');
    configureStore.dispatch(setExploreBlogs(response.data.forYouBlogs));
    // console.log('fetch Explore is called', response.data.forYouBlogs);
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

const handleFollow = (index, _id) =>{
  console.log(_id);
  var element = document.getElementById(`follow${index}`).getElementsByTagName('p')[0];
  if(element.innerText === 'follow'){
    follow(_id);
    element.innerText ='unfollow';
  }else {
    // unfollow heeeer
    element.innerText ='follow';
  }
};

const handleExit = (clickedId) =>{
  const id = clickedId.replace('exit','');
  configureStore.dispatch(removeBlog(id));
};

const handleSideView = (clickedId) =>{
  console.log(clickedId);
};

export  
{  fetchPost, fetchRadar, fetchExploreBlogs, 
    handleFollow, handleExit, handleSideView,};
