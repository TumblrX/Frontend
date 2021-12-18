/* eslint-disable no-unused-vars */
/* eslint-disable react/self-closing-comp */
import React, { useEffect } from 'react';
import styles from './Chat.module.scss';
import { MdSend } from 'react-icons/md';
import { AiFillCamera } from 'react-icons/ai';

const ChatFooter = function ({
  setNewMessage, handleSubmit, newMessage, scroll,
}) {
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      console.log('enter press here! ');
      handleSubmit();
      scroll();
    }
  };
  return (
    <div className={styles.Chat_footer}>
      <div className={styles.text}>
        <textarea
          className={styles.type_here}
          placeholder="New Message ..."
          rows={1}
          maxLength="4096"
          onChange={(e) => setNewMessage(e.target.value)}
          value={newMessage}
          onKeyPress={handleKeyPress}
          id="input_field"
        >
        </textarea>
      </div>
      <div className={`${styles.send} ${styles.row}`}>
        <div className={styles.insertIcons}>
          <div className={styles.icon} onClick={(e) => handleSubmit()}>
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
