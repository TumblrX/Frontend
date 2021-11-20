import React, { useState, useEffect } from "react";
import styles from "./Notifications.module.css";
import pen from "../../assets/Images/pencil-64x64.png";
import userPhoto from "../../assets/Images/myphoto.jpg";
import axios from "axios";

/**
 * Component to render the Notifications  in the Settings page
 * @author Abdalla Mahmoud
 *
 * @component
 */

function Notifictions() {
  const [userSettings, updateInfo] = useState({
    EmailUserAboutNewFollowersBox: null,
    EmailUserAboutNewRepliesBox: null,
    EmailUserAboutNewMentionsBox: null,
    EmailUserAboutNewAnsweredAsksBox: null,
    NotificationSettingsFor: "From people you follow",
    ApplySettingsForAllBlogs: null,
  });

  /**
   *
   * this function is responsible for changing the value of the states ojbect
   * @type {function}
   * @param {*} event
   * @returns {void}
   *
   */
  const inputsOnChange = (event) => {
    /**
     * get all the checkboxes input in the notifications section
     * @type {Array<Element>}
     *
     */
    let checkboxes = document.querySelectorAll(`input[type="checkbox"]`);

    if (event.target === checkboxes[0]) {
      updateInfo({
        ...userSettings,
        ApplySettingsForAllBlogs: event.target.checked,
      });
    } else if (event.target === checkboxes[1]) {
      updateInfo({
        ...userSettings,
        EmailUserAboutNewFollowersBox: event.target.checked,
      });
    } else if (event.target === checkboxes[2]) {
      updateInfo({
        ...userSettings,
        EmailUserAboutNewRepliesBox: event.target.checked,
      });
    } else if (event.target === checkboxes[3]) {
      updateInfo({
        ...userSettings,
        EmailUserAboutNewMentionsBox: event.target.checked,
      });
    } else if (event.target === checkboxes[4]) {
      updateInfo({
        ...userSettings,
        EmailUserAboutNewAnsweredAsksBox: event.target.checked,
      });
    } else {
      if (event.target.value === "1") {
        updateInfo({ ...userSettings, NotificationSettingsFor: "From nobody" });

        document.querySelector(`.${styles["arrow"]}`).style.left = "-55px";
      } else if (event.target.value === "2") {
        updateInfo({
          ...userSettings,
          NotificationSettingsFor: "From people you follow",
        });

        document.querySelector(`.${styles["arrow"]}`).style.left = "0";
      } else {
        updateInfo({
          ...userSettings,
          NotificationSettingsFor: "From everyone",
        });
        document.querySelector(`.${styles["arrow"]}`).style.left = "-50px";
      }
    }
  };

  /**
   * handle the action when the edit button is clicked
   * @type {function}
   * @param {*} event
   * @returns {void}
   *
   */
  const editButtonOnClick = (event) => {
    document.querySelector("form").style.display = "block";
    document.querySelector(`.${styles["icon-photo"]}`).style.display = "none";
    document.querySelector(
      `.${styles["icon-photo"]}`
    ).previousSibling.style.display = "none";
    document.querySelector(`.${styles["edit-after-click"]}`).style.display =
      "flex";
  };

  /**
   *  handle the action when the cancel button is clicked
   * @type {function}
   * @param {void }
   * @returns {void}
   *
   */
  const cancelButtonOnClick = (event) => {
    document.querySelector("form").style.display = "none";
    document.querySelector(`.${styles["icon-photo"]}`).style.display = "block";
    document.querySelector(
      `.${styles["icon-photo"]}`
    ).previousSibling.style.display = "block";
    document.querySelector(`.${styles["edit-after-click"]}`).style.display =
      "none";
    event.preventDefault();
  };

  /**
   * handle the action when the "Apply on All" button is clicked
   * @type {function}
   * @param {*}event
   * @returns {void}
   *
   */
  const applyForAllButtonOnClick = (event) => {
    let saveButton = document.querySelector(`.${styles["save-button"]}`);
    if (saveButton.innerHTML === "Save") saveButton.innerHTML = "Save For All ";
    else {
      saveButton.innerHTML = "Save";
    }
  };

  /**
   * retreive the data from the backend when the component mounted
   * @type {function}
   * @param {void}
   * @returns {void}
   *
   */
  const componentDidMount = () => {
    axios
      .get("http://localhost:3000/users/1")
      .then((response) => {
        let PrevUserSettings = response.data.notificationsSettings;
        let userBoxes = document.querySelectorAll(`input[type="checkbox"]`);
        PrevUserSettings.ApplySettingsForAllBlogs = false;
        updateInfo(PrevUserSettings);
        userBoxes[1].checked =
          PrevUserSettings["EmailUserAboutNewFollowersBox"];
        userBoxes[2].checked = PrevUserSettings["EmailUserAboutNewRepliesBox"];
        userBoxes[3].checked = PrevUserSettings["EmailUserAboutNewMentionsBox"];
        userBoxes[4].checked =
          PrevUserSettings["EmailUserAboutNewAnsweredAsksBox"];

        /**
         * get the selection box
         * @type {Array<Element>}
         *
         */
        let selectionBox = document.querySelector("select");
        if (PrevUserSettings.NotificationSettingsFor === "From nobody") {
          selectionBox.value = 1;
          selectionBox.nextElementSibling.style.left = "-55px";
        } else if (
          PrevUserSettings.NotificationSettingsFor === "From people you follow"
        ) {
          selectionBox.value = 2;
          selectionBox.nextElementSibling.style.left = "0";
        } else {
          selectionBox.value = 3;
          selectionBox.nextElementSibling.style.left = "-50px";
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  /**
   * this function handle the Action when the user submit the data
   * @type {function}
   * @param {void  }
   * @returns {void}
   *
   */
  const formAction = () => {
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
  };
  useEffect(componentDidMount, []);
  return (
    <div className={styles["notification-container"]}>
      <h1 className={styles["header"]}>Notifications</h1>
      <hr />
      <div className={styles["notification-section"]}>
        <div className={styles["user-info"]}>
          <img
            src={userPhoto}
            alt=""
            className={styles["user-img"]}
            data-testid="avatar-icon"
          />
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
            onClick={editButtonOnClick}
            data-testid="notifications-section-edit-button"
          />
          <div
            style={{ display: "none" }}
            className={styles["edit-after-click"]}
          >
            <input
              onChange={inputsOnChange}
              type="checkbox"
              onClick={applyForAllButtonOnClick}
              data-testid="apply-for-all-checkbox"
              className={`${styles["input-box"]}`}
            />
            <div style={{ height: "fit-content", marginTop: "6px" }}>
              Apply settings to all blogs{" "}
            </div>
          </div>
        </div>
      </div>

      <form
        style={{ display: "none", marginTop: "20px", color: "#444" }}
        data-testid="notifications-form"
      >
        <div style={{ display: "flex" }}>
          <div className={styles["notification-section-title"]}>
            Email me about{" "}
          </div>
          <div>
            <div style={{ display: "flex" }}>
              <input
                type="checkbox"
                onChange={inputsOnChange}
                data-testid="new-followers-checkbox"
                className={`${styles["input-box"]}`}
              />
              <div className={styles["notification-selection"]}>
                New Followers
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <input
                type="checkbox"
                onChange={inputsOnChange}
                data-testid="new-replies-checkbox"
                className={`${styles["input-box"]}`}
              />
              <div className={styles["notification-selection"]}>
                New replies
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <input
                type="checkbox"
                onChange={inputsOnChange}
                data-testid="mentions-checkbox"
                className={`${styles["input-box"]}`}
              />
              <div className={styles["notification-selection"]}>Mentions</div>
            </div>
            <div style={{ display: "flex" }} onChange={inputsOnChange}>
              <input
                type="checkbox"
                data-testid="answered-asks-checkbox"
                className={`${styles["input-box"]}`}
              />
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
          <div style={{ marginBottom: "15px" }} className={styles["selected"]}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <select
                name=""
                id=""
                onChange={inputsOnChange}
                data-testid="notifications-selection-box"
              >
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
            onClick={cancelButtonOnClick}
            className={styles["cancel-button"]}
            data-testid="notifications-cancel-button"
          >
            Cancel
          </button>
          <button
            onClick={formAction}
            className={styles["save-button"]}
            data-testid="notifications-save-button"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default Notifictions;
