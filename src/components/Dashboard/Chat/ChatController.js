/* eslint-disable no-unused-vars */
import configureStore from '../../../redux/store';
import { addMessage, setNewMessage, setSound ,deleteMessages} from '../../../redux/ChatReducer';
import { setIsChat } from '../../../redux/DashBoardReducer';
import { sendMessage } from './ChatServices';

const dropDown = () => {
  document.getElementById('Chat').style.display = 'none';
  document.getElementById('ExitAvatar').style.display = 'block';
};
const close = () => {
  document.getElementById('Chat').style.display = 'none';
  configureStore.dispatch(setIsChat(false));
};
const open = () => {
  document.getElementById('Chat').style.display = 'block';
  document.getElementById('ExitAvatar').style.display = 'none';
};

const scroll = () => {
  const element = document.getElementById('scroll');
  if( element !== undefined){
    element.scroll({
      top: 10000,
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

const handleDelete = () => {
  console.log('delete is called');
  configureStore.dispatch(deleteMessages());
};

export {
  open, close, dropDown, scroll, handleSend, handleKeyEnter,
  handleSound, handleDelete,dataTime
};
