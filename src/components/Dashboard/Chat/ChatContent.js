/* eslint-disable no-unused-vars */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import styles from './Chat.module.scss';
import logo from '../../../assets/Images/avatar.png';
import img1 from '../../../assets/Images/1.jpg';
import { useSelector, useDispatch } from 'react-redux';

const ChatContent = function ({ scrollRef }) {
  const { messages } = useSelector((state) => state.Chat);
  return (
    <div className={styles.Chat_content}>
      <div className={styles.startChat}>
        <div className={styles.usertAvatar}>
          <div className={styles.avatar_img}>
            <img src={logo} alt="user Avatar" />
          </div>
        </div>
        <p> User2 </p>
      </div>

      <div className={styles.messegesBody} ref={scrollRef}>
        <div className={styles.msg}>
          <div className={styles.msgAvatar}>
            <div className={styles.avatar_img}>
              <img src={logo} alt="#" />
            </div>
          </div>
          <div className={styles.msgContent}>
            <h3> user </h3>
            <div>
              <img src={img1} alt="img msg" />
            </div>
          </div>
        </div>

      </div>
      {messages.map((m, index) => (
        <div className={styles.messegesBody} key={index} ref={scrollRef}>
          <div className={styles.msg}>
            <div className={styles.msgAvatar}>
              <div className={styles.avatar_img}>
                <img src={logo} alt="#" />
              </div>
            </div>
            <div className={styles.msgContent}>
              <h3> user </h3>
              <div>
                {m}
              </div>
            </div>
          </div>

        </div>
      ))}
    </div>
  );
};
export default ChatContent;
