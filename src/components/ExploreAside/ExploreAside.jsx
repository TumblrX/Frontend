import React from "react";
import styles from "./scss/ExploreAside.module.scss";
import img from "../../assets/Images/Project_128-09.jpg";
function ExploreAside() {
  return (
    <div className={styles["explore-aside"]}>
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
        <div className={styles["show-more-tags"]}>
            Show More Tags 
        </div>
      </div>
      <div>Checkout list </div>
    </div>
  );
}

export default ExploreAside;
