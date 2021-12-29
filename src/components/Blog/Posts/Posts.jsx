/* eslint-disable no-nested-ternary */
/* eslint-disable func-names */
/* eslint-disable react/jsx-filename-extension */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Posts.module.scss';
import showPosts from './PostsControllers';
import NothingAvailable from '../nothingAvailable/nothingAvailable';
import Loading from '../Loading/Loading';
import Newpost from '../../Dashboard/NewPost/Newpost';
import usePostHandler from './PostsService';
import {
  incrementPageNum, decrementPageNum,
} from '../../../redux/blogPosts';
//import {  CSSTransition }  from "react-transition-group"
//import PostsArea from './PostsArea';

/**
 * Component to render blog posts page
 * @author Ahmed Mahmoud
 *
 * @component
 *
 */
const Posts = function () {
  const {
    pageNum, intialLoading,
    posts, NumOfPosts, isInfinte,
  } = useSelector((state) => state.blogposts);
  const { avatar, id } = useSelector((state) => state.Blog);
  const { fetchBlogPosts } = usePostHandler();
  useEffect(() => {
    if (id) {
      fetchBlogPosts(id);
    }
  }, [id]);
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
              // <CSSTransition
              //   in={true}
              //   timeout={4000}
              //   classNames={styles.postAnimation}
              // >
              // <PostsArea posts={posts} pageNum={pageNum} isInfinte={isInfinte} />
              // </CSSTransition>
             showPosts(posts, pageNum, isInfinte,'blog')
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
