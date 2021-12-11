/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import styles from './Chat.module.scss';
import ChatHeader from './ChatHeader';
import ChatFooter from './ChatFooter';
import ChatContent from './ChatContent';
import logo from '../../../assets/Images/avatar.png';
import { open } from './ChatController';

const Inbox = function () {
  return (
    <>
      <div className={styles.Chat} id="Chat">
        <ChatHeader />
        <ChatContent />
        <ChatFooter />
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
