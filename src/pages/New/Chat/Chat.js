/**
 * This is the /new/chat page
 * @module Chat
 * @author Yousef Elshabrawy
 */

import React, { useState, useEffect } from 'react';
import classes from './Chat.module.scss';
import FormCard from '../../../components/NewPost/FormCard';
import PostButton from '../../../components/NewPost/PostButton';
import CloseButton from '../../../components/NewPost/CloseButton';
import api from '../../../api/api';
const Chat = (props) => {
  const [title, setTitle] = useState('');
  const [chat, setChat] = useState('How are you. mohamed: I,m fine.');
  const [tags, setTags] = useState('');
  const [formIsValid, setFormIsValid] = useState(false);
  useEffect(() => {
    if (chat.trim() === '') setFormIsValid(false);
    else setFormIsValid(true);
  }, [chat]);
  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };
  const chatChangeHandler = (e) => {
    setChat(e.target.value);
  };
  const tagsChangeHandler = (e) => {
    setTags(e.target.value);
  };
  const formSubmitHandler = async (e) => {
    e.preventDefault();
    if (!formIsValid) return;
    try {
      await api.post('/chat', { id: chat.length, title, chat, tags });
      console.log('chat is added');
    } catch (err) {
      if (err.response) {
        console.log('NOT in the 200 range');
      } else {
        console.log('error');
      }
    }
    setTitle('');
    setChat('');
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
        <textarea rows='6' onChange={chatChangeHandler} value={chat} />
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
export default Chat;
