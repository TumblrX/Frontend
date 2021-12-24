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
import { open, scroll, handleSend } from './ChatController';
import { io } from 'socket.io-client';
import api from '../../../api/api';
import {sendMessage, getChat, getConversations} from './ChatServices'

const Chat = function () {
  const {
    messages, newMessage, arrivalMessage, primaryblog,
  } = useSelector((state) => state.Chat);
  const dispatch = useDispatch();
  const socket = useRef();

  useEffect(() => {
    scroll();
  }, [messages]);

  return (
    <>
      <div className={styles.Chat} id="Chat">
        <ChatHeader  />
        <ChatContent />
        <ChatFooter  />
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

{/* <div>
<button
  className ={styles.x}
  onClick ={ ()=> sendMessage('update ', '61b2131d0b8aaec60c5af0eb') }
>
  test send
</button>
</div>
<div>
<button
  className ={styles.x}
    // user/chat/reterive-chat/61c37ebe6486c8bb18bfc07e
  onClick ={ ()=> getChat('61b2131d0b8aaec60c5af0eb') }
>
  getChat
</button>
</div>
<div>
<button
  className ={styles.x}
  onClick ={ ()=> getConversations() }
>
  conversation
</button>
</div>
<div>
<button
  className ={styles.x}
    // user/chat/reterive-chat/61c37ebe6486c8bb18bfc07e
  onClick ={ ()=> fetchExploreBlogs() }
>
  Explore
</button>
</div> */}


// socket
{ /* <div>
<button
  onClick={() => { }}
  className={styles.x}
>
  send
</button>
</div> */ }
/*
    useEffect(() => {
      const getInfo = async () => {
        try {
          const response = await api.get('/api/user/info');
          setPrimaryBlog('primary blog added', response.data.primary_blog);
        } catch (err) {
          if (err.response) {
            // Not in the 200 response range
            console.log(err.response.data);
            console.log(err.response.status);
            console.log(err.response.headers);
          } else {
            console.log(`Error: ${err.message}`);
          }
        }
      };
      // getInfo();
    }, []);
    const addUser = () => {
      if (primaryblog) {
        socket.current.emit('addUser', primaryblog);
      }
    };
    useEffect(() => {
      // socket.current = io('ws://tumblrx.me:6600 ');
      // socket.current.on('getMessage', (data) => {
      //   setArrivalMessage({
      //     sender: data.senderId,
      //     text: data.text,
      //     createdAt: Date.now(),
      //   });
      //   console.log(data);
      // });
    }, []);

    const test_send_Socket = () => {
      socket.current.emit('sendMessage', {
        senderId: primaryblog,
        receiverId: '61bcadaebc7b450b8a387125',
        text: 'Send A messege ',
      });
    };
  */
