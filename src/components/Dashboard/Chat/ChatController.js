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
  // scrollRef?.current.scrollIntoView({ block: 'start' });
  document.getElementById('scroll').scroll({
    top: 10000,
    behavior: 'smooth'
  });
};

const handleSend = async (newMessage, id) => {

  const today = new Date();
  const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  const dateTime = date+' '+time;
  if (!newMessage.match(/^\s*$/)) {
    await sendMessage(newMessage, id)
    configureStore.dispatch(addMessage({
      text:newMessage,
      senderId: id,
      createdAt: dateTime
    }));
    scroll();
  }
  configureStore.dispatch(setNewMessage(''));
};

const handleKeyEnter = (e, id) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    handleSend(e.target.value, id);
    // console.log('id -->', configureStore.dispatch(getFreindId));
    // console.log('id -->', id);
  }
};

const handleSound = () => {
  configureStore.dispatch(setSound(true));
  console.log('sound is called');
};

const handleBlock = () => {
  console.log('block is called');
  configureStore.dispatch(deleteMessages());
};

const handleDelete = () => {
  console.log('delete is called');
  configureStore.dispatch(deleteMessages());
};

export {
  open, close, dropDown, scroll, handleSend, handleKeyEnter,
  handleSound, handleBlock, handleDelete,
};
