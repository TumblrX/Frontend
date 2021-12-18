/* eslint-disable array-callback-return */
/* eslint-disable no-lone-blocks */
/* eslint-disable no-console */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable no-else-return */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import styles from './Dashboard.module.scss';
import Post from '../../components/Post/Post';

const showPosts = (posts, pageNum, isInfinte) => {
// console.log('show posts is called --> ', posts);
// console.log('show posts is called --> ', posts.length);
// let firstPost;
// let lastPost;
// if (isInfinte) {
//   firstPost = 0;
//   lastPost = posts.length;
// } else {
//   lastPost = pageNum * 10;
//   firstPost = lastPost - 10;
// }
// eslint-disable-next-line block-scoped-var
// posts.slice(0, 2).map((post, index) => (
// if (typeof posts !== 'undefined') {
  console.log('show posts is called');
  posts.map((post, index) => {
    // console.log('index ', index);
    // console.log('post ', post);
    // console.log('index -->', index);
    <div className={`${styles.post} ${styles.row}`} key={index} data-testid={`testPost${index}`}>
      <div className={styles.logo} />
      <div className={styles.postDatailes}>
        <Post data={post} />
      </div>
    </div>;
  });
};

// } else {
//   return (
//     <div />
//   );
// }

const getOnePost = (posts) => {
  // const i = Math.floor(Math.random() * (posts.length - 1));
  const i = 0;
  const post = posts[i];
  // if (typeof post !== 'undefined') {
  //   console.log('one post', post);
  //   return (
  //     <div className={`${styles.post}`}>
  //       <div className={styles.logo} />
  //       <div className={styles.postDatailes}>
  //         <Post data={post} />
  //       </div>
  //     </div>
  //   );
  // } else {
  //   return (
  //     <div />
  //   );
  // }

  // if (post) {
  //   return (
  //     <div className={`${styles.post}`}>
  //       <div className={styles.logo} />
  //       <div className={styles.postDatailes}>
  //         <Post data={post} />
  //       </div>
  //     </div>
  //   );
  // } else {
  //   return (
  //     <div />
  //   );
  // }
};
export { showPosts, getOnePost };
