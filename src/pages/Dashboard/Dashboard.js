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


const Dashboard = function () {
  const {
    posts, pageNum, isInfinte, ismounted, exploreBlogs, pageNumPosts,radar,
    postsMounted, exploreBlogsMounted, radarMounted, ChatMounted,nextButton,
    isChat, isLoading
  } = useSelector((state) => state.DashBoard);
  const { friend } = useSelector((state) => state.Chat);
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
        firstTimeRef.current = 0;
        mySocket.current.on("privateMessage", async (data) => {
          let condition= ( data.senderId === localStorage.getItem('userId') || (data.receiverId === localStorage.getItem('userId'))) ;
          // console.log( 'is sender', data.senderId === localStorage.getItem('userId') ) 
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
      }
  },[])
  // useEffect(() => { 
  //   let localChat = isChat; 
  //   let localFriend = friend

  //   // console.log('local chat ', localChat)
  //   // const checkSocket = (data, localChat, localFriend) => {
  //   //   console.log('before condition 1', localChat)
  //   //   console.log('before condition 2', data.senderId === localStorage.getItem('userId'))
  //   //   console.log('before condition 3', (localFriend.id === data.senderId))
  //   //   console.log('test condition ')
  //   //   const x= localChat &&  ( data.senderId === localStorage.getItem('userId') || (localFriend && localFriend.id === data.senderId)) ;
  //   //   console.log('x = ', x)
  //   //   return x;
  //   // }
  //   if(firstTimeRef.current ===1) {
  //     console.log('first time called')

  //     // mySocket.current.on("privateMessage", async (data) => {
  //     //   setTimeout(() => {
  //     //     if(checkSocket(data)){
  //     //         console.log('true condition ')
  //     //       }
  //     //   }, 1000);
    
  //     // })
  //     setTimeout(() => {
  //       console.log('local chat ', localChat)
  //       console.log('local freind ', friend)
  //     }, 1000);

  //     // firstTimeRef.current = 0;
  //   }
  //   // console.log('first time asdasdasdasd')

  // },[isChat, friend]);

  

  useEffect(  () => {
    const fetch = async () => {
      await fetchPost(pageNum, pageNumPosts, posts);
    }
    console.log('fetch is called')
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
        // await dispatch(setRadarMounted(false));
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
            { 
              !postsMounted? (
                <Loading />
              ) : (
                <>
                  { showPosts(posts, pageNum, isInfinte, pageNumPosts, isLoading) }
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
            <h1 className={styles.white}> Check Theses Blogs </h1>
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
