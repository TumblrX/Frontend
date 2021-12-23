import React, {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import { RiChatSmile3Fill } from 'react-icons/ri';
import classes from './DropDownInbox.module.scss';
import { getConversations } from './DropDownInboxService';

// eslint-disable-next-line no-unused-vars
const DropDownInbox = function (props) {
  const [conversations, setConversations] = useState([]);
  var x;
  useEffect(async () => {
    x= await getConversations();
    setConversations(x.data);
    console.log('x-->', x.data.length);
    console.log('conversation -->', conversations);
  },[])

  return (
    <div className={classes.smile}>
      <div className={classes.header}>
        <span>username</span>
        <NavLink to="/">New Message</NavLink>
      </div>
      <div className={classes.content}>
        { conversations.length ===0  &&  
            (<>
              <RiChatSmile3Fill />
              <span>Talk to tumblr</span>
            </>
            )
        }
        { 
          conversations.length > 0  && (
            conversations.map((conversation) =>(
              <>
                <div className={classes.avatar}>
                  <img src={conversation.avatar} alt='avatar'/>
                </div>
                <div className={classes}></div>
              </>
            ))
          )
        } 
      </div>
    </div>
  );
};

export default DropDownInbox;
