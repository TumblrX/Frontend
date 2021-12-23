import React, { useState} from 'react';
import { NavLink } from 'react-router-dom';
import classes from './BlogView.module.scss';
import { ImCross } from 'react-icons/im';
import { BiSearch } from 'react-icons/bi';
import { BsThreeDots } from 'react-icons/bs';
import { FiSettings } from 'react-icons/fi';
import { FaRegShareSquare } from 'react-icons/fa';


function BlogView() {
    const [isShare, setisShare] = useState(false);
    const [isDots, setisDots] = useState(false);
    const [isClose, setisClose] = useState(true);
    const shareClickHandler = () =>{
        setisShare(!isShare);
        setisDots(false);
    }
    const dotsClickHandler = () =>{
        setisShare(false);
        setisDots(!isDots);
    }
    const closeClickHandler = () =>{
        setisClose(false);
    }

    return (
        <div className={classes.page}>
            {isClose && <div className={classes.blogview}>
                <div className={classes.background}>
                    <div className={classes['background-container']}>
                        <div className={classes['background-container-1']}>
                            <div className={classes.close} onClick={closeClickHandler}><ImCross /></div>
                            <div className={classes.username}><span>username</span></div>
                        </div>
                        <div className={classes['background-container-2']}>
                            <div className={classes.share}>
                                <span onClick={shareClickHandler}><FaRegShareSquare /></span>
                                {isShare &&
                                <div className={classes.shareDrop}>
                                <span>Twitter</span>
                                <span>Facebook</span>
                                </div>
                                } 
                            </div>
                            <NavLink to="/settings/account" target="_blank"><FiSettings /></NavLink>
                            <div className={classes.dots}>
                                <span onClick={dotsClickHandler}><BsThreeDots /></span>
                                {isDots &&
                                <div className={classes.dotsDrop}>
                                <span>Archive</span>
                                <span>Following</span>
                                <span>Close</span>
                                </div>
                                }
                            </div>
                        </div>    
                    </div>

                </div>

            </div>}
        </div>
    )
}

export default BlogView
