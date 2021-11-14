import React, { Component } from "react";
import styles from "./Notifications.module.css";
import pen from "../../assets/Images/pencil-64x64.png";
import userPhoto from "../../assets/Images/myphoto.jpg";
export class Notifictions extends Component {
  render() {
    return (
      <div className={styles["notification-container"]}>
        <h1 className={styles["header"]}>Notifications</h1>
        <hr />
        <div className={styles["notification-section"]}>
          <div className={styles["user-info"]}>
            <img src={userPhoto} alt="" className={styles["user-img"]} />
            <div className={styles["user-name"]}>Thebrownboy</div>
          </div>
          <div className={styles["edit-section"]}>
            <div style={{ whiteSpace: "nowrap", marginRight: "10px" }}>
              {" "}
              Some notification and some emails
            </div>
            <img className={styles["icon-photo"]} src={pen} alt="" />
          </div>
        </div>

        <form action="" style={{  }}>
          <div style={{ display: "flex",justifyContent: "space-around" }}>
            <div>Email me about </div>
            <div>
              <div style={{ display: "flex" }}>
                <input type="checkbox" />
                <div>New Followers</div>
              </div>
              <div style={{ display: "flex" }}>
                <input type="checkbox" />
                <div>New replies</div>
              </div>
              <div style={{ display: "flex" }}>
                <input type="checkbox" />
                <div>Mentions</div>
              </div>
              <div style={{ display: "flex" }}>
                <input type="checkbox" />
                <div>Answered Asks</div>
              </div>
            </div>
          </div>
          <div style={{ display: "flex" ,justifyContent: "space-around", marginTop:"20px" }}>
            <div> Notifications</div>
            <div style={{marginBottom:"15px"}}className={styles["selected"]}>
              <select name="" id="">
                <option value="">From nobody</option>
                <option value="">From people you follow</option>
                <option value="">From everyone</option>
              </select>
            </div>
          </div>
          <div style={{
            display:"flex",
            justifyContent:"center"
          }}>
            <button className={styles["cancel-button"]}>Cancel</button>
            <button className={styles["save-button"]}>Save</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Notifictions;
