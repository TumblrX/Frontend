import React from 'react';
import styles from './NavigateButtons.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import {
  incrementPageNum, decrementPageNum,
} from '../../../redux/DashBoardReducer';

const NavigateButtons = function ({ pageNumPosts }) {
  const {
    posts, pageNum, isInfinte,
  } = useSelector((state) => state.DashBoard);
  const dispatch = useDispatch();

  return (
    <div className={`${styles.navigate_btns} ${styles.row}`}>
      {(pageNum !== 1 && !isInfinte)
        && (
        <button
          className={styles.previous_btn}
          onClick={() => dispatch(decrementPageNum())}
        >
          &lt; Previous
        </button>
        )}
      {(pageNum * pageNumPosts < posts.length || posts.length === 0)
      && !isInfinte
      && (
        <button
          className={styles.next_btn}
          onClick={() => { dispatch(incrementPageNum()); }}
        >
          Next &gt;
        </button>
      )}
    </div>
  );
};
export default NavigateButtons;
