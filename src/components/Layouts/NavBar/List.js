import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaPencilAlt } from 'react-icons/fa';
import { MdExplore } from 'react-icons/md';
import { IoIosMail, IoMdHelpCircle } from 'react-icons/io';
import { RiChatSmile3Fill, RiUserFollowFill } from 'react-icons/ri';
import { GiElectric } from 'react-icons/gi';
import { FiSettings } from 'react-icons/fi';
import { AiFillHome, AiFillHeart } from 'react-icons/ai';
import { BsFillPaletteFill } from 'react-icons/bs';
import classes from './List.module.scss';

// eslint-disable-next-line no-unused-vars
const List = function (props) {
  return (
    <div className={classes.list}>
      <div className={classes['new-post']}>
        <NavLink to="/new/text">
          <FaPencilAlt />
          Create a Post
        </NavLink>
      </div>
      <div className={classes['list-icons']}>
        <ul>
          <NavLink to="/dashboard">
            <AiFillHome />
            Dashboard
          </NavLink>
          <NavLink to="/explore/recommended-for-you">
            <MdExplore />
            Explore
          </NavLink>
          <NavLink to="/inbox">
            <IoIosMail />
            Inbox
          </NavLink>
          <NavLink to="/messaging">
            <RiChatSmile3Fill />
            Messaging
          </NavLink>
          <NavLink to="/blog.username/activity">
            <GiElectric />
            Activity
          </NavLink>
          <NavLink to="/likes">
            <AiFillHeart />
            Likes
          </NavLink>
          <NavLink to="/following">
            <RiUserFollowFill />
            Following
          </NavLink>
          <NavLink to="/settings">
            <FiSettings />
            Setting
          </NavLink>
          <NavLink to="/help">
            <IoMdHelpCircle />
            Help
          </NavLink>
          <NavLink to="/">
            <BsFillPaletteFill />
            Change Palette
          </NavLink>
        </ul>
      </div>

      <div className={classes['blog-word']}>
        <p>Blogs</p>
      </div>
      <div className={classes.blogs}>
        <div className="username">Username</div>
        <ul>
          <NavLink to="/blog/username">Posts</NavLink>
          <NavLink to="/blog/username/followers">Followers</NavLink>
          <NavLink to="/blog/username/activity">Activity</NavLink>
          <NavLink to="/blog/username/drafts">Drafts</NavLink>
          <NavLink to="/blog/username/queue">Queue</NavLink>
          <NavLink to="/settings/blog/username">Edit Apperance</NavLink>
        </ul>
      </div>
      <div className={classes.links}>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/apps">Apps</NavLink>
        <NavLink to="/policy/terms-of-services">Legal</NavLink>
        <NavLink to="/policy/privacy">Privacy</NavLink>

      </div>
    </div>
  );
};

export default List;
