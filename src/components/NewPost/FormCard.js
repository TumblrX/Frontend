/* eslint quotes: ["error","single"] */
/* eslint jsx-quotes: ["error", "prefer-single"] */
/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from 'react';
import { MdSettings } from 'react-icons/md';
import { IoIosArrowDown } from 'react-icons/io';
import classes from './FormCard.module.scss';
import avatar from '../../assets/Images/avatar.png';
import { useSelector } from 'react-redux';

const FormCard = function (props) {
  const userBlogs = useSelector((state) => state.userBlogs.userBlogs);
  const { children, changeBlogId } = props;
  const [selectedBlogTitle, setSelectedBlogTitle] = useState();
  const [showOptions, setShowOptions] = useState(false);
  useEffect(() => {
    if (userBlogs.length !== 0) {
      setSelectedBlogTitle(userBlogs[0].title);
    } else {
      console.log('Server Error');
    }
  }, [userBlogs]);
  const toggleOptionsHandler = () => {
    setShowOptions((x) => !x);
  };
  const selectOptionHandler = (e) => {
    if (userBlogs.length === 0) return;
    changeBlogId(e.target.getAttribute('value'));
    setSelectedBlogTitle(userBlogs.find((blog) => blog.id === e.target.getAttribute('value')).title);
  };
  return (
    <div className={classes.text}>
      <div className={classes.avatar}>
        <img src={avatar} alt='avatar' />
      </div>
      <div className={classes.form}>
        <header>
          <div onClick={toggleOptionsHandler}>
            {selectedBlogTitle}
            <IoIosArrowDown />
            {showOptions && (
              <ul onClick={selectOptionHandler}>
                {userBlogs.map((blog) => <li value={blog.id} key={blog.id}>{blog.title}</li>)}
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
