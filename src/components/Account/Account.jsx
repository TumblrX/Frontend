import React, { Component } from "react";
import styles from "./Account.module.css";
import pen from "../../assets/Images/pencil-64x64.png";
/**
 * Component to render the Account settings in the Settings page
 * @author Abdalla Mahmoud
 *
 * @component
 */
export class Account extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  /**
   * handle the event of clicking on the edit icon
   * if the target element is the first pen icon or the email box that means the action will be performed on Email section
   * if the target element is the second pen icon or ANY dot of the dot "div span" or the div its self
   * it means the action will be performed on password section
   * if the target element is the third pen icon the filter on tags will be affected
   * if the target element is the forth pen icon the filrter on posts will be  affected
   * @param {event} event - the click event itself will be passed
   */

  iconClick = (event) => {
    let imgs = document.querySelectorAll(`.${styles["icon-photo"]}`);
    if (event.target.id === "email-box" || event.target === imgs[0]) {
      document
        .querySelectorAll(
          `.${styles["change-email-section"]} .${styles.hidden}`
        )
        .forEach((element) => {
          element.classList.toggle(`${styles.hidden}`);
          // if you click on the Email or on the Edit icon the Email box will apear and the confirm password box will appear too
          //How I select this element? as regular selector .classX .classY{} then forEach one of them toggle the hidden class
        });

      document
        .querySelector("#email-box")
        .classList.toggle(`${styles["before-focus-on-edit"]}`);
      document
        .getElementsByClassName(`${styles["icon-photo"]}`)[0]
        .classList.toggle(`${styles.hidden}`);
    } else if (
      event.target === imgs[1] ||
      event.target.className === `${styles["dots"]}` ||
      event.target.parentElement.className === `${styles["dots"]}`
    ) {
      document.getElementsByClassName(`${styles["dots"]}`)[0].style.display =
        "none";
      document
        .querySelectorAll(`.${styles["password-box"]} .${styles.hidden}`)
        .forEach((element) => {
          element.classList.toggle(`${styles.hidden}`);
          // if you click on the Email or on the Edit icon the Email box will apear and the confirm password box will appear too
          //How I select this element? as regular selector .classX .classY{} then forEach one of them toggle the hidden class
        });
      document
        .getElementsByClassName(`${styles["icon-photo"]}`)[1]
        .classList.toggle(`${styles.hidden}`);
    } else if (event.target === imgs[2]) {
      document.getElementsByClassName(
        `${styles["section-message"]}`
      )[3].style.display = "none";

      let tagsFilterBox = document.getElementsByClassName(
        `${styles["tags-filter-box"]}`
      )[0];

      tagsFilterBox.classList.toggle(`${styles["tags-filter-box"]}`);
      tagsFilterBox.style.display = "flex";
    } else {
      document.getElementsByClassName(
        `${styles["section-message"]}`
      )[5].style.display = "none";
      let postsFilterBox = document.getElementsByClassName(
        `${styles["posts-filter-box"]}`
      )[0];

      postsFilterBox.classList.toggle(`${styles["posts-filter-box"]}`);
      postsFilterBox.style.display = "flex";
    }
  };
  render() {
    return (
      <div className={styles["account-container"]}>
        <h1 className="title">Account</h1>
        <hr />
        <form action="">
          <div className={styles["change-email-section"]}>
            <div className={styles["title"]}>Email</div>
            <div className={styles["input-fields"]}>
              <input
                onClick={this.iconClick}
                id="email-box"
                type="email"
                value="abdalla@abdalla.com"
                className={styles["before-focus-on-edit"]}
              />
              <input
                type="password"
                placeholder="Confirm Password"
                className={styles.hidden}
              />

              <div
                className={`${styles.hidden} ${styles["email-section-buttons"]}`}
              >
                <button className={styles["cancel-button"]}>cancel</button>
                <button className={styles["save-button"]}>save</button>
              </div>
              <div style={{ display: "flex" }}>
                <input type="checkbox" name="" style={{ marginRight: "6px" }} />
                <div
                  className={styles["user-message"]}
                  style={{ marginTop: "-2px" }}
                >
                  Let people find your blogs through this address.{" "}
                </div>
              </div>
            </div>

            <img
              src={pen}
              onClick={this.iconClick}
              className={styles["icon-photo"]}
              alt=" can't load "
            />
          </div>
          <hr />
          {/*  
        
            *********
        
        
          */}

          <div className={styles["password-box"]}>
            <div className={styles["title"]}>Password</div>
            <div className={styles["dots"]} onClick={this.iconClick}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className={`${styles["input-fields"]} ${styles.hidden}`}>
              <input type="password" name="" placeholder="Current Password" />
              <input type="password" placeholder="New Password" />
              <input type="password" placeholder="Confirm Password" />

              <div>
                <button className={styles["cancel-button"]}>cancel</button>
                <button className={styles["save-button"]}>save</button>
              </div>
            </div>

            <img
              src={pen}
              onClick={this.iconClick}
              className={styles["icon-photo"]}
              alt=" can't load "
            />
          </div>
          <hr />

          {/*  */}
          <div className={styles["security-box"]}>
            <div className={styles["title"]}>Security</div>
            <div className={styles["security-section"]}>
              <div style={{ display: "flex", marginBottom: "30px" }}>
                <input
                  type="checkbox"
                  style={{ marginTop: "6px", marginRight: "6px" }}
                />
                <div className={styles["security-description"]}>
                  <div className={styles["section-message"]}>
                    Email me about account activity
                  </div>
                  <div className={styles["user-message"]}>
                    You will receive an email when someone logs into your
                    account or a new app is authorized
                  </div>
                </div>
              </div>
              <div style={{ display: "flex", marginBottom: "30px" }}>
                <input
                  type="checkbox"
                  style={{ marginTop: "6px", marginRight: "6px" }}
                />
                <div>
                  <div className={styles["section-message"]}>
                    Two-factor authentication
                  </div>
                  <div className={styles["user-message"]}>
                    Enabling two factor authentication makes it extra difficult
                    for anyone other than you to access your account.
                    <a href="/learnmore" className={styles["anchor"]}>
                      {" "}
                      Learn more.
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />

          <div className={styles["filtering-section"]}>
            <div className={styles["title"]}>Filtering</div>
            <div style={{ width: "80%" }}>
              <div>
                <div>
                  <span
                    className={`${styles["section-message"]} ${styles["filter-message"]}`}
                  >
                    Filtered Tags{" "}
                    <a href="/help" className={styles["anchor"]}>
                      (Help)
                    </a>
                  </span>
                </div>

                <div className={styles["section-message"]}>
                  You're not filtering any tags
                  <img
                    src={pen}
                    onClick={this.iconClick}
                    className={styles["icon-photo"]}
                    alt="can't load"
                  />
                </div>

                <div className={styles["tags-filter-box"]}>
                  <input
                    type="text"
                    placeholder="Add a Filter"
                    style={{ marginRight: "10px" }}
                  />
                  <button className={styles["add-button"]}>Add</button>
                </div>
              </div>
              <div>
                <span
                  style={{ color: "gray" }}
                  className={`${styles["section-message"]} ${styles["filter-message"]}`}
                >
                  Filtered Post Content{" "}
                  <a href="/help" className={styles["anchor"]}>
                    (Help)
                  </a>
                </span>

                <div className={styles["section-message"]}>
                  You're not filtering any posts
                  <img
                    src={pen}
                    onClick={this.iconClick}
                    className={styles["icon-photo"]}
                    alt="can't load"
                  />
                </div>
                <div className={styles["posts-filter-box"]}>
                  <input
                    type="text"
                    placeholder="Add a Filter"
                    style={{ marginRight: "10px" }}
                  />
                  <button className={styles["add-button"]}>Add</button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Account;
