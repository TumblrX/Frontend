/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import styles from './FollowingSide.module.scss'
import ExploreAside from '../../ExploreAside/ExploreAside'


const FollowingSide = () => {
    return (
      <div className={styles.FollowingSide}>
        <ExploreAside tagName="Checkout related blogs" />
      </div>
    )
}

export default FollowingSide
