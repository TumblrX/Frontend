import configureStore from '../../redux/store';
import { setPosts, setRadar, setExploreBlogs, removeBlog, incrementPageNum, setStopFetch} from '../../redux/DashBoardReducer';
import api from '../../api/api';
import { follow, unfollow }  from '../../components/Blog/Followers/followerSection/followservice'
import { useSelector } from 'react-redux';

const detectLazyLoad = (isInfinte) => {
  window.onscroll = function(ev) {
    if (isInfinte && ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight )) {
      configureStore.dispatch(incrementPageNum()); 
    }
  };
}

const fetchPost = async (pageNum, pageNumPosts, posts, setNextButton, isInfinte, stopFetch) => {
  const checkEqualArr =  (a , b) =>{
    return JSON.stringify(a) === JSON.stringify(b);
  } ;
  const checkArrNotContained = (arr1, arr2) =>{
    const a = JSON.stringify(arr1);
    const b = JSON.stringify(arr2);
    const c = b.indexOf(a);
    // console.log('contained called')
    return c === -1 ;
  };
  if(stopFetch){
    return
  }
  try {
    // console.log('fetch post is called');
    // console.log('pageNum -->', pageNum);
    const response = await api.get(`/api/user/dashboard?limit=${pageNumPosts}&page=${pageNum}`);
    console.log('fetch post is called -->', response.data);
    if (response.data.hasOwnProperty('for-youPosts')) {
      if(isInfinte ){
        // console.log('check if contained')
        if(checkArrNotContained( response.data['for-youPosts'] , posts)){
          await configureStore.dispatch(setPosts([...posts,...response.data['for-youPosts']]));
        }else {
          console.log('no fecth');
          configureStore.dispatch(setStopFetch(true));
        }
      }else {
        await configureStore.dispatch(setPosts(response.data['for-youPosts']));
        const next = checkEqualArr(posts, response.data['for-youPosts']);
        configureStore.dispatch(setNextButton(!next));
      }
    } else {
      if(isInfinte ){
        if(checkArrNotContained( response.data.posts , posts)){
          await configureStore.dispatch(setPosts([...posts,...response.data.posts]));
        }else {
          console.log('no fecth');
          configureStore.dispatch(setStopFetch(true));
        }
      }else {
        await configureStore.dispatch(setPosts(response.data.posts));
        const next = checkEqualArr(posts, response.posts)
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
    // console.log('radar -->', response.data['for-youPosts'])
    // console.log('radar response -->', response.data)
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

const handleFollow = (index, id) =>{
  
  var element = document.getElementById(`follow${index}`).getElementsByTagName('p')[0];
  if(element.innerText === 'follow'){
     follow({_id: id});
    element.innerText ='unfollow';
  }else {
    // unfollow heeeer
     unfollow({_id: id});
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

const fetchInfo = async (pageNum, pageNumPosts) => {
  try {
    // console.log('fetch post is called');
    // console.log('pageNum -->', pageNum);
    // console.log('response -->', response.data);
    const response = await api.get('/api/user/info');
    return response;
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
  return null
};


export  
{  fetchPost, fetchRadar, fetchExploreBlogs,detectLazyLoad, 
    handleFollow, handleExit, handleSideView,fetchInfo};
