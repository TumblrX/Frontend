/* eslint-disable react/jsx-filename-extension */
import React, { useEffect } from 'react';
import { Route, useParams } from 'react-router-dom';
import BlogSideNav from '../../components/Blog/BlogSideNav/BlogSideNav';
import Posts from '../../components/Blog/Posts/Posts';
import Followers from '../../components/Blog/Followers/Followers';
import Drafts from '../../components/Blog/Drafts/Drafts';
import Activity from '../../components/Blog/Activity/Activity';
import styles from './Blog.module.scss';
import useBlogHandler from './BlogService';
/**
 * Component to render the blog page with its different routes
 * @author Ahmed Mahmoud
 *
 * @component
 *
 */
// eslint-disable-next-line func-names
const Blog = function () {
  const { blogName } = useParams();
  const { fetchBlogData } = useBlogHandler();
  useEffect(() => {
    fetchBlogData(blogName);
  }, []);
  return (
    <div className={styles.contanier}>
      <div className={styles.leftSide}>
        <Route path="/blog/:blogName" exact>
          <Posts />
        </Route>
        <Route path="/blog/:blogName/followers">
          <Followers />
        </Route>
        <Route path="/blog/:blogName/drafts">
          <Drafts />
        </Route>
        <Route path="/blog/:blogName/activity">
          <Activity />
        </Route>
      </div>
      <div className={styles.asideBar}>
        <BlogSideNav />
      </div>
    </div>
  );
};
export default Blog;
