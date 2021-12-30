/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './BlogSideNav.module.scss';
import { useSelector } from 'react-redux';
import getOnePost  from '../RadarService/RadarService';
import Loading from '../Loading/Loading';
// import userPhoto from "../../assets/Images/myphoto.jpg";

/**
 * Component to render the navbar of the settings page
 * @author Ahmed Mahmoud
 *
 * @component
 */

const BlogSideNav = function () {
  const { blogTitle, blogHandle, NumOfDrafts,
    NumOfFollowers, NumOfPosts, Radar, RadarIsMounted, } = useSelector((state) => state.Blog);
  return (
    <aside className={styles.aside}>
      <div className={styles.navBarFirst}>
        <div>
          {blogHandle}
        </div>
        <div>
          {blogTitle}
        </div>
      </div>
      <Link to={`/blog/${blogHandle}`}>
        <div className={styles.navBarSlot}>
          <span>Posts</span>
          <span className={styles.span2}>{NumOfPosts}</span>
        </div>
      </Link>
      <Link to={`/blog/${blogHandle}/followers`}>
        <div className={styles.navBarSlot}>
          <span>Followers</span>
          <span className={styles.span2}>{NumOfFollowers}</span>
        </div>
      </Link>
      <Link to={`/blog/${blogHandle}/drafts`}>
        <div className={styles.navBarSlot}>
          <span>Drafts</span>
          <span className={styles.span2}>{NumOfDrafts}</span>
        </div>
      </Link>
      <Link to={"/customize"}>
        <div className={styles.navBarSlot}>
          <span>Edit Appearance</span>
          <span className={styles.spansvg}>
            <svg viewBox="0 0 13 20.1" 
              className={styles.svg}
              width="12"
              height="12"
            >
              <path d="M0 2.9l7.2 7.2-7.1 7.1L3 20.1l7.1-7.1 2.9-2.9L2.9 0 0 2.9"> </path>
            </svg>
          </span>
        </div>
      </Link>
      <div className={styles.Radar}>
        Radar
      </div>
      {
        RadarIsMounted ? getOnePost(Radar) : <Loading/>  
      }
    </aside>
  );
};

export default BlogSideNav;
