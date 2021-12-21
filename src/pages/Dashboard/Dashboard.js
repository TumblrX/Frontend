/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Dashboard.module.scss';
import { showPosts, getOnePost, showBlogsForYou } from './DashBoardController';
import fetchPost from './DashBoardService';
import {
  setPosts, incrementPageNum, decrementPageNum,
  setIsInfinite, setExploreBlogs, setIsMounted, setPageNum,
} from '../../redux/DashBoardReducer';
import NavigateButtons from '../../components/Dashboard/Main UI/NavigateButtons';
import Newpost from '../../components/Dashboard/NewPost/Newpost';
import Post from '../../components/Post/Post';

const Dashboard = function () {
  const {
    posts, pageNum, isInfinte, ismounted, exploreBlogs, pageNumPosts,
  } = useSelector((state) => state.DashBoard);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetch = async () => {
      await fetchPost();
    };
    fetch();
  }, []);
  useEffect(() => {
    if (posts.length !== 0) {
      dispatch(setIsMounted(1));
      console.log('after mount -->', posts);
    }
  }, [posts]);

  return (
    <div className={styles.parent}>
      <div className={styles.mainClass}>
        <div className={styles.Navbar} />
        <div className={`${styles.container} ${styles.row}`}>
          <div className={styles.posts}>
            <Newpost />
            { ismounted && showPosts(posts, pageNum, isInfinte, pageNumPosts)}
            <NavigateButtons pageNumPosts={pageNumPosts} />
          </div>
          <div className={styles.explore}>
            <div className={styles.checkBlogs}>
              Check Theses Blogs
              <hr />
              { ismounted && showBlogsForYou(exploreBlogs)}
            </div>
            <div className={styles.radar}>
              <h1 className={styles.white}>Radar</h1>
              <hr />
              {ismounted && getOnePost(posts)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
