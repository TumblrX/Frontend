import React, { Component } from "react";
import styles from "./Dashboard.module.css";
import Interface from "./Interface/Interface";
import Sounds from "./Sounds/Sounds";
import Preferences from "./Preferences/Preferences";
import axios from "axios";
import api from "../../api/api";
class Dashboard extends Component {
  sendData(data) {
    api.patch("/users/1", data);
  }
  render() {
    return (
      <div className={styles["dashboard-container"]}>
        <h1 className={styles["header"]}>Dashboard</h1>
        <hr />
        <Interface sendData={this.sendData} />
        <hr />
        <Sounds sendData={this.sendData} />
        <hr />
        <Preferences sendData={this.sendData} />
      </div>
    );
  }
}

export default Dashboard;
