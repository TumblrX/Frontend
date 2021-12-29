import styles from './Radar.module.scss'
import Post from '../../Post/Post';

const getOnePost = (radar) => {
    const post = radar[0];
    if(post){
      return (
        <div className={`${styles.post} `}>
        <div className={styles.postDatailes}>
          <Post data={post} />
        </div>
      </div>
      );
    }
  };

  export default getOnePost;