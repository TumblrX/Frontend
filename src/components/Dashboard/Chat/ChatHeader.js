import React from 'react';
import { FaRegWindowClose, FaGripVertical, FaAngleDown } from 'react-icons/fa';
import styles from './Chat.module.scss';
import { dropDown, close } from './ChatController';

const ChatHeader = function () {
  return (
    <div className={`${styles.Chat_header} ${styles.row}`}>
      <div className={styles.userName}>
        <a> USER1 </a>
        +
        <a> USER2</a>
      </div>
      <div className={`${styles.headerIcons} ${styles.row}`}>
        <div className={` ${styles.headerIcon} ${styles.optionsIcon}`}>
          <FaGripVertical />
          <ul className={styles.dropDown}>
            <li className={styles.item}><a href="#">Sound Settings</a></li>
            <li className={styles.item}><a href="#">Delete Conversation</a></li>
            <li className={styles.item}><a href="#">Block user2</a></li>
          </ul>
        </div>
        <div
          className={` ${styles.headerIcon} ${styles.DownIcon}`}
          onClick={() => { dropDown(); }}
        >
          <FaAngleDown />
        </div>
        <div
          className={` ${styles.headerIcon} ${styles.CloseIcon}`}
          onClick={() => { close(); }}
        >
          <FaRegWindowClose />
        </div>
      </div>
    </div>
  );
};
export default ChatHeader;
