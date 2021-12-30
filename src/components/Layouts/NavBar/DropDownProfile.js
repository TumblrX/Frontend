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
import { Redirect } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ListItem from '../../NewPost/ListItem';

const DropDownProfile = function (props) {

  const [logoutt , setLogoutt] = useState(false);
  const userBlogs = useSelector((state) => state.userBlogs.userBlogs);
  const logout = function (){
    localStorage.removeItem('userId');
    localStorage.removeItem('InfinteScrolling');
    localStorage.removeItem('handle');
    localStorage.removeItem('blogs');
    localStorage.removeItem('blog1');
    localStorage.removeItem('token');
    setLogoutt(true);
    console.log('removed');
  }
  return (
    <>
    {logoutt && (
      <Redirect to="/" />
    )}
    {!logoutt && (

      <div className={classes.profile}>
      <div className={classes.account}>
        <span>Account</span>
        <a href="/" onClick={logout}>Log out</a>
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
        <NavLink to="/new/blog">+ New</NavLink>
      </div>
      <ul className={classes['tumblrs-list']}>
        { 
          userBlogs.map((blog, index) =>{
            return <NavLink to={`/blog/${blog.handle}`}><ListItem userBlog={blog}/></NavLink>
          })          
        }
      </ul>
      <div className={classes.links}>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/apps">Apps</NavLink>
        <NavLink to="/policy/terms-of-services">Legal</NavLink>
        <NavLink to="/policy/privacy">Privacy</NavLink>
      </div>
    </div>

  )}
        </>
  );
};

export default DropDownProfile;
