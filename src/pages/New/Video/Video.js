/**
 * This is the /new/video page
 * @module Video
 * @author Yousef Elshabrawy
 */
import React, { useEffect, useState } from 'react';
import { RiVideoAddFill } from 'react-icons/ri';
import { GiSpiderWeb } from 'react-icons/gi';
import { GrFormClose } from 'react-icons/gr';
import classes from './Video.module.scss';
import api from '../../../api/api';
import FormCard from '../../../components/NewPost/FormCard';
import PostButton from '../../../components/NewPost/PostButton';
import CloseButton from '../../../components/NewPost/CloseButton';
import isValidHttpUrl from '../../../helpers/isValidHttpUrl';

const Video = (props) => {
  const [uploadedVideo, setUploadedVideo] = useState();
  const [link, setLink] = useState('');
  const [formIsValid, setFormIsValid] = useState(false);
  const [videoFromWeb, setVideoFromWeb] = useState(false);
  useEffect(() => {
    if (uploadedVideo || isValidHttpUrl(link)) setFormIsValid(true);
    else setFormIsValid(false);
  }, [uploadedVideo, link]);
  const videoChangeHandler = (e) => {
    setUploadedVideo(e.target.files[0]);
  };
  const linkChangeHandler = (e) => {
    setLink(e.target.value);
  };
  const formSubmitHandler = async (e) => {
    console.log(uploadedVideo);
    //Submission will depend on the source of the image But how do you know the source ???
    e.preventDefault();
    if (!formIsValid) return;
    try {
      if (!videoFromWeb) {
        const fd = new FormData();
        fd.append('id', 7);
        fd.append('video', uploadedVideo);
        // console.log(Array.from(fd));
        // await api.post('/photo', fd);
        console.log(JSON.stringify(Array.from(fd)));
        await api.post('/photo', { photo: JSON.stringify(Array.from(fd)) });
      } else {
      }
    } catch (err) {
      if (err.response) {
        console.log(err.response);
      } else {
        console.log(err);
      }
    }
    setUploadedVideo(null);
    setLink('');
  };
  const toggleVideoFromWebHandler = () => {
    setVideoFromWeb((x) => !x);
  };
  let content = !videoFromWeb ? (
    <div className={classes.group}>
      <span>
        <RiVideoAddFill />
        <p>Upload a video</p>
        <input type='file' accept='video/*' onChange={videoChangeHandler} />
      </span>
      <span onClick={toggleVideoFromWebHandler}>
        <GiSpiderWeb />
        <p>Add video from web</p>
      </span>
    </div>
  ) : (
    <div className={classes.fromweb}>
      <span onClick={toggleVideoFromWebHandler}>
        <GrFormClose />
      </span>
      <input
        type='url'
        placeholder='Type or paste URL'
        onChange={linkChangeHandler}
        value={link}
      />
    </div>
  );
  return (
    <FormCard>
      <form className={classes.form} onSubmit={formSubmitHandler}>
        {content}
        <div className={classes.actions}>
          <CloseButton />
          <PostButton formIsValid={formIsValid} />
        </div>
      </form>
    </FormCard>
  );
};
export default Video;
