/* eslint-disable no-nested-ternary */
/* eslint-disable func-names */
/* eslint-disable react/jsx-filename-extension */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from '../Posts/Posts.module.scss';
import showDrafts from './DraftsController';
import NothingAvailable from '../nothingAvailable/nothingAvailable';
import Loading from '../Loading/Loading';
import Newpost from '../../Dashboard/NewPost/Newpost';
import useDraftHandler from './DraftsService';
import {
  incrementPageNum, decrementPageNum,
} from '../../../redux/blogDrafts';

/**
 * Component to render blog drafts page
 * @author Ahmed Mahmoud
 *
 * @component
 *
 */
const Drafts = function () {
  const {
    pageNum, intialLoading,
    drafts, numberOfDrafts, isInfinte
  } = useSelector((state) => state.BlogDrafts);
  const { avatar, id } = useSelector((state) => state.Blog);
  const { fetchBlogDrafts } = useDraftHandler();
  useEffect(() => {
    if (id) {
      fetchBlogDrafts(id);
    }
  }, [id]);
  const dispatch = useDispatch();
  return (
    <div className={`${styles.container} ${styles.row}`}>
      <div className={styles.posts}>
        <Newpost avatar={avatar} />
        { intialLoading
          ? <Loading />
          : (numberOfDrafts === 0
            ? (
              <NothingAvailable page="Draft" />
            )
            : (
              showDrafts(drafts, pageNum, isInfinte)
            )
          )}
        <div className={`${styles.navigateBtns} ${styles.row}`}>
          {
            (pageNum !== 1 && !isInfinte && numberOfDrafts !== 0)
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
            (pageNum * 10 < drafts.length || drafts.length === 0)
              && !isInfinte && numberOfDrafts !== 0
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

export default Drafts;
