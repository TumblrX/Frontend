import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import styles from './Posts.module.scss';
import showPosts from './PostsControllers';
import fetchPost from './PostsService';
import NavButtons from './postsBody/navButtons';
import NothingAvailable from '../nothingAvailable/nothingAvailable';
import Loading from '../Loading/Loading';

/**
 * Component to render blog posts page
 * @author Ahmed Mahmoud
 *
 * @component
 *
 */
const Posts = function () {
  const {
    posts, pageNum, intialLoading, NumOfPosts, isInfinte,
  } = useSelector((state) => state.blogposts);
  useEffect(() => {
    fetchPost();
  }, []);
  const conditionRender = () => {
    console.log('intialLoading ', intialLoading);
    console.log('NumOfPosts', NumOfPosts);
    if (intialLoading) {
      <Loading />;
    } else if (NumOfPosts === 0) {
      <NothingAvailable page="Post" />;
    } else {
      showPosts(posts, pageNum, isInfinte);
    }
  };
  return (
    <div className={`${styles.container} ${styles.row}`}>
      <div className={styles.posts} data-testid="testPostContainer">
        <div className={`${styles.insertPost} ${styles.row}`}>
          <div className={styles.insertLogo} />
          <div className={styles.insertPostDetails}>
            insertPost
          </div>
        </div>
        {/* --------------- Start posts ---------------------- */}
        {!intialLoading && showPosts(posts, pageNum, isInfinte)}
        <NavButtons />
      </div>
      {/* --------------- End posts ---------------------- */}
    </div>
  );
};

export default Posts;
