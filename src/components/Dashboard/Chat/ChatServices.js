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
      return true;   
    } catch (err) {
      if (err.response) {
        // Not in the 200 response range
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);
      } else {
        console.log(`Error: ${err.message}`);
      }
      return false
    }
};

  const getChat = async (user2Id) => {
    try {
      const response = await api.get(`api/user/chat/reterive-chat/${user2Id}`);     
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
      return [];
    }
  };


  const deleteChat = async (user2Id) => {
    try {
      // const response = await api.delete('/api/user/unfollow', { data: blogid} );
      console.log('delete id', user2Id)
      // const response = api.delete(`api/user/chat/delete-chat${user2Id}`)
      const response = api.delete(`/api/user/chat/delete-chat`, {id : user2Id})

      console.log('delete succeed')
      return true;
    } catch (err) {
      if (err.response) {
        // Not in the 200 response range
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);
      } else {
        console.log(`Error: ${err.message}`);
      }
      console.log('delete failed')
      return false;
    }
  };


export { sendMessage, getChat, deleteChat};