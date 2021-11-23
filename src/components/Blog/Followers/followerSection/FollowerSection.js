import React from 'react';
import styles from './FollowerSection.module.scss';

const FollowerSection = function ({ blogURL }) {
  return (
    <div className={styles.container}>
      <a
        href={blogURL}
        target="_blank"
        rel="noopener noreferrer"
        role="link"
        className={styles.a}
      />
      <div className={styles.side} />
      <div className={styles.sideSelect} />

    </div>
  );
};

export default FollowerSection;
