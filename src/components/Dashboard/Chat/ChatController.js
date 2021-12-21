/* eslint-disable no-unused-vars */
import configureStore from '../../../redux/store';
import { addMessage, setNewMessage, setSound } from '../../../redux/ChatReducer';

const dropDown = () => {
  document.getElementById('Chat').style.display = 'none';
  document.getElementById('ExitAvatar').style.display = 'block';
};
const close = () => {
  document.getElementById('Chat').style.display = 'none';
};
const open = () => {
  document.getElementById('Chat').style.display = 'block';
  document.getElementById('ExitAvatar').style.display = 'none';
};

const scroll = (scrollRef) => {
  scrollRef?.current.scrollIntoView({ block: 'start' });
  // document.getElementById('sc').scrollIntoView(true);
};

const handleSend = (newMessage) => {
  if (!newMessage.match(/^\s*$/)) {
    configureStore.dispatch(addMessage(newMessage));
    scroll();
  }
  configureStore.dispatch(setNewMessage(''));
};

const handleKeyEnter = (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    handleSend(e.target.value);
  }
};

const handleSound = () => {
  configureStore.dispatch(setSound(true));
  console.log('sound is called');
};

const handleBlock = () => {
  console.log('block is called');
};

const handleDelete = () => {
  console.log('delete is called');
};

export {
  open, close, dropDown, scroll, handleSend, handleKeyEnter,
  handleSound, handleBlock, handleDelete,
};
