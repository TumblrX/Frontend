/* eslint-disable react/jsx-filename-extension */
import React, {useEffect} from 'react';
import styles from './FollowingMain.module.scss';
import { fetchFollowing } from './FollowingServices';
import { useSelector } from 'react-redux';
import useFollowingHandler from './FollowingController';
import Loading from '../../Blog/Loading/Loading';

const FollowingMain = () => {
    const {
        showFollowing, handleChange, handleSubmit,
      } = useFollowingHandler();
      const {
        numOfFollowing, searchValue, searchResult, isReady, searchDone, prevSearchValue,
        newFollowing, disable,  
      } = useSelector((state) => state.following);
      useEffect(() => {
        fetchFollowing();
      }, [newFollowing]);
    return (
        <div className={styles.FollowingMain}>
            <main className={styles.main}>
                <h1 className={styles.h1}>
                    {numOfFollowing}
                    {' '}
                    Following
                </h1>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <input
                    type="text"
                    className={styles.input}
                    autoComplete="off"
                    maxLength="33"
                    placeholder="Enter Blog Handle"
                    onChange={handleChange}
                    />
                    <button className={styles.button} aria-label="Follow" id='followButton' disabled={disable}>
                        <span className={styles.span} tabIndex="-1">
                        Follow
                        </span>
                    </button>
                </form>
                <span className={styles.SearchSection} id="SearchSection">
                    {' '}
                    {searchResult}
                    {' '}
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
                </span>
                <section className={styles.section}>
                { console.log('primar blog id ', localStorage["blog1"])}
                {isReady ? showFollowing(localStorage["blog1"]) : <Loading /> }
                </section>
            </main>
        </div>
    )
}

export default FollowingMain
