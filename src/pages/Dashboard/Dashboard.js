/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Dashboard.module.scss';
import { showPosts, getOnePost, showBlogsForYou } from './DashBoardController';
import {fetchPost, fetchRadar, fetchExploreBlogs, fetchInfo, detectLazyLoad} from './DashBoardService';
import {
  setPosts, incrementPageNum, decrementPageNum,
  setIsInfinite, setExploreBlogs, setIsMounted, setPageNum,
  setPostsMounted, setRadarMounted, setExploreBlogsMounted,setNextButton ,
  setStopFetch,
} from '../../redux/DashBoardReducer';
import NavigateButtons from '../../components/Dashboard/Main UI/NavigateButtons';
import Newpost from '../../components/Dashboard/NewPost/Newpost';
import Post from '../../components/Post/Post';
import Inbox from '../../components/Dashboard/Chat/Chat';

const Dashboard = function () {
  const {
    posts, pageNum, isInfinte, ismounted, exploreBlogs, pageNumPosts,radar,
    postsMounted, exploreBlogsMounted, radarMounted, ChatMounted,nextButton,
    isChat, freind,stopFetch
  } = useSelector((state) => state.DashBoard);
  const dispatch = useDispatch();

  useEffect( async () => {
    await fetchRadar();
    await fetchExploreBlogs();
    await fetchInfo();
    detectLazyLoad(isInfinte);
  }, []);

  useEffect( async () => {
    await fetchPost(pageNum, pageNumPosts, posts, setNextButton, isInfinte,stopFetch);
  }, [pageNum, pageNumPosts]);

  useEffect(async () => {
    if (posts.length !==0  ) {
      await dispatch(setPostsMounted(1));
    }
    if (radar.length !==0  ) {
      await dispatch(setRadarMounted(1));
    }
    if (exploreBlogs.length !==0  ) {
      await dispatch(setExploreBlogsMounted(1));
    }
  }, [posts]);

  return (
    <div className={styles.parent}>
      <div className={styles.mainClass}>
        <div className={styles.Navbar} />
        <div className={`${styles.container} ${styles.row}`}>
          <div className={styles.posts}>
            <Newpost avatar='none'/>
            { postsMounted && showPosts(posts, pageNum, isInfinte, pageNumPosts)}
            <NavigateButtons nextButton={nextButton}/>
          </div>
          <div className={styles.explore}>
            <div className={styles.checkBlogs}>
            <h1 className={styles.white}> Check Theses Blogs </h1>
              <hr />
              { exploreBlogsMounted && showBlogsForYou(exploreBlogs)}
            </div>
            <div className={styles.radar}>
              <h1 className={styles.white}>Radar</h1>
              <hr />
              {radarMounted && getOnePost(radar)}
              { isChat && (<Inbox />)}
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
