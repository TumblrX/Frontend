// import configureStore from '../../redux/store';
import api from '../../../api/api';
import configureStore from '../../../redux/store';
import { setID } from '../../../redux/ChatReducer';

const sendMessage = async (textMessage, user2Id) => {
    try {
      const response = await api.post(`/api/user/chat/send-message`,{
          textMessage,
          user2Id,
      });
      // console.log('send done -->', response.data);      
    } catch (err) {
      if (err.response) {
        // Not in the 200 response range
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);
      } else {
        console.log(`Error: ${err.message}`);
      }
    }
};

const getChat = async (user2Id) => {
    try {
    // user/chat/reterive-chat/61c37ebe6486c8bb18bfc07e
    const response = await api.get(`api/user/chat/reterive-chat/${user2Id}`);
    // console.log('get Chat is called -->', response.data);      
    return response.data.messages;
    } catch (err) {
      if (err.response) {
        // Not in the 200 response range
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);
      } else {
        console.log(`Error: ${err.message}`);
      }
    }
  };

  const getConversations = async () => {
    try {
      const response = await api.get(`/api/user/chat/reterive-conversations`);
      // console.log('converstion done -->', response.data);      
    } catch (err) {
      if (err.response) {
        // Not in the 200 response range
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);
      } else {
        console.log(`Error: ${err.message}`);
      }
    }
  };

  const fetchInfo = async (pageNum, pageNumPosts) => {
    try {
      const response = await api.get('/api/user/info');
      console.log('info called', response.data.id)
      await configureStore.dispatch(setID(response.data.id))
    } catch (err) {
      if (err.response) {
        // Not in the 200 response range
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);
      } else {
        console.log(`Error: ${err.message}`);
      }
    }
    return null
  };
export { sendMessage, getChat, getConversations, fetchInfo};