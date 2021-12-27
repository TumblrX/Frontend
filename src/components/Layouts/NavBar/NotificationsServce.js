import api from "../../../api/api";

const getNotifications = async () => {
  let succeeded = true;
  let response;
  try {
    response = await api.get('/api/notification/user');
    console.log(response);
  } catch (err) {
    response= {};
    console.log(err);
    succeeded = false;
  }
  return {
    result: succeeded,
    response,
  };
};

export default getNotifications;
