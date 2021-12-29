import configureStore from '../../redux/store';
import { pushPosts,setPosts, setRadar, setExploreBlogs, removeBlog, incrementPageNum, setStopFetch,setNextButton} from '../../redux/DashBoardReducer';
import api from '../../api/api';
import { follow, unfollow } from '../../components/Blog/Followers/followerSection/followservice'
import { useSelector } from 'react-redux';
const checkEqualArr =  (a , b) =>{
  return JSON.stringify(a) === JSON.stringify(b);
};


const fetchPost = async (pageNum, pageNumPosts, posts) => {
  try {
    const response = await api.get(`/api/user/dashboard?limit=${pageNumPosts}&page=${pageNum}`);
    // console.log('fetch post is called -->', response.data);
    if (response.data.hasOwnProperty('for-youPosts')) {
      if(localStorage["InfinteScrolling"] === 'true'){
        await configureStore.dispatch(pushPosts(response.data['for-youPosts']));
      }else {
        const next = await checkEqualArr(posts, response.data['for-youPosts']);
        await configureStore.dispatch(setPosts(response.data['for-youPosts']));
        configureStore.dispatch(setNextButton(!next));
      }
    } else {
      if(localStorage["InfinteScrolling"] === 'true' ){
        await configureStore.dispatch(pushPosts(response.data.posts));
      }else {
        const next = await checkEqualArr(posts, response.posts)
        await configureStore.dispatch(setPosts(response.data.posts));
        configureStore.dispatch(setNextButton(!next));
      }
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
    configureStore.dispatch(setRadar(response.data['for-youPosts']));
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
    console.log(response.data.forYouBlogs)
    configureStore.dispatch(setExploreBlogs(response.data.forYouBlogs));
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

const handleFollow = (index, blogId) =>{
  // console.log(_id);
  var element = document.getElementById(`follow${index}`).getElementsByTagName('p')[0];
  if(element.innerText === 'follow'){
    follow({_id:blogId});
    element.innerText ='unfollow';
  }else {
    // unfollow heeeer
    unfollow({_id:blogId});
    element.innerText ='follow';
  }
};

const handleExit = (clickedId, exploreBlogs) =>{
  const id = clickedId.replace('exit','');
  configureStore.dispatch(removeBlog(id));
  if(exploreBlogs.length === 1){
    fetchExploreBlogs()
  }
};

const handleSideView = (clickedId) =>{
  console.log(clickedId);
};



export  
{  fetchPost, fetchRadar, fetchExploreBlogs, 
    handleFollow, handleExit, handleSideView};
