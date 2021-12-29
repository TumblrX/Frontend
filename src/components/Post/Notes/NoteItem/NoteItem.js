/**
 * Component to render a single Note in the post notes.
 * @author Yousef Elshabrawy
 *
 * @component
 */
import React from 'react';
import { AiFillHeart } from 'react-icons/ai';
import { HiRefresh } from 'react-icons/hi';
import { FaComment } from 'react-icons/fa';
import { IconContext } from 'react-icons';

import { Link } from 'react-router-dom';
import defaultAvatar from '../../../../assets/Images/avatar.png';
import classes from './NoteItem.module.scss';
const NoteItem = ({note}) => {
  const {blogId, type} = note;
  return (
    <li  className={classes.item}>
      <Link to={`blog/view/${blogId.handle}`}>
        <img src={blogId.avatar!=='none'? blogId.avatar: defaultAvatar} alt='avatar' className={blogId.isAvatarCircle ? classes.cavatar : classes.avatar }/>
        <span className={classes.icon}>
          {type==='reblog'? 
          <IconContext.Provider value={{ color: '#00CF35' }}>
            <HiRefresh/>
          </IconContext.Provider> : type==='like' ? 
          <IconContext.Provider value={{ color: 'red' }}>
            <AiFillHeart/>
          </IconContext.Provider> :
          <IconContext.Provider value={{ color: '#00B8FF' }}>
            <FaComment/>
          </IconContext.Provider>
          }
        </span>
      </Link>
      <div className={classes.handle}>
        {type!=='comment'? <p>{blogId.handle}</p>: 
        <div className={classes.comment}>
          <Link to={`blog/view/${blogId.handle}`} className={classes.handle}>
            <p>{blogId.handle}</p> 
          </Link>
          <p className={classes.commentText}>{note.commentText}</p>
        </div>
        }
      </div>
    </li>
  );
};

export default NoteItem;