import React, { useEffect, useState } from 'react';
import { MdOutlineAddAPhoto } from 'react-icons/md';
import { GiSpiderWeb } from 'react-icons/gi';
import { GrFormClose } from 'react-icons/gr';
import classes from './Photo.module.scss';
import api from '../../../api/api';
import FormCard from '../../../components/NewPost/FormCard';
import PostButton from '../../../components/NewPost/PostButton';
import CloseButton from '../../../components/NewPost/CloseButton';
import isValidHttpUrl from '../../../helpers/isValidHttpUrl';

const Photo = (props) => {
  const [uploadedPhotos, setUploadedPhotos] = useState([]);
  const [link, setLink] = useState('');
  const [formIsValid, setFormIsValid] = useState(false);
  const [photoFromWeb, setPhotoFromWeb] = useState(false);
  useEffect(() => {
    if (uploadedPhotos.length || isValidHttpUrl(link)) setFormIsValid(true);
    else setFormIsValid(false);
  }, [uploadedPhotos.length, link]);
  const photosChangeHandler = (e) => {
    setUploadedPhotos(e.target.files);
  };
  const linkChangeHandler = (e) => {
    setLink(e.target.value);
  };
  const formSubmitHandler = async (e) => {
    //Submission will depend on the source of the image But how do you know the source ???
    e.preventDefault();
    if (!formIsValid) return;
    try {
      if (!photoFromWeb) {
        const fd = new FormData();
        fd.append('id', 7);
        fd.append('photo', uploadedPhotos[0]);
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
    setUploadedPhotos([]);
    setLink('');
  };
  const togglePhotoFromWebHandler = () => {
    setPhotoFromWeb((x) => !x);
  };
  let content = !photoFromWeb ? (
    <div className={classes.group}>
      <span>
        <MdOutlineAddAPhoto />
        <p>Upload photos</p>
        <input
          type='file'
          accept='image/*'
          multiple
          onChange={photosChangeHandler}
        />
      </span>
      <span onClick={togglePhotoFromWebHandler}>
        <GiSpiderWeb />
        <p>Add photo from web</p>
      </span>
    </div>
  ) : (
    <div className={classes.fromweb}>
      <span onClick={togglePhotoFromWebHandler}>
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
export default Photo;
