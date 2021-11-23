/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BlogSideNav from '../../components/Blog/BlogSideNav/BlogSideNav';
import Posts from '../../components/Blog/Posts/Posts';
import Followers from '../../components/Blog/Followers/Followers';
import Drafts from '../../components/Blog/Drafts/Drafts';
import Activity from '../../components/Blog/Activity/Activity';
import styles from './Blog.module.scss';
import { NavBar } from '../../components/Layouts/Layouts';
/**
 * Component to render the blog page with its different routes
 * @author Ahmed Mahmoud
 *
 * @component
 *
 */
const Blog = function () {
  return (
    <Router>
      <NavBar />
      <div className={styles.contanier}>
        <div className={styles.leftSide}>
          <Switch>
            <Route path="/blog/" exact>
              <Posts />
            </Route>
            <Route path="/blog/followers" exact>
              <Followers />
            </Route>
            <Route path="/blog/drafts" exact>
              <Drafts />
            </Route>
            <Route path="/test/" exact>
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
