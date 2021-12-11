/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import styles from './Chat.module.scss';
import ChatHeader from './ChatHeader';
import ChatFooter from './ChatFooter';
import ChatContent from './ChatContent';

const Inbox = function () {
  return (
    <div className={styles.Chat}>
      <ChatHeader />
      <ChatContent />
      <ChatFooter />
    </div>
  );
};

export default Inbox;
