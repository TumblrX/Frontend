import React, { Component } from "react";
import styles from "./Account.module.css";
import pen from "../../assets/Images/pencil-64x64.png";
import axios from "axios";
import EmailSection from "./EmailSection/EmailSection";
/**
 * Component to render the Account settings in the Settings page
 * @author Abdalla Mahmoud
 *
 * @component
 */
export class Account extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      confirmedPassword: "",
      findByEmail: false,
      emailAboutActivity: false,
      twoFactorAuth: false,
      filteredTags: [],
      filteredPosts: [],
      newPassword: "",
      newConfirmedPassword: "",
    };
    /**
     * it will hold the data of the current user
     * @object
     */
    let data;
    /**
     * this will hold the previous email for the validations
     * @string
     */
    let previousData;
  }
  /**
   * handler of all cancel Buttons that are in the account page
   * @param {event} event
   */
  cancelButtonClick = (event) => {
    // if the user entered invalid email or password then cancel the operation
    // remove the transition "immediate change " but you should put it again
    // so it will when the user click on the edit button agian 
    document.querySelectorAll(".error-message").forEach((element) => {
      element.style.visibility = "hidden";
      element.style.transition = "none";
    });
    let allButtons = document.querySelectorAll(`.${styles["cancel-button"]}`);
    if (event.target === allButtons[0]) {
      document
        .querySelector(
          `.${styles["change-email-section"]} input[type="password"]`
        )
        .classList.toggle(`${styles.hidden}`);
      document
        .querySelector(`.${styles["change-email-section"]} input[type="email"]`)
        .classList.toggle(`${styles["before-focus-on-edit"]}`);
      document
        .getElementsByClassName(`${styles["email-section-buttons"]}`)[0]
        .classList.toggle(`${styles.hidden}`);
      document
        .getElementsByTagName("img")[0]
        .classList.toggle(`${styles.hidden}`);
    } else {
      document.getElementsByClassName(`${styles["dots"]}`)[0].style.display =
        "block";
      document
        .querySelectorAll(`.${styles["password-box"]} input`)
        .forEach((element) => {
          element.classList.toggle(`${styles.hidden}`);
          // if you click on the Email or on the Edit icon the Email box will apear and the confirm password box will appear too
          //How I select this element? as regular selector .classX .classY{} then forEach one of them toggle the hidden class
        });

      document
        .getElementsByTagName("img")[1]
        .classList.toggle(`${styles.hidden}`);

      document
        .getElementsByClassName(`${styles["password-section-buttons"]}`)[0]
        .classList.toggle(`${styles.hidden}`);
    }
    document.querySelectorAll(`form >div`).forEach((element) => {
      element.style.opacity = "1";
    });

    document.querySelectorAll(`form`)[0].style.pointerEvents = "all";
  };
  /**
   * this function will handle the form action after submitting any data
   * @param {event} event
   */
  formAction = (event) => {
    let saveButtons = document.getElementsByClassName(
      `${styles["save-button"]}`
    );
    console.log(saveButtons[0]);
    console.log(event.target);
    if (event.target === saveButtons[0]) {
      console.log("done");
      if (this.state.email === this.previousData.email) {
        document.getElementsByClassName(
          `${styles["error-email-message"]}`
        )[0].style.visibility = "unset";
      } else {
        this.data.email = this.state.email;
        if (this.state.password !== this.state.confirmedPassword) {
          document.getElementsByClassName(
            `${styles["error-password-message"]}`
          )[0].style.visibility = "unset";
          return;
        }
        axios
          .put("http://localhost:3000/users/1", {
            ...this.data,
          })
          .then((res) => {
            //window.location.reload();
          })
          .catch((err) => {
            console.log(err);
            // validations from backend .
          });
      }
    } else {
      if (this.state.confirmedPassword !== this.state.password) {
        document.getElementsByClassName(
          `${styles["error-current-password"]}`
        )[0].style.visibility = "unset";
      } else if (this.state.newPassword.length < 10) {
        // one condition for test
        document.getElementsByClassName(
          `${styles["error-new-password"]}`
        )[0].style.visibility = "unset";
      } else if (this.state.newPassword !== this.state.newConfirmedPassword) {
        document.getElementsByClassName(
          `${styles["error-confirm-password"]}`
        )[0].style.visibility = "unset";
      } else {
        this.data.password = this.state.newPassword;
        console.log(this.data);
        axios
          .put("http://localhost:3000/users/1", {
            ...this.data,
          })
          .then((res) => {
            window.location.reload(); 
          })
          .catch((err) => {
            console.log(err);
            // validations from backend .
          });
      }
    }

    event.preventDefault();
  };

  componentDidMount() {
    axios
      .get("http://localhost:3000/users/1")
      .then((response) => {
        this.data = response.data;
        this.previousData = response.data;
        this.setState(() => {
          return {
            email: response.data.email,
            password: response.data.password,
          };
        });
      })
      .catch();
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
    document.querySelectorAll(".error-message").forEach((element) => {
      element.style.transition = "0.5s .1s linear";
    });

    // if they set to zero
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
        .classList.remove(`${styles["before-focus-on-edit"]}`);
      document
        .getElementsByClassName(`${styles["icon-photo"]}`)[0]
        .classList.toggle(`${styles.hidden}`);

      let changeEmailSection = document.getElementsByClassName(
        `${styles["change-email-section"]}`
      )[0];
      let entireForm = document.getElementsByTagName("form")[0];
      entireForm.style.pointerEvents = "none";
      document.querySelectorAll(`form >div`).forEach((element) => {
        element.style.opacity = "0.5";
      });
      changeEmailSection.style.pointerEvents = "all";
      changeEmailSection.style.opacity = "1";
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
      let entireForm = document.getElementsByTagName("form")[0];
      entireForm.style.pointerEvents = "none";
      document.querySelectorAll(`form >div`).forEach((element) => {
        element.style.opacity = "0.5";
      });
      let changePasswordSection = document.getElementsByClassName(
        `${styles["password-box"]}`
      )[0];
      changePasswordSection.style.pointerEvents = "all";
      changePasswordSection.style.opacity = "1";
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

  changeInput = (event) => {
    document.querySelectorAll(".error-message").forEach((element) => {
      // if the user enter invalid input then try to enter new values
      element.style.visibility = "hidden";
    });
    if (event.target.type === "email") {
      this.setState(() => {
        return { email: event.target.value };
      });
    } else if (event.target.id === "currentpassword") {
      this.setState(() => {
        return { confirmedPassword: event.target.value };
      });
    } else if (event.target.id === "newpassword") {
      this.setState(() => {
        return { newPassword: event.target.value };
      });
    } else if (event.target.id === "confirmpassword") {
      this.setState(() => {
        return { newConfirmedPassword: event.target.value };
      });
    } else {
      this.setState(() => {
        return { confirmedPassword: event.target.value };
      });
    }
  };
  render() {
    return (
      <div className={styles["account-container"]}>
        <h1 className="title">Account</h1>
        <hr />
        <form action="" onSubmit={this.formAction}>
          <EmailSection/>
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
              <input
                id="currentpassword"
                type="password"
                name=""
                placeholder="Current Password"
                value={this.state.confirmedPassword}
                onChange={this.changeInput}
              />
              <div
                className={`${styles["error-current-password"]} error-message `}
              >
                Please Enter your password Correctly
              </div>
              <input
                id="newpassword"
                type="password"
                placeholder="New Password"
                value={this.state.newPassword}
                onChange={this.changeInput}
              />
              <div className={`${styles["error-new-password"]} error-message`}>
                Please Enter Strong Password
              </div>
              <input
                id="confirmpassword"
                type="password"
                placeholder="Confirm Password"
                value={this.state.newConfirmedPassword}
                onChange={this.changeInput}
              />
              <div
                className={`${styles["error-confirm-password"]} error-message`}
              >
                Please Enter Identical Passwords
              </div>

              <div className={styles["password-section-buttons"]}>
                <button
                  onClick={this.cancelButtonClick}
                  className={styles["cancel-button"]}
                  type="button"
                >
                  cancel
                </button>
                <button
                  type="button"
                  onClick={this.formAction}
                  className={styles["save-button"]}
                >
                  save
                </button>
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
                  <button type="button" className={styles["add-button"]}>
                    Add
                  </button>
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
                  <button type="button" className={styles["add-button"]}>
                    Add
                  </button>
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
