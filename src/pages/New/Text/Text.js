/* TODO: */
// 1. edit the closeClickHandler
// 2. add the post button options
// 3. validate the inputs values(remember dealing with #)
// 4. install uuid to generate ids
// 5. redirect after post

/**
 * This is the /new/text page
 * @module Text
 * @author Yousef Elshabrawy
 */

import React, { useEffect, useState } from 'react';
import classes from './Text.module.scss';
import FormCard from '../../../components/NewPost/FormCard';
import PostButton from '../../../components/NewPost/PostButton';
import CloseButton from '../../../components/NewPost/CloseButton';
import api from '../../../api/api';

const NewText = () => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [tags, setTags] = useState('');
  const [formIsValid, setFormIsValid] = useState(false);
  useEffect(() => {
    if (title.trim() === '' && text.trim() === '') setFormIsValid(false);
    else setFormIsValid(true);
  }, [title, text]);
  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };
  const textChangeHandler = (e) => {
    setText(e.target.value);
  };
  const tagsChangeHandler = (e) => {
    setTags(e.target.value);
  };
  const formSubmitHandler = async (e) => {
    e.preventDefault();
    if (!formIsValid) return;
    try {
      await api.post('/text', { id: title.length, title, text, tags });
    } catch (err) {
      if (err.response) {
        console.log('NOT in the 200 range');
      } else {
        console.log('error');
      }
    }
    setTitle('');
    setText('');
    setTags('');
  };
  return (
    <FormCard>
      <form className={classes.form} onSubmit={formSubmitHandler}>
        <input
          type='text'
          placeholder='Title'
          onChange={titleChangeHandler}
          value={title}
        />
        <input
          type='text'
          placeholder='Your text here'
          onChange={textChangeHandler}
          value={text}
        />
        <input
          type='text'
          placeholder='#tags'
          onChange={tagsChangeHandler}
          value={tags}
        />
        <div className={classes.actions}>
          <CloseButton />
          <PostButton formIsValid={formIsValid} />
        </div>
      </form>
    </FormCard>
  );
};
export default NewText;
