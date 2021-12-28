import api from '../../../api/api';

const GetNotesService = async function (postId) {
  if (!postId) return false;
  try {
    return await api.get(`/api/post/${postId}/notes`);
  } catch (err) {
    if (err.response) {
      console.log(err.response);
    } else {
      console.log(err);
    }
    return false;
  }
};
export default GetNotesService;