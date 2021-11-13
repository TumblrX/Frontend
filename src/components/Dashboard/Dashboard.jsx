import React, { Component } from 'react'
import styles from './Dashboard.module.css'
import Interface from './Interface/Interface'
import Sounds from './Sounds/Sounds'
import Preferences from './Preferences/Preferences'
class Dashboard extends Component {
    render() {
        return (
            <div className={styles["dashboard-container"]}>
                <h1 className={styles["header"]}>Dashboard</h1>
                <hr />
                <Interface/>
                <Sounds/>
                <Preferences/>
                <hr />
            </div>
        )
    }
}

export default Dashboard
