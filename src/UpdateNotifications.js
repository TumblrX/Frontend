import Pusher from 'pusher-js';
import configureStore from './redux/store';
import { addNotifications } from './redux/NavNotifications';

const updateNotifications = () => {
    const token=localStorage.getItem('token');
    console.log(token)
    var pusher = new Pusher('17be877238a3f6068adf', {
      cluster: 'eu',
      authEndpoint: "http://tumblrx.me:3000/api/notification/auth",
      auth: {
        headers: {
          authorization: token,
        }
      }
    });
    var channel = pusher.subscribe(`private-${localStorage.getItem('userId')}`);
    channel.bind('notification', function (data) {
        configureStore.dispatch(addNotifications(data));
        console.log(data);
    }); 
};
export default updateNotifications;