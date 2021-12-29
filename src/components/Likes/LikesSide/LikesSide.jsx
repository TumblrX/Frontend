/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import styles from './LikesSide.module.scss';
import ExploreAside from '../../ExploreAside/ExploreAside'

const LikesSide = () => {
    return (
        <div className={styles.LikesSide}>
             <ExploreAside tagName="Checkout related blogs" />
        </div>
    )
}

export default LikesSide
