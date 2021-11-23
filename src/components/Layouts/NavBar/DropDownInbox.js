import React from 'react';
import { NavLink } from 'react-router-dom';
import { RiChatSmile3Fill } from 'react-icons/ri';
import classes from './DropDownInbox.module.scss';

// eslint-disable-next-line no-unused-vars
const DropDownInbox = function (props) {
  return (
    <div className={classes.smile}>
      <div className={classes.header}>
        <span>username</span>
        <NavLink to="/">New Message</NavLink>
      </div>
      <div className={classes.content}>
        <RiChatSmile3Fill />
        <span>Talk to tumblr</span>

      </div>
    </div>
  );
};

export default DropDownInbox;
