/* eslint-disable func-names */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-unused-vars */
/* eslint-disable react/destructuring-assignment */
import React, { useState, useEffect } from "react";
import styles from "../Dashboard.module.css";
import { checkBoxClick } from "./SoundsServices";

/**
 * this function is responsible render the sounds  section
 * @function
 * @returns {jsx} return jsx to be renderd
 */
const Sounds = function () {
  return (
    <div className={styles.section}>
      <div className={styles.title}>Sounds</div>
      <div className={styles["section-form"]}>
        <div style={{ display: "flex", marginBottom: "30px" }}>
          <input
            type="checkbox"
            style={{ marginTop: "6px", marginRight: "6px" }}
            onClick={() => {
              let sentData = {
                messagingSounds: document.querySelector(
                  `[data-testid="messageing-sounds-checkbox"]`
                ).checked,
              };
              checkBoxClick(sentData);
            }}
            data-testid="messageing-sounds-checkbox"
            className={`${styles["input-box"]}`}
          />
          <div className={styles.description}>
            <div className={styles["section-message"]}>Messaging sounds</div>
            <div className={styles["user-message"]}>
              Assorted 'shling!' and 'fwip!' noises in messaging.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sounds;
