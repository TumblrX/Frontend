/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import styles from './nothingAvailable.module.scss';

function nothingAvailable({ page }) {
  return (
    <div className={styles.container}>
      <svg
        viewBox="0 0 112 112"
        className={styles.svg}
      >
        <path
          d="M25 8h31v29.5h31v41.015l-62-62V8zm0 17L13.243 13.243 9 17.485l16 16V95h61.515l8.752 8.752 4.243-4.242L87 87 25 25zm37 7V8l25 24H62z"
        />
      </svg>
      No
      {' '}
      {page}
      s available
      <div className={styles.learn}>
        <a
          href="https://tumblr.zendesk.com/hc/en-us/articles/231453708-Making-a-post"
          target="_blank"
          className={styles.a}
          rel="noreferrer"
        >
          Learn how to make a
          {' '}
          {page}
          .
        </a>
      </div>
    </div>
  );
}

export default nothingAvailable;
