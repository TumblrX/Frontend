import axios from "axios";

const login = async (email, password) => {
  let succeeded = true;
  let token;
  try {
    const response = await axios.post("/api/user/login", {
      email,
      password,
    });
    console.log(response);
    token = response.data.token;
  } catch (err) {
    console.log(err);
    succeeded = false;
    token = "noToken";
  }
  return {
    result: succeeded,
    token,
  };
};

export default login;
