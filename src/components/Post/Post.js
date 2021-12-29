/**
 * Component to render the Post in all the pages
 * @author Yousef Elshabrawy
 *
 * @component
 */
/* eslint-disable no-lone-blocks */
/* eslint-disable no-param-reassign */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable prefer-const */
/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-empty */
/* eslint-disable max-len */
import React, {Fragment, useState, useEffect} from 'react';
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
import Notes from './Notes/Notes';

const Post = function ({ data, place }) {
  const { title, tags, blogAttribution, commentsCount, content, id, isReblogged, liked, likesCount, notes, notesCount, postType, publishedOn, reblogsCount, state } = data;
  const [notesIsShown, setNotesIsShown] = useState(false);
  const [notesCounter, setNotesCounter] = useState();
  const { reblogPostHandler, likePostHandler, deletePostHandler, deleteBlogPostHandler, deleteDraftHandler, postDraftHandler, deleteLikedHandler } = PostController();
  const userBlogs = useSelector(state => state.userBlogs.userBlogs);
  const [ isLiked, setIsLiked ] = useState(liked);
  useEffect(() => {
    setNotesCounter(notesCount);
  }, []);
  const likeClickHandler = () =>{
    if(isLiked){
      setNotesCounter(x=>x-1);
    }else {
      setNotesCounter(x=>x+1);
    }
    likePostHandler(id, isLiked)
    setIsLiked(!isLiked);
  };
  const reblogClickHandler =()=>{
    reblogPostHandler(id);
    setNotesCounter(x=>x+1);
  };
  const openNotesClickHandler = () =>{
    setNotesIsShown(true);
  };
  const closeNotesClickHandler = (e) =>{
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    setNotesIsShown(false);
  };
  const increamentNotesCount = () =>{
    setNotesCounter(x=>x+1);
    // console.log(notesCounter);
  };
  let postJsx = [];
  if(!isReblogged){
    postJsx.push(
      <Fragment>
        <header className={classes.header}>
          <div className={classes.blogName}>
            <Link to={`/blog/${blogAttribution.handle}`}>{blogAttribution.handle}</Link>
          </div>
          <div className={classes.icon}>
            {/* <BsThreeDots /> */}
          </div>
        </header>
        <div className={classes.content}>
          <h1 className={classes.title}>{title}</h1>
          {postContentToJsx(content)}
          <p>{tags.map((tag,index) => <span key={index} className={classes.tag}>{`#${tag}`}</span>)}</p>
        </div>
        {state ==='draft' ? (
          <footer className={classes.footer}>
          <div className={classes.draftIcons}>
            <button className={classes.draftButton} onClick={postDraftHandler.bind(this,id)}>
              Post
            </button>
            <IconContext.Provider value={{ size: '1.3rem' }}>
              <div onClick={ deleteDraftHandler.bind(this, id) }>
                <RiDeleteBinLine />
              </div>
            </IconContext.Provider>
          </div>
          </footer>
        ) : (
          <footer className={classes.footer}>
          <div className={classes.notes} onClick={openNotesClickHandler}>
            {notesCounter} notes
          </div>
          <div className={classes.icons}>
            <IconContext.Provider value={{ size: '1.3rem' }}>
              {/* <div>
                <RiShareForwardLine />
              </div> */}
              <div onClick={openNotesClickHandler}>
                <FaRegComment />
                {notesIsShown && <Notes increamentNotesCount={increamentNotesCount} closeHandler={closeNotesClickHandler} postId={id}/>}
              </div>
              <div onClick={reblogClickHandler}>
                <IoGitCompareSharp />
              </div>
              <IconContext.Provider value={ isLiked ? { color: 'red' } : {}}>
                <div onClick={likeClickHandler}>
                  <FaRegHeart />
                </div>
              </IconContext.Provider>
              { (userBlogs.findIndex((blog) => { return blog.id === blogAttribution._id }) !== -1) && 
              (<div onClick={ place ==='blog'?  deleteBlogPostHandler.bind(this, id) : place === 'likes' ? deleteLikedHandler.bind(this, id) : deletePostHandler.bind(this, id) }>
                <RiDeleteBinLine />
              </div>)}
            </IconContext.Provider>
          </div>
          </footer>
        )}
      </Fragment>
    );
  }else {
    // Reblogged Post
    const {trail} = data;
    // The Post header
    postJsx.push(
      <header className={classes.header}>
        <div className={classes.blogName}>
          <Link to={`/blog/${blogAttribution.handle}`}>{blogAttribution.handle}</Link>
          <IconContext.Provider value={{ color: '#555' }}>
            <IoGitCompareSharp/>
          </IconContext.Provider>
          <Link to={`/blog/${trail[0].blogAttribution.handle}`}>{trail[0].blogAttribution.handle}</Link>
        </div>
        <div className={classes.icon}>
          {/* <BsThreeDots /> */}
        </div>
      </header>
    );
    // Start of the reblogged post
    trail.forEach(post => {
      const {tags, title, blogAttribution, commentsCount, content, id, isReblogged, liked, likesCount, notes, notesCount, postType, publishedOn, reblogsCount, state } = post;
      if(content.length!==0){
        postJsx.push(<div className={classes.br}/>);
        // The Header of the reblogged post
        postJsx.push(
          <header className={classes.header}>
            <div className={classes.blogName}>
              <img src={`http://tumblrx.me:3000/${blogAttribution.avatar}`} className={classes.avatar}/>
              <Link to={`/blog/${blogAttribution.handle}`}>{blogAttribution.handle}</Link>
            </div>
          </header>
        );
        // The content of the reblogged post 
        postJsx.push(
          <div className={classes.content}>
          <h1 className={classes.title}>{title}</h1>
            {postContentToJsx(content)}
            <p>{tags.map((tag,index) => <span key={index} className={classes.tag}>{`#${tag}`}</span>)}</p>
          </div>
        )
        postJsx.push(<div className={classes.br}/>);
      }
    });
    // End of the reblogged post
    if(content.length!==0){
      // Start of the header of the added content
      postJsx.push(
        <header className={classes.header}>
        <div className={classes.blogName}>
          <img src={`http://tumblrx.me:3000/${blogAttribution.avatar}`} className={classes.avatar}/>
          <Link to={`/blog/${blogAttribution.handle}`}>{blogAttribution.handle}</Link>
        </div>
        </header>
      );
      // Start of the content of the added content
      postJsx.push(
        <div className={classes.content}>
        <h1 className={classes.title}>{title}</h1>
          {postContentToJsx(content)}
          <p>{tags.map((tag,index) => <span key={index} className={classes.tag}>{`#${tag}`}</span>)}</p>
        </div>
      )
    }
    {state==='draft' ?
      postJsx.push(
        <footer className={classes.footer}>
          <div className={classes.draftIcons}>
            <button className={classes.draftButton} onClick={postDraftHandler.bind(this,id)}>
              Post
            </button>
            <IconContext.Provider value={{ size: '1.3rem' }}>
              <div onClick={ deleteDraftHandler.bind(this, id) }>
                <RiDeleteBinLine />
              </div>
            </IconContext.Provider>
          </div>
        </footer>
      ) : postJsx.push(
      <footer className={classes.footer}>
        <div className={classes.notes} onClick={openNotesClickHandler}>
          {notesCounter} notes
        </div>
        <div className={classes.icons}>
          <IconContext.Provider value={{ size: '1.3rem' }}>
            {/* <div>
              <RiShareForwardLine />
            </div> */}
            <div onClick={openNotesClickHandler}>
                <FaRegComment />
                {notesIsShown && <Notes increamentNotesCount={increamentNotesCount} closeHandler={closeNotesClickHandler} postId={id}/>}
            </div>
            <div onClick={reblogPostHandler.bind(this, id)}>
              <IoGitCompareSharp />
            </div>
            <IconContext.Provider value={ isLiked ? { color: 'red' } : {}}>
              <div onClick={likeClickHandler}>
                <FaRegHeart />
              </div>
            </IconContext.Provider>
            { userBlogs.findIndex((blog) => { return blog.id === blogAttribution._id }) !== -1 && 
            (<div onClick={place ==='blog'? deleteBlogPostHandler.bind(this, id) : place === 'likes' ? deleteLikedHandler.bind(this, id) : deletePostHandler.bind(this, id) }>
              {/* {console.log(place)} */}
              <RiDeleteBinLine />
            </div>)}
          </IconContext.Provider>
        </div>
      </footer>
      )
    }
  }
  return (
    <div className={classes.post}>
      {postJsx}
    </div>
  );
};

export default Post;
