/* eslint-disable */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable prefer-const */
/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-empty */
/* eslint-disable max-len */
import React from 'react';
import classes from './Post.module.scss';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { IconContext } from 'react-icons';
import { BsThreeDots } from 'react-icons/bs';
import { FaRegComment, FaRegHeart } from 'react-icons/fa';
import { IoGitCompareSharp } from 'react-icons/io5';
import { RiDeleteBinLine, RiShareForwardLine, RiEdit2Line } from 'react-icons/ri';
import PostController from './PostController';
import postContentToJsx from './PostContentToJsx';

const Post = function ({ data }) {
  const { blogAttribution, commentsCount, content, id, isReblogged, likesCount, notes, notesCount, postType, publishedOn, reblogsCount, state } = data;
  const { reblogPostHandler, deletePostHandler } = PostController();
  const userBlogs = useSelector(state => state.userBlogs.userBlogs);
  console.log(userBlogs.findIndex((blog) => { return blog.id === blogAttribution._id }));
  return (
    <div className={classes.post}>
      <header className={classes.header}>
        <div className={classes.blogName}>
          <Link to={`/blog/view/${blogAttribution.title}`}>{blogAttribution.title}</Link>
        </div>
        <div className={classes.icon}>
          {/* <BsThreeDots /> */}
        </div>
      </header>
      <div className={classes.content}>
        {postContentToJsx(content)}
      </div>
      <footer className={classes.footer}>
        <div className={classes.notes}>
          0 notes
        </div>
        <div className={classes.icons}>
          <IconContext.Provider value={{ size: '1.3rem' }}>
            <div>
              <RiShareForwardLine />
            </div>
            <div>
              <FaRegComment />
            </div>
            {/* <div onClick={reblogPostHandler.bind(this, data)}> */}
            <div>
              <IoGitCompareSharp />
            </div>
            <div>
              <FaRegHeart />
            </div>
            { userBlogs.findIndex((blog) => { return blog.id === blogAttribution._id }) !== -1 && 
            (<div onClick={ deletePostHandler.bind(this, id) }>
              <RiDeleteBinLine />
            </div>)}

            {/* <div>
              <RiEdit2Line />
            </div> */}
          </IconContext.Provider>
        </div>
      </footer>
    </div>
  );
};

export default Post;
