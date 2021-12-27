/* eslint-disable no-else-return */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import styles from './Drafts.module.scss';
import Post from '../../Post/Post';
/**
 * this function is to show the fetched drafts in drafts page in blog
 * @function showDrafts
 * @param {object} drafts
 * @param {number} pageNum
 * @param {bool}  isInfinte
 * @return {JSX} return jsx of drafts to be rendered in the drafts page
 */

const showDrafts = (drafts, pageNum, isInfinte) => {
  let firstPost;
  let lastPost;
  if (isInfinte) {
    firstPost = 0;
    lastPost = drafts.length;
  } else {
    lastPost = pageNum * 10;
    firstPost = lastPost - 10;
  }
  return (
    // eslint-disable-next-line block-scoped-var
    drafts.slice(firstPost, lastPost).map((draft, index) => (
      <div className={`${styles.post} ${styles.row}`} key={index} data-testid={`testPost${index}`}>
        <div className={styles.logo}>
        <object data="https://assets.tumblr.com/images/default_avatar/cone_open_128.png" width="64" height="64">
          <img src={draft.blogAttribution.avatar} alt="no avatar" className={styles.limg} />
        </object>
        </div>
        <div className={styles.postDatailes}>
          <Post data={draft} />
        </div>
      </div>
    ))
  );
};
export default showDrafts;
