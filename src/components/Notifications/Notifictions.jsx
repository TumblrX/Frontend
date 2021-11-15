import React, { Component } from "react";
import styles from "./Notifications.module.css";
import pen from "../../assets/Images/pencil-64x64.png";
import userPhoto from "../../assets/Images/myphoto.jpg";
import axios from "axios";
let userSettings = {
  EmailUserAboutNewFollowersBox: false,
  EmailUserAboutNewRepliesBox: false,
  EmailUserAboutNewMentionsBox: false,
  EmailUserAboutNewAnsweredAsksBox: false,
  ApplySettingsForAllBlogs: false,
  NotificationSettingsFor: "From people you follow",
};
export class Notifictions extends Component {
  inputsOnChange = (event) => {
    let checkboxes = document.querySelectorAll(`input[type="checkbox"]`);

    if (event.target === checkboxes[0]) {
      userSettings.ApplySettingsForAllBlogs =
        !userSettings.ApplySettingsForAllBlogs;
    } else if (event.target === checkboxes[1]) {
      userSettings.EmailUserAboutNewFollowersBox =
        !userSettings.EmailUserAboutNewFollowersBox;
    } else if (event.target === checkboxes[2]) {
      userSettings.EmailUserAboutNewRepliesBox =
        !userSettings.EmailUserAboutNewRepliesBox;
    } else if (event.target === checkboxes[3]) {
      userSettings.EmailUserAboutNewMentionsBox =
        !userSettings.EmailUserAboutNewMentionsBox;
    } else if (event.target === checkboxes[4]) {
      userSettings.EmailUserAboutNewAnsweredAsksBox =
        !userSettings.EmailUserAboutNewMentionsBox;
    } else {
      console.log(event.target.value)
      if (event.target.value === "1")
        userSettings.NotificationSettingsFor = "From nobody";
      else if (event.target.value === "2")
        userSettings.NotificationSettingsFor = "From people you follow";
      else userSettings.NotificationSettingsFor = "From everyone";
    }
  };
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
      })
      .catch((err) => {
        console.log(err);
      });
  }
  formAction() {
    let sentData = { notificationsSettings: userSettings };
    axios
      .patch("http://localhost:3000/users/1", sentData)
      .then((res) => {
        // window.location.reload();
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        // validations from backend .
      });
    this.preventDefault();
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
              <input
                onChange={this.inputsOnChange}
                type="checkbox"
                onClick={this.applyForAllButtonOnClick}
              />
              <div style={{ height: "fit-content", marginTop: "6px" }}>
                Apply settings to all blogs{" "}
              </div>
            </div>
          </div>
        </div>

        <form style={{ display: "none", marginTop: "20px", color: "#444" }}>
          <div style={{ display: "flex" }}>
            <div className={styles["notification-section-title"]}>
              Email me about{" "}
            </div>
            <div>
              <div style={{ display: "flex" }}>
                <input type="checkbox" onChange={this.inputsOnChange} />
                <div className={styles["notification-selection"]}>
                  New Followers
                </div>
              </div>
              <div style={{ display: "flex" }}>
                <input type="checkbox" onChange={this.inputsOnChange} />
                <div className={styles["notification-selection"]}>
                  New replies
                </div>
              </div>
              <div style={{ display: "flex" }}>
                <input type="checkbox" onChange={this.inputsOnChange} />
                <div className={styles["notification-selection"]}>Mentions</div>
              </div>
              <div style={{ display: "flex" }} onChange={this.inputsOnChange}>
                <input type="checkbox" />
                <div className={styles["notification-selection"]}>
                  Answered Asks
                </div>
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
              <div style={{ display: "flex", alignItems: "center" }}>
                <select name="" id="" onChange={this.inputsOnChange}>
                  <option value="1">From nobody</option>
                  <option value="2">From people you follow</option>
                  <option value="3">From everyone</option>
                </select>
                <div className={styles["arrow"]}>^</div>
              </div>
            </div>
          </div>
          <div
            style={{
              marginLeft: "35%",
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
            <button onClick={this.formAction} className={styles["save-button"]}>
              Save
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Notifictions;
