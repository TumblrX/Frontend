/* eslint-disable no-unused-vars */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classes from './BlogView.module.scss';
import Post from '../../components/Post/Post';
import { setIsClose, setIsShare, setIsDots } from '../../redux/blogview';

const BlogViewController = function () {
  const dispatch = useDispatch();
  const { isShare, isClose, isDots } = useSelector((state) => state.BlogView);
  return {
    showPosts: (posts, pageNum, isInfinte, pageNumPosts) => {
        return posts.map((post, index) => ( 
          <div className={`${classes.post} ${classes.row}`} key={index}>
            <div className={classes.postDatailes}>
              <Post data={post} />
            </div>
          </div>
        ));
      },
      shareClickHandler: () =>{
          dispatch(setIsShare(!isShare))
          dispatch(setIsDots(false))
      },
      dotsClickHandler: () =>{
          dispatch(setIsShare(false))
          dispatch(setIsDots(!isDots))
      }
  };
};
export default BlogViewController;