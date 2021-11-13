import React, { Component } from 'react'
import styles from './Dashboard.module.css'
import Interface from './Interface/Interface'
import Sounds from './Sounds/Sounds'
import Preferences from './Preferences/Preferences'
import axios from 'axios'
import Account from '../Account/Account'
class Dashboard extends Component {

    sendData(data){
        axios.patch("http://localhost:3000/users/1", data);
    }
    render() {
        return (
            <div className={styles["dashboard-container"]}>
                <h1 className={styles["header"]}>Dashboard</h1>
                <hr />
                {/* <Interface sendData={this.sendData}/>
                <hr />
                <Sounds sendData={this.sendData}/>
                <hr />
                <Preferences sendData={this.sendData}/> */}
                <Account/>
               
            </div>
        )
    }
}

export default Dashboard
