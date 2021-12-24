import React, {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import { RiChatSmile3Fill } from 'react-icons/ri';
import classes from './DropDownInbox.module.scss';
import { getConversations } from './DropDownInboxService';
import { useDispatch } from 'react-redux';
import noAvatar from '../../../assets/Images/avatar.png'
import { setIsChat  } from '../../../redux/DashBoardReducer';
import { setFriend } from '../../../redux/ChatReducer';

// eslint-disable-next-line no-unused-vars
const DropDownInbox = function (props) {
  const [conversations, setConversations] = useState([]);
  const dispatch = useDispatch();
  useEffect(async () => {
    const x= await getConversations();
    await setConversations(x.data);
    console.log('x-->', x.data.length);
    console.log('data -->', conversations);
    // console.log('conversation -->', conversations[0].hasOwnProperty('blogHandle'));
  },[])

  const handleChat = (conversation)=>{
    const freind ={ id:conversation.textedUser , handle:conversation.blogHandle   , avatar:conversation.avatar };
    console.log( freind);
    dispatch(setIsChat(true));
    dispatch(setFriend(freind));
  };
  return (
    <div className={classes.smile}>
      <div className={classes.header}>
        <span>username</span>
        <NavLink to="/">New Message</NavLink>
      </div>
      { conversations.length ===0  &&  
        <div className={classes.content}>
              <RiChatSmile3Fill />
              <span>Talk to tumblr</span> 
        </div>
      }
      { 
        conversations.length > 0  && (
          conversations.map((conversation, index) =>(
            <div className={classes.conversation} key={index} onClick={ ()=> { console.log(conversation); handleChat(conversation) }}>
              <div className={classes.ConversationAvatar} id={`side${index}`} >
                {conversation.avatar ==='none'  && <img src={noAvatar} alt="avatar" className={classes.avatar} />}
                {conversation.avatar !=='none'  && <img src={conversation.avatar} alt="avatar" className={classes.avatar} />}
                
              </div>
              <div className={classes.title}>
                <h4 className={classes.h4}>   {conversation.hasOwnProperty('blogHandle') && conversation.blogHandle} </h4>
                <p  className={classes.p}>   
                  {conversation.isMe  && <>myhandle : </>}
                  {conversation.hasOwnProperty('message') && conversation.message} 
                </p>
              </div>
            </div>
          ))
        )
      } 

    </div>
  );
};
export default DropDownInbox;
