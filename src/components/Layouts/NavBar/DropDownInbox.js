/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import { RiChatSmile3Fill } from 'react-icons/ri';
import classes from './DropDownInbox.module.scss';
import { useDispatch ,useSelector} from 'react-redux';
import noAvatar from '../../../assets/Images/avatar.png'
import { MdSend } from 'react-icons/md';
import { setNewMessage } from '../../../redux/DropDownInbox';
import { handleOpenSearch, handleSearch, handleOpenChat, componentOnMount } from './DropDownInboxController'

const DropDownInbox = function (props) {
  const { conversations, blogs, isSearch, newMessage } = useSelector((state) => state.DropDownInbox);
  const dispatch = useDispatch();
  useEffect(async () => { componentOnMount(); },  [conversations])
  return (
    <div className={classes.smile} id={`dropDownInbox`}>
      <div className={classes.header} >
        {
          <>
            <span>{localStorage.getItem('handle')}</span>
            <span onClick={(e) => handleOpenSearch(e, isSearch)}>New Message</span> 
          </>
        }
      </div>
      <div className={classes.all}> 
      { 
        isSearch && 
        <div className={classes.header}>
          <input 
            type='text' 
            className={classes.searchInput} 
            onChange={ (e) => {  dispatch(setNewMessage(e.target.value)); }}
            placeholder= 'Chat With .... '
            value={ newMessage }
          />
          <div className={classes.icons} onClick={(e) => handleSearch(newMessage) }>
            <MdSend className={classes.icon}/>
          </div>
        </div>
      }
      { 
        ( isSearch && blogs.length === 0 )? (
          <div className={classes.content}>
            <RiChatSmile3Fill />
            <span> Enter Blog Name ... </span> 
          </div>
        ) : (isSearch && blogs.length !==0 )?(

              blogs.map((blog, index) =>(
              <div className={classes.conversation} key={index} onClick={ ()=> {  handleOpenChat(blog) }}>
                <div className={classes.ConversationAvatar}  >
                  { 
                    blog?.avatar === 'none' ? ( 
                      <img src={noAvatar} alt="noavatar" className={classes.avatar} /> 
                    ) : blog?.avatar.includes("http")?(
                      <img src={`${blog.avatar}`} alt="post avatar" className={classes.avatar} />
                    ) : (
                      <img src={`${process.env.REACT_APP_API_URL}/${blog.avatar}`} alt="post avatar" className={classes.avatar} />
                    )
                  }
                </div>
                <div className={classes.title}>
                  <h4 className={classes.h4}>   {blog.hasOwnProperty('handle') && blog.handle} </h4>
                </div>
              </div>
          ))
        ) : conversations.length ===0 ?  (
          <div className={classes.content}>  
            <RiChatSmile3Fill />
            <span>Talk to tumblr</span> 
          </div>
        ) : ( 
          conversations.map((conversation, index) =>(
              <div className={classes.conversation} key={index} onClick={ ()=> {  handleOpenChat(conversation) }}>
                <div className={classes.ConversationAvatar} id={`side${index}`} >
                  {conversation.avatar ==='none'  && <img src={noAvatar} alt="avatar" className={classes.avatar} />}
                  {conversation.avatar !=='none'  && <img src={`${process.env.REACT_APP_API_URL}/${conversation.avatar}`} alt="avatar" className={classes.avatar} />}
                  
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
    </div>
  );
};
export default DropDownInbox;
