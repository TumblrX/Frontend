import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink,useParams } from 'react-router-dom';
import classes from './BlogView.module.scss';
import { setPostsMounted, setNextButton,setIsClose, setIsShare, setIsDots } from '../../redux/blogview';
import BlogViewController from './BlogViewController';
import { fetchPost } from './BlogViewService';
import { ImCross } from 'react-icons/im';
import { BsThreeDots } from 'react-icons/bs';
import { FiSettings } from 'react-icons/fi';
import { FaRegShareSquare } from 'react-icons/fa';


function BlogView() {
    const { blogName } = useParams();
    const { posts, pageNum, isInfinte, pageNumPosts, postsMounted, stopFetch,isShare, isClose, isDots } = useSelector((state) => state.BlogView);
    const dispatch = useDispatch();
    const { shareClickHandler, dotsClickHandler, showPosts} = BlogViewController();

    useEffect( async () => {
        await fetchPost(pageNum, pageNumPosts, posts, setNextButton, isInfinte,stopFetch);
    }, [pageNum, pageNumPosts]);

    useEffect(async () => {
        if (posts.length !==0  ) {
          await dispatch(setPostsMounted(1));
        }
    }, [posts]);
    
    return (
        <div className={classes.page}>
            {isClose && <div className={classes.blogview}>
                <div className={classes.background}>
                    <div className={classes['background-container']}>
                        <div className={classes['background-container-1']}>
                            <div className={classes.close} onClick={() => {dispatch(setIsClose(0))}} ><ImCross /></div>
                            <div className={classes.username}><span>username</span></div>
                        </div>
                        <div className={classes['background-container-2']}>
                            <div className={classes.share}>
                                <span onClick={shareClickHandler} ><FaRegShareSquare /></span>
                                {isShare &&
                                <div className={classes.shareDrop}>
                                <span>Twitter</span>
                                <span>Facebook</span>
                                </div>
                                } 
                            </div>
                            <NavLink to="/settings/account" target="_blank"><FiSettings /></NavLink>
                            <div className={classes.dots}>
                                <span onClick={dotsClickHandler} ><BsThreeDots /></span>
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
                <div className={classes['blogview-posts']}>
                    <div className={classes['blogview-posts-container']}>
                    { postsMounted && showPosts(posts, pageNum, isInfinte, pageNumPosts)}
                    </div>
                </div>

            </div>}
        </div>
    )
}

export default BlogView
