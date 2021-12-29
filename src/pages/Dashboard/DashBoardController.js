/* eslint-disable no-unused-vars */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import styles from './Dashboard.module.scss';
import Post from '../../components/Post/Post';
import noAvatar from '../../assets/Images/avatar.png';
import { handleSideView, handleExit,  handleFollow,
  fetchPost, fetchRadar, fetchExploreBlogs
} from './DashBoardService';
import configureStore from '../../redux/store';
import { incrementPageNum } from '../../redux/DashBoardReducer';


const showPosts = (posts, pageNum, isInfinte, pageNumPosts) => {
  return posts?.map((post, index) => ( 
    <div className={`${styles.post} ${styles.row}`} key={index}>
      <div className={styles.logo}>
        { 
          // uploads/blog/defaultavatar.png
          // <img src={`http://tumblrx.me:3000/uploads/blog/defaultavatar.png`} alt="noavatar" className={styles.avatar} /> 
          
          post?.blogAttribution.avatar === 'none' ? ( 
            <img src={noAvatar} alt="noavatar" className={styles.avatar} /> 
          ) :post?.blogAttribution.avatar.includes("http") ? (
            <img src={`${post.blogAttribution.avatar}`} alt="post avatar" className={styles.avatar} />
          ):(
            <img src={`${process.env.REACT_APP_API_URL}/${post.blogAttribution.avatar}`} alt="post avatar" className={styles.avatar} />
          )
        }
      </div>
      <div className={styles.postDatailes}>
        <Post data={post} />
      </div>
    </div>
  ));
};

const getOnePost = (radar) => {
  const i = Math.floor(Math.random() * (radar.length - 1));
  const post = radar[i];
  // setInterval(() => { }, 5000);
  if(post){
    return (
      <div className={`${styles.post} `}>
      <div className={styles.logo} />
      <div className={styles.postDatailes}>
        <Post data={post} />
      </div>
    </div>
    );
  }
};




const showBlogsForYou = (exploreBlogs) => {
  return exploreBlogs.map((blog, index) => (
    <div className={`${styles.exploreBlog} ${styles.row}`} key={index}>
      <div className={styles.blogAvatar} id={`side${index}`} onClick={() => handleSideView(`side${index}`)}>
        { 
          blog?.avatar === 'none' ? ( 
            <img src={noAvatar} alt="noavatar" className={styles.avatar} /> 
          ) : blog?.avatar.includes("http")?(
            <img src={`${blog.avatar}`} alt="post avatar" className={styles.avatar} />
          ) : (
            // <img src={`${process.env.REACT_APP_API_URL}/${blog.avatar}`} alt="post avatar" className={styles.avatar} />
            <img src={`http://tumblrx.me:3000/${blog.avatar}`} alt="post avatar" className={styles.avatar} />
          )
        }
      </div>
      <div className={styles.blogTitle} >
      <h4 className={styles.h4}> {blog.handle} </h4>
      </div>
      <div className={styles.blogFollow} id={`follow${index}`} onClick={() => handleFollow(index,blog._id)}>
        <p className={styles.follow}> follow </p>
      </div>
      <div className={styles.blogExit} id={`exit${index}`} onClick={(e)=> handleExit(`exit${index}`, exploreBlogs)}>
        <p className={styles.exit}> &times; </p>
      </div>
    </div>
  ));
};
  
const componentOnMount = async (pageNum, pageNumPosts) =>{
  await fetchRadar();
  await fetchExploreBlogs();
  let num =pageNum;
  const fetch = async () => {
    num += 1;
    await fetchPost(num, pageNumPosts );
    await configureStore.dispatch(incrementPageNum())
    window.addEventListener("scroll", checkScroll);
  }
  const checkScroll = () => {
    if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
      window.removeEventListener("scroll", checkScroll);
      fetch()
    }
  };
  
  if((localStorage["InfinteScrolling"] === 'true')){
    window.addEventListener("scroll", checkScroll);
  }
}

export { showPosts, getOnePost, showBlogsForYou, componentOnMount };
