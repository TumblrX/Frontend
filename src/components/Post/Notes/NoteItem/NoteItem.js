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
import { RiDeleteBinLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import classes from './NoteItem.module.scss';
const NoteItem = ({note, deleteCommentHandler}) => {
  const {blogId, type } =note;
  return (
    <li  className={classes.item}>
      <Link to={`blog/${blogId.handle}`}>
        <img src={`http://tumblrx.me:3000/${blogId.avatar}`} alt='avatar' className={blogId.isAvatarCircle ? classes.cavatar : classes.avatar }/>
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
        {type!=='comment'? 
        <Link to={`blog/${blogId.handle}`} className={classes.handle}>
            <p>{blogId.handle}</p> 
          </Link>: 
        <div className={classes.comment}>
          <div className={classes.commentHandle}>
            <Link to={`blog/${blogId.handle}`} className={classes.handle}>
              <p>{blogId.handle}</p> 
            </Link>
            { localStorage.getItem('userId') === blogId.owner && 
            <span className={classes.dots} onClick={deleteCommentHandler.bind(this, note._id)}>
              <IconContext.Provider value={{ color: '#FF0000' }}>
                <RiDeleteBinLine/>
              </IconContext.Provider>
            </span>}  
          </div>
          <p className={classes.commentText}>{note.commentText}</p>
        </div>
        }
      </div>
    </li>
  );
};

export default NoteItem;