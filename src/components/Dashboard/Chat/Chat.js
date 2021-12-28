/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-lone-blocks */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  setMessages, setNewMessage, setArrivalMessage, setPrimaryBlog, setID, addMessage, 
} from '../../../redux/ChatReducer';
import styles from './Chat.module.scss';
import ChatHeader from './ChatHeader';
import ChatFooter from './ChatFooter';
import ChatContent from './ChatContent';
import logo from '../../../assets/Images/avatar.png';
import { open, scroll, handleSend , dataTime} from './ChatController';
import { io } from 'socket.io-client';
import {fetchInfo} from './ChatServices'

const Chat = function () {
  const {messages,id , friend } = useSelector((state) => state.Chat);
  const dispatch = useDispatch();
  const mySocket = useRef();
  
  useEffect(async ()=>{ await fetchInfo(); }, []);
  useEffect(()=>{ scroll()    }, [messages]);
  useEffect(()=>{
    const socketUrl = process.env.REACT_APP_SOCKET_URL;
    mySocket.current = io(socketUrl,{
      auth:{
        token: `${localStorage.getItem('token')}`
      } 
    });
    mySocket.current.on("privateMessage", (data) => {
      console.log('socket  -->' , data);
      console.log('freind ', friend)
      console.log('my id -> ', id)
      console.log('is freind sende -> ', friend?.id == data?.senderId)
      console.log('is sender  Me -> '  , id == data?.senderId)

      if (friend.id == data.senderId || data.senderId == id ){
        dispatch(addMessage({
            text:data.content,
            senderId: data.senderId,
            createdAt: dataTime()
          }));
          scroll();
      }
      });
      console.log('socket  connection --> \t', mySocket.current)
  }, [friend]);
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