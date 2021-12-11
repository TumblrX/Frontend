/* eslint-disable react/self-closing-comp */
import React from 'react';
import styles from './Chat.module.scss';
import { MdSend } from 'react-icons/md';
import { AiFillCamera } from 'react-icons/ai';

const ChatFooter = function () {
  return (
    <div className={styles.Chat_footer}>
      <div className={styles.text}>
        <textarea
          className={styles.type_here}
          placeholder="New Message"
          rows={1}
          maxLength="4096"
        >
        </textarea>
      </div>
      <div className={`${styles.send} ${styles.row}`}>
        <div className={styles.insertIcons}>
          <div className={styles.icon}>
            <MdSend />
          </div>
          <div className={styles.icon}>
            <AiFillCamera />
          </div>
        </div>
        <div className={styles.icon}>
          <AiFillCamera />
        </div>
      </div>
    </div>
  );
};
export default ChatFooter;
