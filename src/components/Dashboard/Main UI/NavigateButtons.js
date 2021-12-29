import React, { useEffect } from 'react';
import styles from './NavigateButtons.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import {
  incrementPageNum, decrementPageNum,postsMounted,
  exploreBlogsMounted, radarMounted, setPostsMounted
} from '../../../redux/DashBoardReducer';

const NavigateButtons = function () {
  const {posts, pageNum, nextButton } = useSelector((state) => state.DashBoard);
  const dispatch = useDispatch();

  return (
    <div className={`${styles.navigate_btns} ${styles.row}`}>
      { 
        ( pageNum !== 1  && (localStorage["InfinteScrolling"] !== 'true') )
          && (
          <button
            className={styles.previous_btn}
            onClick={() => {  dispatch(decrementPageNum());}}
          >
            &lt; Previous
          </button>
        )
      }
      {
        ( 
          (posts.length !== 0 &&  (localStorage["InfinteScrolling"] !== 'true') && (nextButton || pageNum == 1))) 
          && (
          <button
            className={styles.next_btn}
            onClick={() => { dispatch(incrementPageNum()); dispatch(setPostsMounted(true))}}
          >
            Next &gt;
          </button>
        )
      }
    </div>
  );
};
export default NavigateButtons;
