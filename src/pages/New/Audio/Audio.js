import React, { useState, useEffect } from 'react';
import classes from './Audio.module.scss';
import { ImHeadphones } from 'react-icons/im';
import api from '../../../api/api';
import FormCard from '../../../components/NewPost/FormCard';
import PostButton from '../../../components/NewPost/PostButton';
import CloseButton from '../../../components/NewPost/CloseButton';
import isValidHttpUrl from '../../../helpers/isValidHttpUrl';

const Audio = (props) => {
  const [uploadedAudio, setUploadedAudio] = useState(null);
  const [link, setLink] = useState('');
  const [formIsValid, setFormIsValid] = useState(false);
  //To know the source of the Audio
  const [audioFromPC, setAudioFromPC] = useState(false);

  useEffect(() => {
    if (uploadedAudio || isValidHttpUrl(link)) setFormIsValid(true);
    else setFormIsValid(false);
  }, [uploadedAudio, link]);
  const audioChangeHandler = (e) => {
    setUploadedAudio(e.target.files[0]);
  };
  const linkChangeHandler = (e) => {
    setLink(e.target.value);
  };
  const formSubmitHandler = async (e) => {
    console.log(uploadedAudio);
    //Submission will depend on the source of the Audio But how do you know the source ???
    e.preventDefault();
    if (!formIsValid) return;
    try {
      //Here audioFromPC is not gurentee that it's from the pc,
      if (audioFromPC) {
        //file
        const fd = new FormData();
        fd.append('id', 7);
        fd.append('audio', uploadedAudio);
        // console.log(Array.from(fd));
        // await api.post('/photo', fd);
        console.log(JSON.stringify(Array.from(fd)));
        await api.post('/photo', { photo: JSON.stringify(Array.from(fd)) });
      } else {
        //link
      }
    } catch (err) {
      if (err.response) {
        console.log(err.response);
      } else {
        console.log(err);
      }
    }
    setUploadedAudio(null);
    setLink('');
  };
  return (
    <FormCard>
      <form className={classes.form} onSubmit={formSubmitHandler}>
        <div className={classes.control}>
          <input
            type='url'
            placeholder='Paste a URL'
            onChange={linkChangeHandler}
          />
          <div className={classes.icon}>
            <ImHeadphones />
            <input
              type='file'
              accept='audio/mp3'
              onChange={audioChangeHandler}
            />
          </div>
        </div>
        <div className={classes.actions}>
          <CloseButton />
          <PostButton formIsValid={formIsValid} />
        </div>
      </form>
    </FormCard>
  );
};
export default Audio;
