/* eslint-disable react/no-array-index-key */
import React from 'react';
import styles from './Posts.module.scss';
/**
 * this function is to show the fetched posts in post page in blog
 * @function checkIfStringHasSpecialChar
 * @param {object} posts
 * @param {number} pageNum
 * @param {bool}  isInfinte
 * @return {JSX} return jsx of posts to be rendered in the posts page
 */
const showPosts = (posts, pageNum, isInfinte) => {
  let firstPost;
  let lastPost;
  if (isInfinte) {
    firstPost = 0;
    lastPost = posts.length;
  } else {
    lastPost = pageNum * 10;
    firstPost = lastPost - 10;
  }
  return (
    // eslint-disable-next-line block-scoped-var
    posts.slice(firstPost, lastPost).map((post, index) => (
      <div className={`${styles.post} ${styles.row}`} key={index} data-testid={`testPost${index}`}>
        <div className={styles.logo} />
        <div className={styles.postDatailes}>
          <div>
            {' '}
            id =
            {post.id}
          </div>
          <div>
            {' '}
            title=
            {post.title}
          </div>
          <div>
            {' '}
            datatime=
            {post.datetime}
          </div>
          <div>
            {' '}
            body =
            {post.body}
          </div>
        </div>
      </div>
    ))
  );
};
export default showPosts;
