/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from 'react';
import styles from './Chat.module.scss';
import ChatHeader from './ChatHeader';
import ChatFooter from './ChatFooter';
import ChatContent from './ChatContent';
import logo from '../../../assets/Images/avatar.png';
import { open } from './ChatController';

const Inbox = function () {
  const [messages, setMessages] = useState([
    'aaaaa',
    'asdasd asdfasdfa sdfasdf asdfasdf ',
    'asdfasdf asdfa sdfasdfa sdfasd fasdf',
    'ccccccc',
    'ddddddd']);
  const [newMessage, setNewMessage] = useState('');
  const scrollRef = useRef();

  const handleSubmit = (e) => {
    if (!newMessage.match(/^\s*$/)) {
      console.log('clickde');
      console.log('msg -->', newMessage);
      setMessages((prev) => [...prev, newMessage]);
      setNewMessage('');
    } else {
      setNewMessage('');
    }
  };
  const scroll = () => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
    console.log('submitted');
  }, [messages]);

  return (
    <>
      <div className={styles.Chat} id="Chat">
        <ChatHeader />
        <ChatContent messages={messages} scrollRef={scrollRef} />
        <ChatFooter
          setNewMessage={setNewMessage}
          handleSubmit={handleSubmit}
          newMessage={newMessage}
          scroll={scroll}
        />
      </div>

      <div
        className={styles.ExitAvatar}
        id="ExitAvatar"
        onClick={() => open()}
      >
        <div className={styles.avatar_img}>
          <img src={logo} alt="#" />
        </div>
      </div>
    </>
  );
};

export default Inbox;
