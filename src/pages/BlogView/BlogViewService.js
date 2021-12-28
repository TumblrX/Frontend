import configureStore from '../../redux/store';
import { setPosts, setStopFetch } from '../../redux/blogview';
import api from '../../api/api';

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
      // console.log('fetch post is called -->', response.data);
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

  
export  { fetchPost };