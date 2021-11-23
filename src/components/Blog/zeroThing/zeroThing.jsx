/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import styles from './zeroThing.module.scss';

function zerothing({ page }) {
  return (
    <main className={styles.main}>
      <div className={styles.div}>
        <h1 className={styles.h1}>
          0
          {page}
          s
        </h1>
      </div>
      <section className={styles.section} />
    </main>
  );
}

export default zerothing;
