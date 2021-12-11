import React, { useEffect } from 'react';
import styles from './Followers.module.scss';
import useHandler from './FollowersController';
import { useSelector } from 'react-redux';
import fetchFollowers from './FollowersService';

const Followers = function () {
  useEffect(() => {
    fetchFollowers();
  }, []);
  const { showFollowers } = useHandler();
  const { numOfFollowers } = useSelector((state) => state.blogfollowers);
  return (
    <div className={styles.followersContaine}>
      <main className={styles.main}>
        <div className={styles.bar}>
          <h1 className={styles.h1}>
            {numOfFollowers}
            {' '}
            Followers
          </h1>
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
        <section className={styles.section}>
          {showFollowers()}
        </section>
      </main>
    </div>
  );
};

export default Followers;
