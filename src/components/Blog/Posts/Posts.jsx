/* eslint-disable no-nested-ternary */
/* eslint-disable func-names */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Posts.module.scss';
import showPosts from './PostsControllers';
import NothingAvailable from '../nothingAvailable/nothingAvailable';
import Loading from '../Loading/Loading';
import Newpost from '../../Dashboard/NewPost/Newpost';
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
  const { pageNum, isInfinte } = useSelector((state) => state.blogposts);
  const {
    intialLoading, NumOfPosts, posts, avatar,
  } = useSelector((state) => state.Blog);
  const dispatch = useDispatch();
  return (
    <div className={`${styles.container} ${styles.row}`}>
      <div className={styles.posts}>
        <Newpost avatar={avatar} />
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
            (pageNum !== 1 && !isInfinte && NumOfPosts !== 0)
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
              && !isInfinte && NumOfPosts !== 0
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
    </div>
  );
};

export default Posts;
