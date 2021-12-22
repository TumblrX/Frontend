/* eslint-disable no-unused-vars */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import styles from './Dashboard.module.scss';
import Post from '../../components/Post/Post';
import noAvatar from '../../assets/Images/avatar.png';
import { handleSideView, handleExit,  handleFollow } from './DashBoardService';


const showPosts = (posts, pageNum, isInfinte, pageNumPosts) => {
  return posts.map((post, index) => (
    <div className={`${styles.post} ${styles.row}`} key={index}>
      <div className={styles.logo}>
        <img src={noAvatar} alt="noavatar" className={styles.avatar} />
        {/* <img src={noAvatar} alt="posts.blogAttribution.avatar" className={styles.avatar} /> */}
      </div>
      <div className={styles.postDatailes}>
        <Post data={post} />
      </div>
    </div>
  ));
};

const getOnePost = (radar) => {
  const i = Math.floor(Math.random() * (radar.length - 1));
  const post = radar[i];
  // console.log('onepost -->', post)
  return (
    <div className={`${styles.post} `}>
      <div className={styles.logo} />
      <div className={styles.postDatailes}>
        <Post data={post} />
      </div>
    </div>
  );
};




const showBlogsForYou = (exploreBlogs) => {
  return exploreBlogs.map((blog, index) => (
    <div className={`${styles.exploreBlog} ${styles.row}`} key={index}>
      <div className={styles.blogAvatar} id={`side${index}`} onClick={() => handleSideView(`side${index}`)}>
        <img src={noAvatar} alt="avatar" className={styles.avatar} />
        {/* <img src={blog.avatar} alt="avatar" className={styles.avatar} /> */}
      </div>
      <div className={styles.blogTitle} >
        <h4 className={styles.h4}> { `post --> ${blog.handle}`} </h4>
      </div>
      <div className={styles.blogFollow} id={`follow${index}`} onClick={() => handleFollow(index,blog._id)}>
        <p className={styles.follow}> follow </p>
      </div>
      <div className={styles.blogExit} id={`exit${index}`} onClick={(e)=> handleExit(`exit${index}`)}>
        <p className={styles.exit}> &times; </p>
      </div>
    </div>
  ));
};
  
export { showPosts, getOnePost, showBlogsForYou };
