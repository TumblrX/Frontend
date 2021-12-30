/* eslint-disable no-unused-vars */
import configureStore from '../../../redux/store';
import { resetChat,addMessage, setNewMessage, setSound ,deleteMessages, setMessages} from '../../../redux/ChatReducer';
import { setIsChat } from '../../../redux/DashBoardReducer';
import { sendMessage, getChat, deleteChat } from './ChatServices';

const dropDown = () => {
  document.getElementById('Chat').style.display = 'none';
  document.getElementById('ExitAvatar').style.display = 'block';
};
const close = () => {
  configureStore.dispatch(setIsChat(false));
  configureStore.dispatch(resetChat());
  document.getElementById('Chat').style.display = 'none';
};
const open = () => {
  document.getElementById('Chat').style.display = 'block';
  document.getElementById('ExitAvatar').style.display = 'none';
};

const scroll = () => {
  const element = document.getElementById('scroll');
  if( element ){
    element.scroll({
      top: 50000,
      behavior: 'smooth'
    });
  }
};

const dataTime = () => {
  const today = new Date();
  const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  return date+' '+time;
};
const handleSend = async (newMessage, id, socket) => {
  if (!newMessage.match(/^\s*$/)) {
    socket.current.emit('private message' , { content:newMessage, receiverId:id });
    // configureStore.dispatch(addMessage({
    //   text:newMessage,
    //   senderId: localStorage.getItem('userId'),
    //   createdAt: dataTime()
    // }));
    scroll();
  }
  configureStore.dispatch(setNewMessage(''));
};

const handleKeyEnter = (e, id, socket) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    handleSend(e.target.value, id, socket);
  }
};

const handleSound = () => {
  configureStore.dispatch(setSound(true));
  console.log('sound is called');
};

const handleDelete = async (id) => {
  console.log('delete is called');
  const response = await deleteChat(id) 
  if(response){
    configureStore.dispatch(deleteMessages());
  }
};

const socketConnect = (mySocket, io) => {
  const socketUrl = process.env.REACT_APP_SOCKET_URL;
  mySocket.current = io(socketUrl,{
    auth:{
      token: `${localStorage.getItem('token')}`
    } 
  });
}

const chatMessages = async (friendId) =>{
  const msgs = await getChat(friendId);
  await configureStore.dispatch(setMessages(msgs));
}


export {
  open, close, dropDown, scroll, handleSend, handleKeyEnter,
  handleSound, handleDelete,dataTime, socketConnect, chatMessages
};
