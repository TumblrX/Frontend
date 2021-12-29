import axios from 'axios';

const register = async (blogName, email, password) => {
  let token;
  let symbol;
  const response = await axios.post('/api/user/register', {
    username: blogName,
    email,
    password,
  });
  symbol = response.data.symbol;

  if (response.data.symbol === '5'){
    token = response.data.token;
  }else{
    token = '';
  }
  return {
    result: symbol ,
    token,
  };
};

export default register;

