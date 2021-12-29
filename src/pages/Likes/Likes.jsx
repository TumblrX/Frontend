/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import styles from './Likes.module.scss';
import LikesMain from '../../components/Likes/LikesMain/LikesMain';
import LikesSide from '../../components/Likes/LikesSide/LikesSide';
/**
 * Component to render user likes page
 * @author Ahmed Mahmoud
 *
 * @component
 *
 */

const Likes = () => {
    return (
        <div className={styles.LikesContainer}>
        <LikesMain />
        <LikesSide />
    </div>
    )
}

export default Likes;
