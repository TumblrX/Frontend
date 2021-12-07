
import React from 'react';
import styles from '../Posts.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import {
  incrementPageNum, decrementPageNum,
} from '../../../../redux/blogPosts';

const navButtons = function () {
  const {
    posts, pageNum, isInfinte,
  } = useSelector((state) => state.blogposts);
  const dispatch = useDispatch();
  return (
    <div className={`${styles.navigate_btns} ${styles.row}`}>
      {
          (pageNum !== 1 && !isInfinte)
          && (
            <button
              className={styles.previous_btn}
              onClick={() => dispatch(decrementPageNum())}
            >
              &lt; Previous
            </button>
          )
        }
      {
          // eslint-disable-next-line no-mixed-operators
          (pageNum * 10 < posts.length || posts.length === 0)
            // eslint-disable-next-line eqeqeq
            && !isInfinte
        && (
        <button
          className={styles.next_btn}
          onClick={() => { dispatch(incrementPageNum()); }}
        >
          Next &gt;
        </button>
        )
      }
    </div>
  );
};

export default navButtons;
