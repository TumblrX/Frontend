/* eslint-disable no-unused-vars */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import styles from './Dashboard.module.scss';
import Post from '../../components/Post/Post';
import logo from '../../assets/Images/avatar.png';

const showPosts = (posts, pageNum, isInfinte, pageNumPosts) => {
  let firstPost;
  let lastPost;
  if (isInfinte) {
    firstPost = 0;
    lastPost = posts.length;
  } else {
    lastPost = pageNum * pageNumPosts;
    firstPost = lastPost - pageNumPosts;
  }
  return posts.slice(firstPost, lastPost).map((post, index) => (
    <div className={`${styles.post} ${styles.row}`} key={index}>
      <div className={styles.logo}>
        <img src={logo} alt="avatar" className={styles.avatar} />
      </div>
      <div className={styles.postDatailes}>
        <Post data={post} />
      </div>
    </div>
  ));
};

const getOnePost = (posts) => {
  const i = Math.floor(Math.random() * (posts.length - 1));
  const post = posts[i];
  return (
    <div className={`${styles.post} `}>
      <div className={styles.logo} />
      <div className={styles.postDatailes}>
        <Post data={post} />
      </div>
    </div>
  );
};
const showBlogsForYou = (exploreBlogs) => exploreBlogs.map((blog, index) => (
  <div className={`${styles.exploreBlog} ${styles.row}`} key={index}>
    <div className={styles.blogAvatar}>
      avatar
    </div>
    <div className={styles.blogTitle}>
      <h4> Blog Title </h4>
      <p className={styles.p}> Fav1 Fav2 Fav3 </p>
    </div>
    <div className={styles.blogFollow}>
      <button className={styles.follow}> Follow </button>
    </div>
    <div className={styles.blogExit}>
      <button className={styles.exit}> &times; </button>
    </div>
  </div>
));
export { showPosts, getOnePost, showBlogsForYou };
