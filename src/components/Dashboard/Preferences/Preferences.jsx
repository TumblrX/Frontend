/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import styles from "../Dashboard.module.css";

/**
 * Component to render the Preferences section in the Dashboard settings in the Settings page
 * @author Abdalla Mahmoud
 *
 * @component
 */

const Preferences = function (props) {
  const [checkboxesStates, updateState] = useState({
    bestStuffFirst: null,
    includeStuffInorbit: null,
    EnableColorizedTags: null,
    includeFollowedTagPosts: null,
  });

  /**
   * check if the check button has been clicked and send its value to the server
   * @type {function}
   * @param {void }
   * @returns {void }
   *
   */

  const checkBoxClick = (event) => {
    /**
     * get all the check boxes in the security container
     * @type {Array<Element>}
     */
    const boxes = document.querySelectorAll(".preferences input");
    console.log(boxes);
    if (event.target === boxes[0]) {
      updateState((prevState) => ({
        ...prevState,
        bestStuffFirst: !prevState.bestStuffFirst,
      }));
    } else if (event.target === boxes[1]) {
      updateState((prevState) => ({
        ...prevState,
        includeStuffInorbit: !prevState.includeStuffInorbit,
      }));
    } else if (event.target === boxes[2]) {
      updateState((prevState) => ({
        ...prevState,
        EnableColorizedTags: !prevState.EnableColorizedTags,
      }));
    } else {
      updateState((prevState) => ({
        ...prevState,
        includeFollowedTagPosts: !prevState.includeFollowedTagPosts,
      }));
    }
  };

  // useEffect(() => {
  //   // value will be null in the first call the the other useEffect state
  //   // TAKE CARE  the setState function is an async function so we use useEffect method
  //   // to see any change happens to the state
  //   if (
  //     checkboxesStates.bestStuffFirst === null
  //     || checkboxesStates.includeStuffInorbit === null
  //     || checkboxesStates.EnableColorizedTags === null
  //     || checkboxesStates.includeFollowedTagPosts === null
  //   ) return;
  //   const sentData = {
  //     bestStuffFirst: checkboxesStates.bestStuffFirst,
  //     includeStuffInorbit: checkboxesStates.includeStuffInorbit,
  //     EnableColorizedTags: checkboxesStates.EnableColorizedTags,
  //     includeFollowedTagPosts: checkboxesStates.includeFollowedTagPosts,
  //   };
  //   console.log('Yes Iam ');
  //   api
  //     .patch('/users/1', sentData)
  //     .then((res) => {
  //       console.log('data sent ');
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       // validations from backend .
  //     });
  // }, [checkboxesStates, props]);

  /**
   * retreive the data from the backend when the component mounted
   * @type {function}
   * @param {void}
   * @returns {void}
   *
   */

  // const componentDidMount = () => {
  //   api
  //     .get('/users/1')
  //     .then((response) => {
  //       const boxes = document.querySelectorAll('.preferences input');
  //       boxes[0].checked = response.data.bestStuffFirst;
  //       boxes[1].checked = response.data.includeStuffInorbit;
  //       boxes[2].checked = response.data.EnableColorizedTags;
  //       boxes[3].checked = response.data.includeFollowedTagPosts;

  //       updateState({
  //         bestStuffFirst: response.data.bestStuffFirst,
  //         includeStuffInorbit: response.data.includeStuffInorbit,
  //         EnableColorizedTags: response.data.EnableColorizedTags,
  //         includeFollowedTagPosts: response.data.includeFollowedTagPosts,
  //       });
  //     })
  //     .catch((err) => {});
  // };

  // useEffect(componentDidMount, []);

  return (
    <div className={`${styles.section} preferences`}>
      <div className={styles.title}>Preferences</div>
      <div className={styles["section-form"]}>
        <div style={{ display: "flex", marginBottom: "30px" }}>
          <input
            type="checkbox"
            style={{ marginTop: "6px", marginRight: "6px" }}
            onClick={checkBoxClick}
            data-testid="best-stuff-first-checkbox"
            className={`${styles["input-box"]}`}
          />
          <div className={styles.description}>
            <div className={styles["section-message"]}>Best Stuff First</div>
            <div className={styles["user-message"]}>
              This switch puts stuff you will like at the top of your dash.
            </div>
          </div>
        </div>
        <div style={{ display: "flex", marginBottom: "30px" }}>
          <input
            type="checkbox"
            style={{ marginTop: "6px", marginRight: "6px" }}
            onClick={checkBoxClick}
            data-testid="include-stuff-checkbox"
            className={`${styles["input-box"]}`}
          />
          <div className={styles.description}>
            <div className={styles["section-message"]}>
              Include stuff in your orbit
            </div>
            <div className={styles["user-message"]}>
              Posts that your favorite people liked.
            </div>
          </div>
        </div>
        <div style={{ display: "flex", marginBottom: "30px" }}>
          <input
            type="checkbox"
            style={{ marginTop: "6px", marginRight: "6px" }}
            onClick={checkBoxClick}
            data-testid="enable-colorized-tags-checkbox"
            className={`${styles["input-box"]}`}
          />
          <div className={styles.description}>
            <div className={styles["section-message"]}>
              Enable colorized tags
            </div>
            <div className={styles["user-message"]}>
              Colorize matching tags on the dashboard. Colorized tags add a nice
              touch to your dashboard but they might be harder to read.
            </div>
          </div>
        </div>

        <div style={{ display: "flex", marginBottom: "30px" }}>
          <input
            type="checkbox"
            style={{ marginTop: "6px", marginRight: "6px" }}
            onClick={checkBoxClick}
            data-testid="include-followed-tag-checkbox"
            className={`${styles["input-box"]}`}
          />
          <div className={styles.description}>
            <div className={styles["section-message"]}>
              Include followed tag posts
            </div>
            <div className={styles["user-message"]}>
              Posts from the tags you follow.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preferences;
