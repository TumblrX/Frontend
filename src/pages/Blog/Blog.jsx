/* eslint-disable react/jsx-filename-extension */
import React, { useEffect } from 'react';
import {
  BrowserRouter as Router, Route, Switch, useParams,
} from 'react-router-dom';
import BlogSideNav from '../../components/Blog/BlogSideNav/BlogSideNav';
import Posts from '../../components/Blog/Posts/Posts';
import Followers from '../../components/Blog/Followers/Followers';
import Drafts from '../../components/Blog/Drafts/Drafts';
import Activity from '../../components/Blog/Activity/Activity';
import styles from './Blog.module.scss';
import { NavBar } from '../../components/Layouts/Layouts';
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
    <Router>
      <NavBar />
      <div className={styles.contanier}>
        <div className={styles.leftSide}>
          <Switch>
            <Route path="/blog/:blogName" exact>
              <Posts />
            </Route>
            <Route path="/blog/:blogName/followers" exact>
              <Followers />
            </Route>
            <Route path="/blog/:blogName/drafts" exact>
              <Drafts />
            </Route>
            <Route path="/blog/:blogName/activity" exact>
              <Activity />
            </Route>
          </Switch>
        </div>
        <div className={styles.asideBar}>
          <BlogSideNav />
        </div>
      </div>
    </Router>
  );
};
export default Blog;
