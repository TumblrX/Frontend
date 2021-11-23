import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './DropDownActivity.module.scss';
import { GiElectric} from 'react-icons/gi';

// eslint-disable-next-line no-unused-vars
const DropDownActivity = function (props) {
  return (
    <div className={classes.activity}>
      <div className={classes.header}>
        <span>username</span>
        <NavLink to="/blog/username/activity">---------</NavLink>
      </div>
      <div className={classes.content}>
        <NavLink to="/dashboard">All</NavLink>
        <NavLink to="/dashboard">Mentions</NavLink>
        <NavLink to="/dashboard">Reblogs</NavLink>
        <NavLink to="/dashboard">Replies</NavLink>
      </div>
      <div className={classes.footer}>
        <GiElectric />
        <span>
          Check out this tab when you make a post to see Likes, Reblogs,
          and new followers.
        </span>
      </div>
    </div>
  );
};

export default DropDownActivity;
