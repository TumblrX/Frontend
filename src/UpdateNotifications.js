import Pusher from 'pusher-js';
import configureStore from './redux/store';
import { addNotifications } from './redux/NavNotifications';

const updateNotifications = (id) => {
    const token=localStorage.getItem('token');
    console.log(token)
    const userId= id;
    var pusher = new Pusher('17be877238a3f6068adf', {
      cluster: 'eu',
      authEndpoint: "http://tumblrx.me:3000/api/notification/auth",
      auth: {
        headers: {
          authorization: token,
        }
      }
    });
    console.log("hello from pusher ===> " , id);
    var channel = pusher.subscribe(`private-${userId}`);
    channel.bind('notification', function (data) {
        configureStore.dispatch(addNotifications(data));
        console.log(data);
    }); 
};
export default updateNotifications;