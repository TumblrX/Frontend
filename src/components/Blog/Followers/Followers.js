import React from 'react';
import styles from './Followers.module.scss';

const Followers = function () {
  return (
    <main className={styles.main}>
      <div className={styles.bar}>
        <h1 className={styles.h1}>n Followers</h1>
        <form className={styles.form}>
          <input
            type="text"
            className={styles.input}
            autoComplete="off"
            maxLength="33"
            placeholder="Search your followers"
          />
        </form>
      </div>
      <section className={styles.section} />
    </main>
  );
};

export default Followers;
