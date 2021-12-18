/* eslint-disable no-unused-vars */

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaTumblr } from 'react-icons/fa';
import { BiSearch } from 'react-icons/bi';
import classes from './HomePageNavBar.module.scss';

const HomePageNavBar = function () {
  const [title, setTitle] = useState('');
  const [inputIsFocused, setInputIsFocused] = useState(false);
  const onChangeHandler = (e) => {
    setTitle(e.target.value);
  };

  return (

    <div className={classes.page}>
      {/* <div className={`navbar ${darkMode?"navbar-dark":""}`}> */}
      <div className={classes.navbar}>
        <div className={classes.container}>
          <div className={classes['container-1']}>
            <div className={classes.logo}>
              <NavLink to="/dashboard"><FaTumblr /></NavLink>
            </div>
            <div className={inputIsFocused ? ` ${classes.focus} ${classes['search-bar']}` : classes['search-bar']}>
              <div className={classes['search-bar-icon']}><BiSearch /></div>
              <input id="myText" type="text" placeholder="Search Tumblr" value={title} onChange={onChangeHandler} onFocus={() => setInputIsFocused(true)} onBlur={() => setInputIsFocused(false)} />
            </div>
          </div>
          <div className={classes['container-2']}>
            <div className={classes['button-1']}>
              <NavLink to="/login">Log In</NavLink>
            </div>
            <div className={classes['button-2']}>
              <NavLink to="/register">Sign Up</NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageNavBar;
