/* eslint-disable react/jsx-first-prop-new-line */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable block-spacing */
/* eslint-disable no-lone-blocks */
/* eslint-disable semi */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import styles from './Chat.module.scss';
import { MdSend } from 'react-icons/md';
import { AiFillCamera } from 'react-icons/ai';
import { FaRegWindowClose, FaGripVertical, FaAngleDown } from 'react-icons/fa';

const Inbox = function () {
  return (
    <div className={styles.Chat}>
      <div className={`${styles.Chat_header} ${styles.row}`}>
        <div className={styles.userName}>
          <a> USER1 </a> 
          +
          <a> USER2</a>
        </div>
        <div className={`${styles.headerIcons} ${styles.row}`}>
          <div className={styles.headerIcon}> 
            <FaGripVertical />
            <ul className={styles.dropDown}>
              <li className={styles.item}><a href="#">Sound Settings</a></li>
              <li className={styles.item}><a href="#">Delete Conversation</a></li>
              <li className={styles.item}><a href="#">Block user2</a></li>
            </ul>
          </div>
          <div className={styles.headerIcon}>
            <FaAngleDown />
          </div>
          <div className={styles.headerIcon}>
            <FaRegWindowClose />
          </div>
        </div>
      </div>
      <div className={styles.Chat_content}>
        content  
      </div>
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
    </div>
  );
};

export default Inbox;
