/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './DropDownProfile.module.scss';
import {IoMdHelpCircle } from 'react-icons/io';
import {RiUserFollowFill } from 'react-icons/ri';
import {GiPresent } from 'react-icons/gi';
import { FiSettings } from 'react-icons/fi';
import { AiFillHeart } from 'react-icons/ai';
import { BsFillKeyboardFill,BsFillPaletteFill } from 'react-icons/bs';

const DropDownProfile = function () {
  return (

    <div className={classes.profile}>
      <div className={classes.account}>
        <span>Account</span>
        <NavLink to="/">Log out</NavLink>
      </div>
      <ul className={classes['account-list']}>
        <NavLink to="/likes">
          <AiFillHeart />
          Likes
        </NavLink>
        <NavLink to="/following">
          <RiUserFollowFill />
          Following
        </NavLink>
        <NavLink to="/settings/account">
          <FiSettings />
          Settings
        </NavLink>
        <NavLink to="/blog/view/changes">
          <GiPresent />
          What's new
        </NavLink>
        <NavLink to="/help">
          <IoMdHelpCircle />
          Help
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
        <NavLink to="/new/blog">+ New</NavLink>
      </div>
      <ul className={classes['tumblrs-list']}>
        <NavLink to="/blog/username">Posts</NavLink>
        <NavLink to="/blog/username/followers">Followers</NavLink>
        <NavLink to="/blog/username/activity">Activity</NavLink>
        <NavLink to="/blog/username/drafts">Drafts</NavLink>
        <NavLink to="/blog/username/queue">Queue</NavLink>
        <NavLink to="/settings/blog/username">Edit Apperance</NavLink>
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
