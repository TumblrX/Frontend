import api from '../../api/api';

const login = async (email, password) => {
  let succeeded = true;
  let token;
  let userId;
  let InfinteScrolling;
  let blogs;
  let handle;
  try {
    const response = await api.post('/api/user/login', {
      email,
      password,
    });
    console.log(response);
    token = response.data.token;
    userId = response.data.id;
    InfinteScrolling = response.data.settings.dashBoardInfiniteScrolling;
    blogs = response.data.blogs;
    handle =response.data.name;  
  } catch (err) {
    console.log(err);
    succeeded = false;
    token = 'noToken';
  }
  return {
    result: succeeded,
    token,
    userId,
    InfinteScrolling,
    blogs,
    handle,
  };
};

export default login;
