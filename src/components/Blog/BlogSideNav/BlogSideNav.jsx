/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './BlogSideNav.module.scss';
import { useSelector } from 'react-redux';
// import userPhoto from "../../assets/Images/myphoto.jpg";

/**
 * Component to render the navbar of the settings page
 * @author Ahmed Mahmoud
 *
 * @component
 */

const BlogSideNav = function () {
  const { blogTitle, blogHandle } = useSelector((state) => state.Blog);
  return (
    <aside className={styles.aside}>
      <div className={styles.navBarFirst}>
        <div>
          {blogHandle}
          {console.log(blogHandle)}
        </div>
        <div>
          {blogTitle}
          {console.log(blogTitle)}
        </div>
      </div>
      <Link to={`/blog/${blogHandle}`}>
        <div className={styles.navBarSlot}>
          <div>Posts</div>
        </div>
      </Link>
      <Link to={`/blog/${blogHandle}/followers`}>
        <div className={styles.navBarSlot}>
          <div>Followers</div>
        </div>
      </Link>

      <Link to={`/blog/${blogHandle}/activity`}>
        <div className={styles.navBarSlot}>
          <div>Activity</div>
        </div>
      </Link>

      <Link to={`/blog/${blogHandle}/drafts`}>
        <div className={styles.navBarSlot}>
          <div>Drafts</div>
        </div>
      </Link>
      <Link to={`/settings/${blogHandle}`}>
        <div className={styles.navBarSlot}>
          <div>Edit Appearance</div>
        </div>
      </Link>
      <div className={styles.blogs}>Radar</div>
    </aside>
  );
};

export default BlogSideNav;
