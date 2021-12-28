/* eslint-disable react/jsx-filename-extension */
import React, { useEffect } from "react";
import styles from "./scss/ExploreAside.module.scss";
import CheckBlog from "./CheckBlog";
import img from "../../assets/Images/Project_128-09.jpg";
import { fetchBlogs } from "./CheckBlogServices";
/**
 * Component to render the Aside  in Explore page
 * @author Abdalla Mahmoud
 *
 * @component
 */
function ExploreAside(props) {
  return (
    <aside className={styles["explore-aside"]}>
      <div className={styles["following-list"]}>
        <div className={styles["header"]}>
          <div>Following</div>
          <div className={styles["edit-button"]}>Edit</div>
        </div>
        <ul className={styles["following-items"]}>
          <li>
            <div>
              <img src={img} alt="" />
            </div>
            <div>
              <div>#health &amp; fitneess</div>
              <div>
                <span style={{ fontWeight: "bold" }}>90</span> recent posts{" "}
              </div>
            </div>
          </li>
          <li>
            <div>
              <img src={img} alt="" />
            </div>
            <div>
              <div>#health &amp; fitneess</div>
              <div>
                <span style={{ fontWeight: "bold" }}>90</span> recent posts{" "}
              </div>
            </div>
          </li>
          <li>
            <div>
              <img src={img} alt="" />
            </div>
            <div>
              <div>#health &amp; fitneess</div>
              <div>
                <span style={{ fontWeight: "bold" }}>90</span> recent posts{" "}
              </div>
            </div>
          </li>
          <li>
            <div>
              <img src={img} alt="" />
            </div>
            <div>
              <div>#health &amp; fitneess</div>
              <div>
                <span style={{ fontWeight: "bold" }}>90</span> recent posts{" "}
              </div>
            </div>
          </li>
        </ul>
        <div className={styles["show-more-tags"]}>Show More Tags</div>
      </div>
      <div className={styles["check-out-blogs"]}>
        <CheckBlog tagName={props.tagName} />
        <div className={styles["show-more-tags"]} onClick={fetchBlogs}>Show More Tags</div>
      </div>
    </aside>
  );
}

export default ExploreAside;
