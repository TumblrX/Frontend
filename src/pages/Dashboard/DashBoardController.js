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
import { incrementPageNum, setIsLoading} from '../../redux/DashBoardReducer';
import getSettings from '../Customize/GetSettingsServce';
import getUserInfo from '../LoginPage/UserInfoService';
import { RiContactsBookUploadLine } from 'react-icons/ri';


const showPosts = (posts, pageNum, isInfinte, pageNumPosts) => {
  return posts?.map((post, index) => ( 
    <div className={`${styles.post} ${styles.row}`} key={index}>
      <div className={styles.logo}>
        {           
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
  const post = radar[0];
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
            <img src={`${process.env.REACT_APP_API_URL}/${blog.avatar}`} alt="post avatar" className={styles.avatar} />
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
  console.log('mount called')
  await fetchRadar();
  await fetchExploreBlogs();
  let { response , result } = await getSettings();
  if(result){
    localStorage.avatar = response.data.data.avatar
  }else {
    localStorage.avatar = 'none'
  }
  const info =await getUserInfo();
  if (info){
    localStorage.blog1= info.data.primary_blog
  }
  // await fetchPost(pageNum, pageNumPosts)
  let num =pageNum;
  const fetch = async () => {
    num += 1;
    console.log('num =',num)
    await fetchPost(num, pageNumPosts );
    // await configureStore.dispatch(incrementPageNum())
    console.log('event added ')
  }
  const checkScroll = async () => {
    // offsetHeight
    if (localStorage["InfinteScrolling"] === 'true' && 
    ((window.innerHeight + window.scrollY) >= document.body.scrollHeight)) {
      console.log('event removed')
      await window.removeEventListener('scroll', checkScroll);
      await configureStore.dispatch(setIsLoading(true))
      await fetch()
      await window.addEventListener('scroll', checkScroll);
      await configureStore.dispatch(setIsLoading(false))
      console.log('end')
    }
  };
  
  if((localStorage["InfinteScrolling"] === 'true')){
    console.log('event ADDED initially')
    window.addEventListener('scroll', checkScroll);
  }
}

export { showPosts, getOnePost, showBlogsForYou, componentOnMount };
