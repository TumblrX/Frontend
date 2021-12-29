/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-array-index-key */
import React , {useEffect} from 'react';
import styles from './Chat.module.scss';
import logo from '../../../assets/Images/avatar.png';
import img1 from '../../../assets/Images/1.jpg';
import { useSelector, useDispatch } from 'react-redux';
import { getChat } from './ChatServices';
import { setMessages } from '../../../redux/ChatReducer';
import { chatMessages } from './ChatController';

const ChatContent = function () {
  const { messages, friend } = useSelector((state) => state.Chat);
  const dispatch = useDispatch();
  useEffect( async () => { chatMessages(friend.id, friend.id) }, [friend])

  return (
    <div className={styles.Chat_content} id="scroll">
      <div className={styles.startChat}>
        <div className={styles.usertAvatar}>
          <div className={styles.avatar_img}>
            {
              localStorage["avatar"] ==='none'? (
                <img src={logo} alt="noavatar" className={styles.avatar} /> 
              ) : localStorage["avatar"].includes('http') ? (
                <img src={`${localStorage["avatar"]}`} alt="avatar" className={styles.avatar} />
              ) : (
                <img src={`${process.env.REACT_APP_API_URL}/${localStorage["avatar"]}`} alt="post avatar" className={styles.avatar} />
              )
            }
          </div>
        </div>
        <p> {friend.handle} </p>
      </div>
      
      { messages?.length >0 &&  (messages.slice(0).reverse().map((m, index) => {
        return  (m.senderId === friend.id || m.senderId === localStorage.getItem('userId')) ?(
        <div className={styles.messegesBody} key={index} >
          <div className={styles.msg}>
            <div className={styles.msgAvatar}>
              <div className={styles.avatar_img}>
              { 
                m.senderId === friend.id ? (
                  friend?.avatar === 'none' ? ( 
                    <img src={logo} alt="noavatar" className={styles.avatar} /> 
                  ) : friend?.avatar.includes("http")?(
                    <img src={`${friend.avatar}`} alt="avatar" className={styles.avatar} />
                  ) : (
                    <img src={`${process.env.REACT_APP_API_URL}/${friend.avatar}`} alt="post avatar" className={styles.avatar} />
                  )
                ): (
                  localStorage["avatar"] ==='none'? (
                    <img src={logo} alt="noavatar" className={styles.avatar} /> 
                  ) : localStorage["avatar"].includes('http') ? (
                    <img src={`${localStorage["avatar"]}`} alt="avatar" className={styles.avatar} />
                  ) : (
                    <img src={`${process.env.REACT_APP_API_URL}/${localStorage["avatar"]}`} alt="post avatar" className={styles.avatar} />
                  )
                )
              }
              </div>
            </div>
            <div className={styles.msgContent}>
              <h3>
                {
                  m.senderId === friend.id ? ( 
                    <> {friend.handle} </>    
                  ): (
                    <> {localStorage.getItem('handle')} </>   
                  )
                }
              </h3>
              <div>
                {m.text}
              </div>
            </div>
          </div>

        </div>
        ) : (
          <></>
        )
      }))
      }
    </div>
  );
};
export default ChatContent;
