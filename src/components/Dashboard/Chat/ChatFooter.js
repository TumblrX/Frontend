/* eslint-disable no-unused-vars */
/* eslint-disable react/self-closing-comp */
import React, { useEffect } from 'react';
import styles from './Chat.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { MdSend } from 'react-icons/md';
import { AiFillCamera } from 'react-icons/ai';
import { setNewMessage, addMessage } from '../../../redux/ChatReducer';
import { scroll } from './ChatController';

const ChatFooter = function ({ handleSubmit, scrollRef }) {
  const { newMessage } = useSelector((state) => state.Chat);
  const dispatch = useDispatch();
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      console.log('enter press here! ');
      handleSubmit(e);
      scroll(scrollRef);
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
          onChange={(e) => dispatch(setNewMessage(e.target.value))}
          value={newMessage}
          onKeyPress={handleKeyPress}
          id="input_field"
        >
        </textarea>
      </div>
      <div className={`${styles.send} ${styles.row}`}>
        <div className={styles.icon}>
          <AiFillCamera />
          <input type="file" accept="image/*" />
        </div>
        <div className={styles.insertIcons}>
          <div className={styles.icon} onClick={(e) => handleSubmit()}>
            <MdSend />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ChatFooter;
