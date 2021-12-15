import React, { useEffect } from 'react';
import styles from './Followers.module.scss';
import useHandler from './FollowersController';
import { useSelector } from 'react-redux';
import fetchFollowers from './FollowersService';
import Loading from '../Loading/Loading';
/**
 * Component to render blog follower page
 * @author Ahmed Mahmoud
 *
 * @component
 *
 */
const Followers = function () {
  const {
    showFollowers, handleChange, handleSubmit,
  } = useHandler();
  const {
    numOfFollowers, searchValue, searchResult, isReady, searchDone, prevSearchValue,
  } = useSelector((state) => state.blogfollowers);
  useEffect(() => {
    fetchFollowers();
  }, []);
  return (
    <div className={styles.followersContaine}>
      <main className={styles.main}>
        <div className={styles.bar}>
          <h1 className={styles.h1}>
            {numOfFollowers}
            {' '}
            Followers
          </h1>
          <form className={styles.form} onSubmit={handleSubmit}>
            <input
              type="text"
              className={styles.input}
              autoComplete="off"
              maxLength="33"
              placeholder="Search your followers"
              onChange={handleChange}
            />
          </form>
        </div>
        <span className={styles.SearchSection} id="SearchSection">
          <span className={styles.sSpan1}>
            <span className={styles.sSpan2}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={`//${searchValue}.tumblr.com`}
                role="link"
                className={styles.sa}
              >
                {searchDone ? searchValue : prevSearchValue}
              </a>
            </span>
          </span>
          {' '}
          {searchResult}
          {' '}
          you.
        </span>
        <section className={styles.section}>
          {isReady ? showFollowers() : <Loading /> }
        </section>
      </main>
    </div>
  );
};

export default Followers;
