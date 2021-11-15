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
    document.querySelector(
      `.${styles["icon-photo"]}`
    ).previousSibling.style.display = "none";
    document.querySelector(`.${styles["edit-after-click"]}`).style.display =
      "flex";
  }

  cancelButtonOnClick(event) {
    document.querySelector("form").style.display = "none";
    document.querySelector(`.${styles["icon-photo"]}`).style.display = "block";
    document.querySelector(
      `.${styles["icon-photo"]}`
    ).previousSibling.style.display = "block";
    document.querySelector(`.${styles["edit-after-click"]}`).style.display =
      "none";
    event.preventDefault();
  }

  applyForAllButtonOnClick(event) {
    let saveButton = document.querySelector(`.${styles["save-button"]}`);
    if (saveButton.innerHTML === "Save") saveButton.innerHTML = "Save For All ";
    else {
      saveButton.innerHTML = "Save";
    }
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
              <input type="checkbox" onClick={this.applyForAllButtonOnClick} />
              <div style={{height:"fit-content",marginTop:"6px" }}>Apply settings to all blogs </div>
            </div>
          </div>
        </div>

        <form action="" style={{ display: "none", marginTop: "20px" }}>
          <div style={{ display: "flex" }}>
            <div className={styles["notification-section-title"]}>
              Email me about{" "}
            </div>
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
              margin: "15px 0 ",
            }}
          >
            <div className={styles["notification-section-title"]} style={{}}>
              {" "}
              Notifications
            </div>
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
              marginLeft:"35%"
              // this is margin to be indented  with the sections above 
              // 35% = 30% margin left of the title above + 30% width of the title above 
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
