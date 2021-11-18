import React, { useState, useEffect } from 'react';
import classes from './Link.module.scss';
import api from '../../../api/api';
import FormCard from '../../../components/NewPost/FormCard';
import PostButton from '../../../components/NewPost/PostButton';
import CloseButton from '../../../components/NewPost/CloseButton';
import isValidHttpUrl from '../../../helpers/isValidHttpUrl';
const Link = (props) => {
  const [link, setLink] = useState('');
  const [formIsValid, setFormIsValid] = useState(false);
  useEffect(() => {
    if (!isValidHttpUrl(link)) setFormIsValid(false);
    else setFormIsValid(true);
  }, [link]);
  const linkChangeHandler = (e) => {
    setLink(e.target.value);
  };
  const formSubmitHandler = async (e) => {
    e.preventDefault();
    if (!formIsValid) return;
    try {
      await api.post('/link', { id: link.length, link });
    } catch (err) {
      if (err.response) {
        console.log('NOT in the 200 range');
      } else {
        console.log('error');
      }
    }
    setLink('');
  };
  return (
    <FormCard>
      <form className={classes.form} onSubmit={formSubmitHandler}>
        <input
          type='url'
          placeholder='Type or paste URL'
          onChange={linkChangeHandler}
          value={link}
        />
        <div className={classes.actions}>
          <CloseButton />
          <PostButton formIsValid={formIsValid} />
        </div>
      </form>
    </FormCard>
  );
};
export default Link;
