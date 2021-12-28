/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import styles from './Following.module.scss'
import FollowingMain from '../../components/Following/FollowingMain/FollowingMain'
import FollowingSide from '../../components/Following/FollowingSide/FollowingSide'
const Following = () => {
    return (
        <div className={styles.FollowingContainer}>
            <FollowingMain />
            <FollowingSide />
        </div>
    )
}

export default Following
