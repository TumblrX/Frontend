/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IoMdHelpCircle } from 'react-icons/io';
import { RiUserFollowFill } from 'react-icons/ri';
import { GiPresent } from 'react-icons/gi';
import { FiSettings } from 'react-icons/fi';
import { AiFillHeart } from 'react-icons/ai';
import { BsFillKeyboardFill, BsFillPaletteFill } from 'react-icons/bs';
import classes from './DropDownProfile.module.scss';

const DropDownProfile = function (props) {
  const logout = function (){
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('InfinteScrolling');
    localStorage.removeItem('handle');
    localStorage.removeItem('blogs');
    localStorage.removeItem('blog1');
    console.log('removed');
  }
  return (

    <div className={classes.profile}>
      <div className={classes.account}>
        <span>Account</span>
        <NavLink to="/" onClick={logout}>Log out</NavLink>
      </div>
      <ul className={classes['account-list']}>
        <div className={classes.likes}>
          <NavLink to="/likes">
            <div className={classes.text}>
            <AiFillHeart />
            Likes
            </div>
            <span>{props.counts.likesCount}</span>
          </NavLink>
        </div>
        <div className={classes.following}>
          <NavLink to="/following">
          <div className={classes.text}>
            <RiUserFollowFill />
            Following
            </div>
            <span>{props.counts.followingCount}</span>
          </NavLink>
        </div>
        <NavLink to="/settings/account">
        <div className={classes.text}>
          <FiSettings />
          Settings
          </div>
        </NavLink>
        <NavLink to="/blog/view/changes">
        <div className={classes.text}>
          <GiPresent />
          What's new
          </div>
        </NavLink>
        <NavLink to="/help">
        <div className={classes.text}>
          <IoMdHelpCircle />
          Help
          </div>
        </NavLink>
        <span>
          <BsFillKeyboardFill />
          Keyboard shortcuts
        </span>
        <span>
          <BsFillPaletteFill />
          Change Palette
        </span>

      </ul>
      <div className={classes.tumblrs}>
        <span>Tumblrs</span>
        <NavLink to="/newblog">+ New</NavLink>
      </div>
      <ul className={classes['tumblrs-list']}>
        <NavLink to="/blog/username">Posts</NavLink>
        <NavLink to="/blog/username/followers">Followers</NavLink>
        <NavLink to="/blog/username/activity">Activity</NavLink>
        <NavLink to="/blog/username/drafts">Drafts</NavLink>
        <NavLink to="/blog/username/queue">Queue</NavLink>
        <NavLink to="/customize">Edit Apperance</NavLink>
      </ul>
      <div className={classes.links}>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/apps">Apps</NavLink>
        <NavLink to="/policy/terms-of-services">Legal</NavLink>
        <NavLink to="/policy/privacy">Privacy</NavLink>
      </div>
    </div>

  );
};

export default DropDownProfile;
