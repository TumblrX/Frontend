/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Dashboard.module.scss';
import { showPosts, getOnePost, showBlogsForYou } from './DashBoardController';
import {fetchPost, fetchRadar, fetchExploreBlogs, fetchInfo} from './DashBoardService';
import {
  setPosts, incrementPageNum, decrementPageNum,
  setIsInfinite, setExploreBlogs, setIsMounted, setPageNum,
  setPostsMounted, setRadarMounted, setExploreBlogsMounted,
} from '../../redux/DashBoardReducer';
import NavigateButtons from '../../components/Dashboard/Main UI/NavigateButtons';
import Newpost from '../../components/Dashboard/NewPost/Newpost';
import Post from '../../components/Post/Post';

const Dashboard = function () {
  const {
    posts, pageNum, isInfinte, ismounted, exploreBlogs, pageNumPosts,radar,
    postsMounted, exploreBlogsMounted, radarMounted
  } = useSelector((state) => state.DashBoard);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchRadar();
    fetchExploreBlogs();
    fetchInfo();
  }, []);

  useEffect(() => {
    fetchPost(pageNum, pageNumPosts);
  }, [pageNum, pageNumPosts]);

  useEffect(() => {
    if (posts.length !==0  ) {
      dispatch(setPostsMounted(1));
    }
    if (radar.length !==0  ) {
      dispatch(setRadarMounted(1));
    }
    if (exploreBlogs.length !==0  ) {
      dispatch(setExploreBlogsMounted(1));
    }
  }, [posts]);

  return (
    <div className={styles.parent}>
      <div className={styles.mainClass}>
        <div className={styles.Navbar} />
        <div className={`${styles.container} ${styles.row}`}>
          <div className={styles.posts}>
            <Newpost />
            { postsMounted && showPosts(posts, pageNum, isInfinte, pageNumPosts)}
            <NavigateButtons pageNumPosts={pageNumPosts} />
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
