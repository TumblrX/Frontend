/* eslint-disable no-unused-vars */
/* eslint-disable no-nested-ternary */
/* eslint-disable func-names */
/* eslint-disable react/jsx-filename-extension */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Posts.module.scss';
import showPosts from './PostsControllers';
import fetchPost from './PostsService';
import NothingAvailable from '../nothingAvailable/nothingAvailable';
import Loading from '../Loading/Loading';
import NewPostNavBar from '../../Dashboard/NewPost/Newpost';
import {
  incrementPageNum, decrementPageNum,
} from '../../../redux/blogPosts';

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
  const dispatch = useDispatch();
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
        { intialLoading
          ? <Loading />
          : (NumOfPosts === 0
            ? (
              <NothingAvailable page="Post" />
            )
            : (
              showPosts(posts, pageNum, isInfinte)
            )
          )}
        <div className={`${styles.navigateBtns} ${styles.row}`}>
          {
            (pageNum !== 1 && !isInfinte)
            && (
              <button
                className={styles.previousBtn}
                onClick={() => dispatch(decrementPageNum())}
              >
                &lt; Previous
              </button>
            )
          }
          {
            (pageNum * 10 < posts.length || posts.length === 0)
              && !isInfinte
              && (
                <button
                  className={styles.nextBtn}
                  onClick={() => { dispatch(incrementPageNum()); }}
                >
                  Next &gt;
                </button>
              )
          }
        </div>
      </div>
      {/* --------------- End posts ---------------------- */}
    </div>
  );
};

export default Posts;
