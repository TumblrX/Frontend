import axios from "axios"
const getUserInfo = async function () {
  let token = localStorage.getItem("token");
  let status = 500;
  console.log(token);

  try {
    const response = await axios.get("api/user/info", {
      headers: {
        Authorization: token,
      },
    });
    return response.data.status;
  } catch (err) {
    return status;
  }
};

export { getUserInfo };
