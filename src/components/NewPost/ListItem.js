import React from 'react';
import classes from './ListItem.module.scss';
import defaultAvatar from '../../assets/Images/avatar.png';
const ListItem = ({userBlog}) => {
  return (
    <div className={classes.item} value={userBlog.id}>
      <div className={classes.avatar} value={userBlog.id}>
        {userBlog.avatar === 'none' ? <img src={defaultAvatar} alt='avatar'value={userBlog.id}/> : <img src={userBlog.avatar} alt='avatar'value={userBlog.id}/>}
      </div>
      <div className={classes.text}value={userBlog.id}>
        {userBlog.handle}
      </div>
    </div>
  );
};

export default ListItem;