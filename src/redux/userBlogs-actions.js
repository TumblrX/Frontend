/* eslint-disable */
import api from '../api/api';
import { userBlogsActions } from './userBlogs-slice';

export const fetchUserBlogs = function (){
  return async (dispatch) => {
    try {
      const response = await api.get('/api/user/get-blogs');
      // eslint-disable-next-line no-underscore-dangle
      const userBlogs = response.data.map((blog) => ({ title: blog.title, id: blog._id }));
      // dispatch(userBlogsActions.addUserBlogs());
      dispatch(userBlogsActions.addUserBlogs(userBlogs));
    } catch (err){
      if (err.response) {
        console.log(err.response);
      } else {
        console.log(err);
      }
    }
  };
};

