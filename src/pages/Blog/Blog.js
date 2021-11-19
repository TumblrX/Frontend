import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BlogSideNav from "../../components/BlogSideNav/BlogSideNav";
import Posts from '../../components/Posts/Posts'
import Followers from '../../components/Followers/Followers';
import Drafts from '../../components/Drafts/Drafts';
import Queue from '../../components/Queue/Queue';
import Activity from '../../components/Activity/Activity';
import styles from "./Blog.module.css";
/**
 * Component to render the blog page with its different routes
 * @author Ahmed Mahmoud
 *
 * @component
 *
 */


function Blog() {
    return (
        <Router>
       <div className={styles["contanier"]}>
           <div className={styles["left-side"]}>
            <Switch>
              <Route path="/blog/" exact>
                <Posts />
              </Route>
              <Route path="/test/" exact>
                <Followers />
              </Route>
              <Route path="/test/" exact>
                <Drafts />
              </Route>
              <Route path="/test/" exact>
                <Activity />
              </Route>
              <Route path="/test/" exact>
                <Queue />
              </Route>
            </Switch>
          </div>
          <div className={styles["aside-bar"]}>
            <BlogSideNav />
          </div>
        </div>
      </Router>
    )
}

export default Blog
