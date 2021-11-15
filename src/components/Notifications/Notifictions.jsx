import React, { Component } from "react";
import styles from "./Notifications.module.css";
import pen from "../../assets/Images/pencil-64x64.png";
import userPhoto from "../../assets/Images/myphoto.jpg";
import axios from "axios";
export class Notifictions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      EmailUserAboutNewFollowersBox: false,
      EmailUserAboutNewRepliesBox: false,
      EmailUserAboutNewMentionsBox: false,
      EmailUserAboutNewAnsweredAsksBox: false,
    };
  }

  editButtonOnClick() {
    document.querySelector("form").style.display = "block";
    document.querySelector(`.${styles["icon-photo"]}`).style.display = "none";
    document.querySelector(`.${styles["icon-photo"]}`).previousSibling.style.display = "none";
    document.querySelector(`.${styles["edit-after-click"]}`).style.display =
      "flex";
  }

  cancelButtonOnClick(event) {
    document.querySelector("form").style.display = "none";
    document.querySelector(`.${styles["icon-photo"]}`).style.display = "block";
    document.querySelector(`.${styles["icon-photo"]}`).previousSibling.style.display = "block";
    document.querySelector(`.${styles["edit-after-click"]}`).style.display =
      "none";
    event.preventDefault();
  }
  componentDidMount() {
    axios
      .get("http://localhost:3000/users/1")
      .then((response) => {
        console.log(response.data.notificationsSettings);
        this.setState(() => {
          return {
            EmailUserAboutNewFollowersBox:
              response.data.notificationsSettings.EmailUserAboutNewMentions,
          };
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
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

            <img
              className={styles["icon-photo"]}
              src={pen}
              alt=""
              onClick={this.editButtonOnClick}
            />
            <div
              style={{ display: "none" }}
              className={styles["edit-after-click"]}
            >
              <input type="checkbox" />
              <div>Apply settings to all blogs </div>
            </div>
          </div>
        </div>

        <form action="" style={{ display: "none" }}>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
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
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              marginTop: "20px",
            }}
          >
            <div> Notifications</div>
            <div
              style={{ marginBottom: "15px" }}
              className={styles["selected"]}
            >
              <select name="" id="">
                <option value="">From nobody</option>
                <option value="">From people you follow</option>
                <option value="">From everyone</option>
              </select>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <button
              onClick={this.cancelButtonOnClick}
              className={styles["cancel-button"]}
            >
              Cancel
            </button>
            <button className={styles["save-button"]}>Save</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Notifictions;
