import React, { useState, useEffect } from 'react';
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
import { getLikesCount } from './ListService';

// eslint-disable-next-line no-unused-vars
const List = function (props) {
  const [counts, setCounts] = useState({});
  useEffect(() => {
    const fetchNavbarCounts = async () => {
    setCounts(await getLikesCount());
    }
    fetchNavbarCounts();
  }, [])
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
          <div className={classes.text}>
            <AiFillHome />
            Dashboard
          </div>
          </NavLink>
          <NavLink to="/explore/recommended-for-you">
          <div className={classes.text}>
            <MdExplore />
            Explore
          </div>
          </NavLink>
          <NavLink to="/inbox">
          <div className={classes.text}>
            <IoIosMail />
            Inbox
          </div>
          </NavLink>
          <NavLink to="/messaging">
          <div className={classes.text}>
            <RiChatSmile3Fill />
            Messaging
          </div>
          </NavLink>
          <NavLink to="/blog.username/activity">
          <div className={classes.text}>
            <GiElectric />
            Activity
          </div>
          </NavLink>
          <div className={classes.likes}>
          <NavLink to="/likes">
            <div className={classes.text}>
            <AiFillHeart />
            Likes
            </div>
            <span>{counts.likesCount}</span>
          </NavLink>
        </div>
        <div className={classes.following}>
          <NavLink to="/following">
          <div className={classes.text}>
            <RiUserFollowFill />
            Following
            </div>
            <span>{counts.followingCount}</span>
          </NavLink>
        </div>
          <NavLink to="/settings">
          <div className={classes.text}>
            <FiSettings />
            Setting
            </div>
          </NavLink>
          <NavLink to="/help">
          <div className={classes.text}>
            <IoMdHelpCircle />
            Help
            </div>
          </NavLink>
          <NavLink to="/">
          <div className={classes.text}>
            <BsFillPaletteFill />
            Change Palette
            </div>
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
