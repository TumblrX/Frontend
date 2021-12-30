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
        <span>{localStorage.getItem('handle')}</span>
        <span> notifications ....  </span>
      </div>
      <div>
      {
        notifications.length >0 ? (
            notifications?.map((noti, index) =>(
              <div className={classes.conversation} key={index} >
                <div className={classes.ConversationAvatar} >
                  { 
                    noti.fromBlog?.avatar === 'none' ? ( 
                      <img src={noti.fromBlog.avatar} alt="icon" className={classes.avatar} /> 
                    ) : noti.fromBlog?.avatar.includes("http") ? (
                      <img src={`${noti.fromBlog.avatar}`} alt="icon" className={classes.avatar} />
                    ) : (
                      <img src={`${process.env.REACT_APP_API_URL}/${noti.fromBlog.avatar}`} alt="icon" className={classes.avatar} />
                    )
                  }
                </div>
                <div className={classes.title}>
                  <h4 className={classes.h4}>   {noti.fromBlog.title} </h4>
                  <p  className={classes.p}>   
                    {noti.type}
                  </p>
                </div>
              </div>
            ))
        ) : (
        <div className={classes.footer}>
          <GiElectric />
            <span>
              Check out this tab when you make a post to see Likes, Reblogs,
              and new followers.
            </span>
          </div>
        )
      }
      </div>
    </div>
  );
};

export default DropDownActivity;
