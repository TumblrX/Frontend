/* eslint-disable no-nested-ternary */
/* eslint-disable func-names */
/* eslint-disable react/jsx-filename-extension */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from '../../Blog/Posts/Posts.module.scss';
import showPosts from '../../Blog/Posts/PostsControllers';
import Loading from '../../Blog/Loading/Loading';
import useLikesHandler from './LikesService';
import {
  incrementPageNum, decrementPageNum,
} from '../../../redux/Likes';


const LikesMain = function () {
  const {
    pageNum, intialLoading,
    Likes, numberOfLikes, isInfinte
  } = useSelector((state) => state.likes);
  const { fetchLikes } = useLikesHandler();
  useEffect(() => {
    fetchLikes();
  }, []);
  const dispatch = useDispatch();
  return (
    <div className={styles.likescont}>
        <div className={`${styles.container} ${styles.row}`}>
            <div className={styles.posts}>
                {numberOfLikes > 0 && 
                (
                <h1 className={styles.h1}>
                    {numberOfLikes}
                    {' '}
                    Likes
                </h1>
                )}
                { intialLoading
                ? <Loading />
                : (numberOfLikes === 0
                    ? (
                        <div className={styles.NothingAvailable}>No posts available.</div>
                    )
                    : (
                        showPosts(Likes, pageNum, isInfinte)
                    )
                )}
                <div className={`${styles.navigateBtns} ${styles.row}`}>
                {
                    (pageNum !== 1 && !isInfinte && numberOfLikes !== 0)
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
                    (pageNum * 10 < Likes.length || Likes.length === 0)
                    && !isInfinte && numberOfLikes !== 0
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
    </div>  
  );
};

export default LikesMain;
