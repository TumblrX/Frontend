/* eslint-disable react/jsx-filename-extension */
/* eslint-disable class-methods-use-this */
import React, { useEffect } from "react";
import styles from "./Dashboard.module.css";
import Interface from "./Interface/Interface";
import Sounds from "./Sounds/Sounds";
import Preferences from "./Preferences/Preferences";
import { getUserInfo } from "./DashboardServices";

const Dashboard = function () {
  useEffect(getUserInfo,[]); 
  return (
    <div className={styles["dashboard-container"]}>
      <h1 className={styles.header}>Dashboard</h1>
      <hr />
      <Interface />
      <hr />
      <Sounds />
      <hr />
      <Preferences />
    </div>
  );
};

export default Dashboard;
