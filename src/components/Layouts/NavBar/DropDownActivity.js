import React from 'react';
import { NavLink } from 'react-router-dom';
import { GiElectric } from 'react-icons/gi';
import classes from './DropDownActivity.module.scss';
import { useSelector } from 'react-redux';
// eslint-disable-next-line no-unused-vars
const DropDownActivity = function (props) {
  const {
    notifications,
  } = useSelector((state) => state.navNotifications);
  return (
    <div className={classes.activity}>
      <div className={classes.header}>
        <span>username</span>
        <NavLink to="/blog/username/activity">---------</NavLink>
      </div>
      <div className={classes.content}>
        <NavLink to="/dashboard">All</NavLink>
        <NavLink to="/dashboard">Reblogs</NavLink>
        <NavLink to="/dashboard">Follow</NavLink>        
      </div>
      <div>
      {notifications.length 
          && notifications.map(noti =>{
            return <div> <img  alt ='iiiii' src={noti.fromBlog.avatar} style={{width:'10px'}} /> {noti.fromBlog.title} {noti.type}     </div>
          }) 
        }
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
