import React from 'react'
import styles from './Radar.module.scss';
import getOnePost from './RadarService';
import Loading from '../Loading/Loading';

const myradar = ({RadarIsMounted, Radar }) => {
    return (
        <div>
            <div className={styles.Radar}>
                Radar
            </div>
            {
                RadarIsMounted ? getOnePost(Radar) : <Loading/>  
            }
        </div>
    )
}

export default myradar;
