import api from '../../api/api';

const register = async (blogName, email, password) => {
  let token;
  let symbol;
  let userId;
  let InfinteScrolling;
  let blogs;
  let handle;
  const response = await api.post('/api/user/register', {
    username: blogName,
    email,
    password,
  });
  symbol = response.data.symbol;

  if (response.data.symbol === '5'){
    token = response.data.token;
    userId = response.data.id;
    InfinteScrolling = response.data.settings.dashBoardInfiniteScrolling;
    blogs = response.data.blogs;
    handle =response.data.name;  
  }else{
    token = '';
  }
  return {
    result: symbol ,
    token,
    userId,
    InfinteScrolling,
    blogs,
    handle,
  };
};

export default register;
