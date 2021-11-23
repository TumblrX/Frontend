/* eslint-disable no-unused-vars */

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaPencilAlt, FaTumblr } from 'react-icons/fa';
import { BiSearch } from 'react-icons/bi';
import { MdExplore } from 'react-icons/md';
import { IoIosMail } from 'react-icons/io';
import { RiChatSmile3Fill } from 'react-icons/ri';
import { GiElectric, GiHamburgerMenu } from 'react-icons/gi';
import { AiFillHome } from 'react-icons/ai';
import { BsFillPersonFill } from 'react-icons/bs';
import { ImCross } from 'react-icons/im';
import classes from './NavBar.module.scss';
import DropDownProfile from './DropDownProfile';
import DropDownActivity from './DropDownActivity';
import DropDownInbox from './DropDownInbox';
import List from './List';

const NavBar = function () {
  const [title, setTitle] = useState('');
  const [isShown, setIsShown] = useState(false);
  const [isSearch, setSearch] = useState(false);
  const [isInbox, setInbox] = useState(false);
  const [isActivity, setActivity] = useState(false);
  const [isProfile, setProfile] = useState(false);
  const [inputIsFocused, setInputIsFocused] = useState(false);
  const barsClickHandler = () => setIsShown(!isShown);
  const searchClickhHandler = () => setSearch(!isSearch);
  const inboxClickHandler = () => {
    setInbox(!isInbox);
    setActivity(false);
    setProfile(false);
  };
  const activityClickHandler = () => {
    setInbox(false);
    setActivity(!isActivity);
    setProfile(false);
  };
  const profileClickHandler = () => {
    setInbox(false);
    setActivity(false);
    setProfile(!isProfile);
  };

  const onChangeHandler = (e) => {
    setTitle(e.target.value);
  };

  return (

    <div className={classes.page}>
      {/* <div className={`navbar ${darkMode?"navbar-dark":""}`}> */}
      <div className={classes.navbar}>
        <div className={classes.container}>

          <div className={classes.bars} onClick={barsClickHandler}>
            {isShown ? <ImCross /> : <GiHamburgerMenu />}

          </div>
          <div className={classes['search-icon']} onClick={searchClickhHandler}>
            <span>{isSearch ? <ImCross /> : <BiSearch />}</span>
          </div>
          <div className={classes['container-1']}>
            {!isSearch && (
              <div className={classes.logo}>
                <NavLink to="/dashboard"><FaTumblr /></NavLink>
              </div>
            )}
            <div className={inputIsFocused ? ` ${classes.focus} ${classes['search-bar']}` : classes['search-bar']}>
              <div className={classes['search-bar-icon']}><BiSearch /></div>
              <input id="myText" type="text" placeholder="Search Tumblr" value={title} onChange={onChangeHandler} onFocus={() => setInputIsFocused(true)} onBlur={() => setInputIsFocused(false)} />
            </div>
            {isSearch && (
              <div className={classes['search-bar-small']}>
                <input id="myText" type="text" placeholder="Search Tumblr" value={title} onChange={onChangeHandler} />
              </div>
            )}
          </div>
          <div className={classes['container-2']}>
            <div className={classes.icons}>
              <NavLink to="/dashboard"><AiFillHome /></NavLink>
              <NavLink to="/explore/recommended-for-you"><MdExplore /></NavLink>
              <NavLink to="/inbox"><IoIosMail /></NavLink>
              <div className={classes.inbox}>
                <span onClick={inboxClickHandler}><RiChatSmile3Fill /></span>
                {isInbox && <DropDownInbox />}
              </div>
              <div className={classes.activity}>
                <span onClick={activityClickHandler}><GiElectric /></span>
                {isActivity && <DropDownActivity />}
              </div>
              <div className={classes.profile}>
                <span onClick={profileClickHandler}><BsFillPersonFill /></span>
                {isProfile && <DropDownProfile />}
              </div>
            </div>
            <div className={classes['new-post-navbar']}>
              <NavLink to="/new"><FaPencilAlt /></NavLink>
            </div>
          </div>
        </div>
      </div>
      {isShown && <List />}
    </div>
  );
};

export default NavBar;
