import api from '../../api/api';

const register = async (blogName, email, password) => {
  let token;
  let symbol;
  const response = await api.post('/api/user/register', {
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

/*
const register = async (blogName, email, password) => {
  let token;
  let symbol;
  let response;
  // try {
  //     response = await api.post('/api/user/register', {
  //     username: blogName,
  //     email,
  //     password,
  //   });
  //   token = response.data.token;
  //   symbol = response.data.symbol;
  //   console.log('symbol');
  // } catch (err) {
  //   token = 'noToken';
  //   symbol = response.data.symbol;
  //   console.log('symbol');
  // }
  // return {
  //   result: symbol ,
  //   token,
  // };}
*/