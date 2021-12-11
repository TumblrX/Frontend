/* eslint-disable react/jsx-filename-extension */
/* eslint-disable func-names */
import React from 'react';
import styles from './Loading.module.scss';
/**
 * Component to render the loading animation
 * @author Ahmed Mahmoud
 *
 * @component
 *
 */
const Loading = function () {
  return (
    <div className={styles.container}>
      <p className={styles.block} />
      <p className={styles.block} />
      <p className={styles.block} />
    </div>
  );
};

export default Loading;
