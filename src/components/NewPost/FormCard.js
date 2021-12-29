/* eslint quotes: ["error","single"] */
/* eslint jsx-quotes: ["error", "prefer-single"] */
/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from 'react';
import { MdSettings } from 'react-icons/md';
import { IoIosArrowDown } from 'react-icons/io';
import classes from './FormCard.module.scss';
import avatar from '../../assets/Images/avatar.png';
import { useSelector, useDispatch } from 'react-redux';
import { userBlogsActions } from '../../redux/userBlogs-slice';
import ListItem from './ListItem';
/**
 * Component to render the layout of the new post
 * @author Yousef Elshabrawy
 *
 * @component
 */
const FormCard = function (props) {
  const dispatch = useDispatch();
  const { children, changeBlogId } = props;
  const userBlogs = useSelector((state) => state.userBlogs.userBlogs);
  const postBlog = useSelector((state) => state.userBlogs.postBlog);
  const [showOptions, setShowOptions] = useState(false);
  const toggleOptionsHandler = () => {
    setShowOptions((x) => !x);
  };
  const selectOptionHandler = (e) => {
    const postBlog = userBlogs.find((userBlog) => userBlog.id === e.target.getAttribute('value'));
    dispatch(userBlogsActions.setPostBlog(postBlog));
    changeBlogId(e.target.getAttribute('value'));
  };
  return (
    <div className={classes.text}>
      <div className={classes.avatar}>
        <img src={avatar} alt='avatar' />
      </div>
      <div className={classes.form}>
        <header>
          <div onClick={toggleOptionsHandler}>
            {postBlog.handle}
            <IoIosArrowDown />
            {showOptions && (
              <ul onClick={selectOptionHandler}>
                {userBlogs.map((blog) => <li value={blog.id} key={blog.id}><ListItem userBlog={blog}/></li>)}
              </ul>
            )}
          </div>
          {/* <MdSettings /> */}
        </header>
        {children}
      </div>
    </div>
  );
};
export default FormCard;
