import React ,{useEffect,useRef} from "react";
import styles from "./BlogSideNav.module.css";
import { Link } from "react-router-dom";
//import userPhoto from "../../assets/Images/myphoto.jpg";

/**
 * Component to render the navbar of the settings page
 * @author Ahmed Mahmoud
 *
 * @component
 */
function BlogSideNav(){
    

    return (
      <aside>
         <div  className={styles["nav-bar-first"]}>
            <div>Ahmedmma</div>
            <div>Untitled</div>
          </div>
        <Link to="/blog">
          <div  className={styles["nav-bar-slot"]}>
            <div>Posts</div>
          </div>
        </Link>

        <Link to="/blog/followers">
          <div className={styles["nav-bar-slot"]}>
            <div>Followers</div>
          </div>
        </Link>

        <Link to="/blog/activity">
          <div className={styles["nav-bar-slot"]}>
            <div>Activity</div>
          </div>
        </Link>

        <Link to="/blog/drafts">
          <div className={styles["nav-bar-slot"]}>
            <div>Drafts</div>
          </div>
        </Link>
        <Link to="settings/blog">
          <div className={styles["nav-bar-slot"]}>
            <div>Edit Appearance</div>
          </div>
        </Link>
       

        <div className={styles.blogs}>Radar</div>
      </aside>
    );
}

export default BlogSideNav