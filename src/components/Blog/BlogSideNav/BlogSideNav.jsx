/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './BlogSideNav.module.scss';
// import userPhoto from "../../assets/Images/myphoto.jpg";

/**
 * Component to render the navbar of the settings page
 * @author Ahmed Mahmoud
 *
 * @component
 */

const BlogSideNav = function ({ blogName }) {
  return (
    <aside className={styles.aside}>
      <div className={styles.navBarFirst}>
        <div>{blogName}</div>
        <div>Untitled</div>
      </div>
      <Link to={`/blog/${blogName}`}>
        <div className={styles.navBarSlot}>
          <div>Posts</div>
        </div>
      </Link>
      <Link to={`/blog/${blogName}/followers`}>
        <div className={styles.navBarSlot}>
          <div>Followers</div>
        </div>
      </Link>

      <Link to={`/blog/${blogName}/activity`}>
        <div className={styles.navBarSlot}>
          <div>Activity</div>
        </div>
      </Link>

      <Link to={`/blog/${blogName}/drafts`}>
        <div className={styles.navBarSlot}>
          <div>Drafts</div>
        </div>
      </Link>
      <Link to={`/blog/${blogName}/members`}>
        <div className={styles.navBarSlot}>
          <div>Members</div>
        </div>
      </Link>
      <Link to={`/settings/${blogName}`}>
        <div className={styles.navBarSlot}>
          <div>Edit Appearance</div>
        </div>
      </Link>
      <div className={styles.blogs}>Radar</div>
    </aside>
  );
};

export default BlogSideNav;
