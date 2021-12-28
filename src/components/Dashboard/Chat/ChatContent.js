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

const ChatContent = function () {
  const { messages, friend } = useSelector((state) => state.Chat);
  const dispatch = useDispatch();

  useEffect( async () => {
    const msgs = await getChat(friend.id);
    // const msgs = await getChat('61c263c46b827a7e14446ee5');
    await dispatch(setMessages(msgs));
    // console.log('msgs ->', messages)
  }, [friend])
  return (
    <div className={styles.Chat_content} id="scroll">
      <div className={styles.startChat}>
        <div className={styles.usertAvatar}>
          <div className={styles.avatar_img}>
            <img src={logo} alt="user Avatar" className={styles.circle} />
          </div>
        </div>
        <p> {friend.handle} </p>
      </div>
      
      { messages.length >0 &&  (messages.slice(0).reverse().map((m, index) => (
        <div className={styles.messegesBody} key={index} >
          <div className={styles.msg}>
            <div className={styles.msgAvatar}>
              <div className={styles.avatar_img}>
                <img src={logo} alt="#" className={styles.circle}/>
              </div>
            </div>
            <div className={styles.msgContent}>
              <h3>
                {
                  m.senderId === friend.id ? ( 
                    <> {friend.handle} </>    
                  ): (
                    <> my handle </>   
                  )
                }
              </h3>
              <div>
                {m.text}
              </div>
            </div>
          </div>

        </div>
        )))
      }
    </div>
  );
};
export default ChatContent;
