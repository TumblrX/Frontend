/* eslint-disable no-nested-ternary */
/* eslint-disable func-names */
/* eslint-disable react/jsx-filename-extension */
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import styles from './Posts.module.scss';
import showPosts from './PostsControllers';
import fetchPost from './PostsService';
import NavButtons from './postsBody/navButtons';
import NothingAvailable from '../nothingAvailable/nothingAvailable';
import Loading from '../Loading/Loading';
import NewPostNavBar from '../../Dashboard/NewPost/Newpost';

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
  return (
    <div className={`${styles.container} ${styles.row}`}>
      <div className={styles.posts}>
        <div className={`${styles.insertPost} ${styles.row}`}>
          <div className={styles.insertLogo} />
          <div className={styles.insertPostDetails}>
            <NewPostNavBar />
          </div>
        </div>
        {/* --------------- Start posts ---------------------- */}
        {intialLoading
          ? <Loading />
          : (NumOfPosts === 0
            ? (
              console.log('nothing available'),
                <NothingAvailable page="Post" />
            )
            : (
              console.log('show Posts'),
              showPosts(posts, pageNum, isInfinte),
                <NavButtons />
            )
          )}
      </div>
      {/* --------------- End posts ---------------------- */}
    </div>
  );
};

export default Posts;
