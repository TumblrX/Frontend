import React from 'react';
import styles from './Chat.module.scss';
import logo from '../../../assets/Images/avatar.png';

const ChatContent = function () {
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

      <div className={styles.messegesBody}>
        <div className={styles.msg}>
          <div className={styles.msgAvatar}>
            <div className={styles.avatar_img}>
              <img src={logo} alt="#" />
            </div>
          </div>
          <div className={styles.msgContent}>
            <h3> user </h3>
            <p>
              msg msg msg  msg msg msg
              msg msg msgmsg msg msg msg msg msg
              msg msg msg  msg msg msg
              msg msg msg  msg msg msg
              msg msg msg  msg msg msg
              msg msg msg  msg msg msg
              msg msg msg  msg msg msg
              msg msg msg  msg msg msg
            </p>
          </div>
        </div>

        <div className={styles.msg}>
          <div className={styles.msgAvatar}>
            <div className={styles.avatar_img}>
              <img src={logo} alt="#" />
            </div>
          </div>
          <div className={styles.msgContent}>
            <h3> user </h3>
            <p>
              msg msg msg  msg msg msg
              msg msg msgmsg msg msg msg msg msg
              msg msg msg  msg msg msg
              msg msg msg  msg msg msg
              msg msg msg  msg msg msg
              msg msg msg  msg msg msg
              msg msg msg  msg msg msg
              msg msg msg  msg msg msg
            </p>
          </div>
        </div>

        <div className={styles.msg}>
          <div className={styles.msgAvatar}>
            <div className={styles.avatar_img}>
              <img src={logo} alt="#" />
            </div>
          </div>
          <div className={styles.msgContent}>
            <h3> user </h3>
            <p>
              msg msg msg  msg msg msg
              msg msg msgmsg msg msg msg msg msg
              msg msg msg  msg msg msg
              msg msg msg  msg msg msg
              msg msg msg  msg msg msg
              msg msg msg  msg msg msg
              msg msg msg  msg msg msg
              msg msg msg  msg msg msg
            </p>
          </div>
        </div>

        <div className={styles.msg}>
          <div className={styles.msgAvatar}>
            <div className={styles.avatar_img}>
              <img src={logo} alt="#" />
            </div>
          </div>
          <div className={styles.msgContent}>
            <h3> user </h3>
            <p>
              msg msg msg  msg msg msg
              msg msg msgmsg msg msg msg msg msg
              msg msg msg  msg msg msg
              msg msg msg  msg msg msg
              msg msg msg  msg msg msg
              msg msg msg  msg msg msg
              msg msg msg  msg msg msg
              msg msg msg  msg msg msg
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ChatContent;
