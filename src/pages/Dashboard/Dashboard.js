/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, {useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Dashboard.module.scss';
import { showPosts, getOnePost, showBlogsForYou, componentOnMount } from './DashBoardController';
import {fetchPost, fetchRadar, fetchExploreBlogs} from './DashBoardService';
import {
  setPosts, incrementPageNum, decrementPageNum,
  setIsInfinite, setExploreBlogs, setIsMounted, setPageNum,
  setPostsMounted, setRadarMounted, setExploreBlogsMounted,
} from '../../redux/DashBoardReducer';
import NavigateButtons from '../../components/Dashboard/Main UI/NavigateButtons';
import Newpost from '../../components/Dashboard/NewPost/Newpost';
import Post from '../../components/Post/Post';
import Inbox from '../../components/Dashboard/Chat/Chat';
import Loading from '../../components/Blog/Loading/Loading'
import { fetchUserBlogs } from '../../redux/userBlogs-actions';
import { io } from 'socket.io-client';

const Dashboard = function () {
  const {
    posts, pageNum, isInfinte, ismounted, exploreBlogs, pageNumPosts,radar,
    postsMounted, exploreBlogsMounted, radarMounted, ChatMounted,nextButton,
    isChat
  } = useSelector((state) => state.DashBoard);
  const { friend } = useSelector((state) => state.Chat);

  const dispatch = useDispatch();
  const mySocket = useRef();

  useEffect(  () => { componentOnMount(pageNum, pageNumPosts) }, []);
  useEffect(() => { dispatch(fetchUserBlogs()); }, [dispatch]);
  useEffect(() => { 
    const socketUrl = process.env.REACT_APP_SOCKET_URL;
    mySocket.current = io(socketUrl,{
      auth:{
        token: `${localStorage.getItem('token')}`
      } 
    });
    mySocket.current.on("privateMessage", async (data) => {
      // chatMessages(friend.id)
      // console.log('is sender  Me -> '  , id === data?.senderId)
      // console.log('is freind sender -> ', 
      // JSON.stringify(friend.id) === JSON.stringify(data.senderId))
      // console.log((localFriend.id) == (data.senderId)  )
      // if (JSON.stringify(localFriend.id) == JSON.stringify(data.senderId)  ){

      // console.log('freind  -->' , (friend?.id));
      // console.log('sender  -->' , (data.senderId));
      // console.log(' my id ', (localStorage.getItem('userId')))
      setTimeout(() => {
        console.log('friend = ',  friend )
        console.log('before condition 1', friend && (friend?.id) === (data.senderId) )
        console.log('before condition 2', data.senderId === localStorage.getItem('userId') )
        if (friend && (friend.id) === (data.senderId) || data.senderId === localStorage.getItem('userId') ){
          console.log('true condition ')
          // dispatch(addMessage({
          //     text:data.content,
          //     senderId: data.senderId,
          //     createdAt: dataTime()
          //   }));
          //   scroll(); 
        }
      }, 0);
    })
  }, []);

  

  useEffect(  () => {
    const fetch = async () => {
      await fetchPost(pageNum, pageNumPosts, posts);
    }
    fetch();
  }, [pageNum, pageNumPosts]);

  useEffect( () => {
    const setMount = async () => {
      if (posts.length !==0  ) {
        await dispatch(setPostsMounted(true));
      }else {
        await dispatch(setPostsMounted(false));
      }

      if (radar.length !==0  ) {
        await dispatch(setRadarMounted(true));
      }else {
        await dispatch(setRadarMounted(false));
      }

      if (exploreBlogs.length !==0  ) {
        await dispatch(setExploreBlogsMounted(true));
      }else {
        await dispatch(setExploreBlogsMounted(false));
      }
    }
    setMount();
  }, [posts, radar, exploreBlogs]);

  return (
    <div className={styles.parent}>
      <div className={styles.mainClass}>
        <div className={styles.Navbar} />
        <div className={`${styles.container} ${styles.row}`}>
          <div className={styles.posts}>
            <Newpost avatar='none'/>
            { !postsMounted? (
              <Loading />
            ) : (
             showPosts(posts, pageNum, isInfinte, pageNumPosts)
            )}
            <NavigateButtons />
          </div>
          <div className={styles.explore}>
            <div className={styles.checkBlogs}>
            <h1 className={styles.white}> Check Theses Blogs </h1>
              <hr />
              { !exploreBlogsMounted? ( 
                <Loading />
              ):(
                showBlogsForYou(exploreBlogs)
              )}
            </div>
            <div className={styles.radar}>
              <h1 className={styles.white}>Radar</h1>
              <hr />
              {!radarMounted ? (  
                <Loading /> ) 
              : (
                getOnePost(radar)
              )}
              { isChat && (<Inbox mySocket={mySocket}/>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
