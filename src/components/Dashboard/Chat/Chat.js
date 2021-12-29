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
  const [localFriend, setLocalfriend] = useState(friend)
  const dispatch = useDispatch();
  // const mySocket = useRef();
  const id = localStorage.getItem('userId');
  

  useEffect(()=>{  
    // setLocalfriend(friend);  
    // console.log(localFriend)   
    
  }, []);
  useEffect(()=>{  scroll()    }, [messages]);
  // useEffect(()=>{
    // socketConnect(mySocket, io);
  //   mySocket.current.on("privateMessage", async (data) => {
  //     // chatMessages(friend.id)

  //     // console.log('is sender  Me -> '  , id === data?.senderId)
  //     // console.log('is freind sender -> ', 
  //     // JSON.stringify(friend.id) === JSON.stringify(data.senderId))
      

  //     // console.log((localFriend.id) == (data.senderId)  )
  //     // if (JSON.stringify(localFriend.id) == JSON.stringify(data.senderId)  ){

  //     console.log('freind  -->' , (friend.id));
  //     console.log('sender  -->' , (data.senderId));
  //     console.log(' my id ', (localStorage.getItem('userId')))
  //     setTimeout(() => {
  //       console.log('before condition 1', (friend.id) === (data.senderId) )
  //       console.log('before condition 2', data.senderId === localStorage.getItem('userId') )
  //       if ((friend.id) === (data.senderId) || data.senderId === localStorage.getItem('userId') ){
  //         console.log('true condition ')
  //         dispatch(addMessage({
  //             text:data.content,
  //             senderId: data.senderId,
  //             createdAt: dataTime()
  //           }));
  //           scroll(); 
  //       }
  //     }, 3000);
  //     // }
  //     //     console.log("dispatch now ")
  //   });
  //     // console.log('socket  connection --> \t', mySocket.current)
  // }, []);
  
  
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