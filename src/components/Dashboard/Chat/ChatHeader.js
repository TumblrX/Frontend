/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { FaRegWindowClose, FaGripVertical, FaAngleDown } from 'react-icons/fa';
import styles from './Chat.module.scss';
import {
  dropDown, close, handleSound, handleBlock, handleDelete,
} from './ChatController';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ChatHeader = function () {
  const { sound } = useSelector((state) => state.Chat);
  return (
    <div className={`${styles.Chat_header} ${styles.row}`}>
      {sound && <Redirect to="/settings/dashboard" />}
      <div className={styles.userName}>
        <a> USER1 </a>
        +
        <a> USER2</a>
      </div>
      <div className={`${styles.headerIcons} ${styles.row}`}>
        <div className={` ${styles.headerIcon} ${styles.optionsIcon}`}>
          <FaGripVertical />
          <ul className={styles.dropDown}>
            <li className={styles.item} onClick={() => { handleSound(); }}> Sound Settings</li>
            <li className={styles.item} onClick={() => { handleDelete(); }}>Delete Conversation</li>
            <li className={styles.item} onClick={() => { handleBlock(); }}> Block user2 </li>
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
