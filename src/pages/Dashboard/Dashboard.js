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
import { addMessage } from '../../redux/ChatReducer';
import NavigateButtons from '../../components/Dashboard/Main UI/NavigateButtons';
import Newpost from '../../components/Dashboard/NewPost/Newpost';
import Post from '../../components/Post/Post';
import Inbox from '../../components/Dashboard/Chat/Chat';
import Loading from '../../components/Blog/Loading/Loading'
import { fetchUserBlogs } from '../../redux/userBlogs-actions';
import { io } from 'socket.io-client';
import { dataTime, scroll} from '../../components/Dashboard/Chat/ChatController'
import getSettings from '../Customize/GetSettingsServce';


const Dashboard = function () {
  const {
    posts, pageNum, isInfinte, ismounted, exploreBlogs, pageNumPosts,radar,
    postsMounted, exploreBlogsMounted, radarMounted, ChatMounted,nextButton,
    isChat, isLoading
  } = useSelector((state) => state.DashBoard);
  const dispatch = useDispatch();
  const mySocket = useRef();
  const firstTimeRef = useRef(1);


  useEffect(  () => { componentOnMount(pageNum, pageNumPosts) }, []);
  useEffect( () => {
      if(firstTimeRef.current ===1) {
        const socketUrl = process.env.REACT_APP_SOCKET_URL;
        mySocket.current = io(socketUrl,{
          auth:{
            token: `${localStorage.getItem('token')}`
          } 
        })   
        mySocket.current.on("privateMessage", async (data) => {
          let condition= ( data.senderId === localStorage.getItem('userId') || (data.receiverId === localStorage.getItem('userId'))) ;
          if(condition){
            console.log("condition")
            dispatch(addMessage({
              text:data.content,
              senderId: data.senderId,
              createdAt: dataTime()
            }));
            scroll(); 
          }
        })
        firstTimeRef.current = 0;
      }
  },[])  

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

      if (radar.length > 0  ) {
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
            <Newpost avatar={localStorage["avatar"]}/>
            { 
              !postsMounted? (
                <Loading />
              ) : (
                <>
                  { postsMounted && showPosts(posts, pageNum, isInfinte, pageNumPosts, isLoading) }
                  {
                    isLoading && <div className={styles.load}> <Loading /> </div>
                  }
                </>
              )
            }
            <NavigateButtons />
          </div>
          <div className={styles.explore}>
            <div className={styles.checkBlogs}>
            <h1 className={styles.white}> Check out these blogs </h1>
              <hr />
              { 
                !exploreBlogsMounted? ( 
                    <Loading />
                ):(
                    showBlogsForYou(exploreBlogs)
                )
              }
            </div>
            <div className={styles.radar}>
              <h1 className={styles.white}>Radar</h1>
              <hr />
              {
                !radarMounted ? (  
                  <Loading /> 
                ) : (
                  getOnePost(radar)
                )
              }
              { isChat && (<Inbox mySocket={mySocket}/>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
