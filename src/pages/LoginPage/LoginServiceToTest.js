import axios from "axios";

const login = async (email, password) => {
  let succeeded = true;
  let token;
  try {
    const response = await axios.post("/api/user/login", {
      email,
      password,
    });
    token = response.data.token;
  } catch (err) {
    succeeded = false;
    token = "noToken";
  }
  return {
    result: succeeded,
    token,
  };
};

export default login;
