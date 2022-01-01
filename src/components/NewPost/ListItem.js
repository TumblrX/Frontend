/**
 * Component to render a single user blog item in the new post editor
 * @author Yousef Elshabrawy
 *
 * @component
 */
import React from 'react';
import classes from './ListItem.module.scss';
const ListItem = ({userBlog}) => {
  return (
    <div className={classes.item} value={userBlog.id}>
      <div className={classes.avatar} value={userBlog.id}>     
        {           
          userBlog?.avatar === 'none' ? ( 
            <img src='https://assets.tumblr.com/images/default_avatar/sphere_open_128.png' alt="noavatar" value={userBlog.id} /> 
          ) :userBlog?.avatar.includes("http") ? (
            <img src={`${userBlog.avatar}`} alt="avatar" value={userBlog.id} />
          ):(
            <img src={`${process.env.REACT_APP_API_URL}/${userBlog.avatar}`} alt="avatar" value={userBlog.id} />
          )
        }
      </div>
      <div className={classes.text}value={userBlog.id}>
        {userBlog.handle}
      </div>
    </div>
  );
};

export default ListItem;