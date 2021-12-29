/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-lone-blocks */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addMessage } from '../../../redux/ChatReducer';
import styles from './Chat.module.scss';
import ChatHeader from './ChatHeader';
import ChatFooter from './ChatFooter';
import ChatContent from './ChatContent';
import logo from '../../../assets/Images/avatar.png';
import { open, scroll , dataTime, socketConnect, chatMessages} from './ChatController';
import { io } from 'socket.io-client';

const Chat = function ({mySocket}) {
  const {messages , friend } = useSelector((state) => state.Chat);
  const dispatch = useDispatch();
  
  useEffect(()=>{ scroll() }, [messages]);  
  return (
    <>
      <div className={styles.Chat} id="Chat">
        <ChatHeader  />
        <ChatContent />
        <ChatFooter socket ={mySocket} />
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
export default Chat;