import api from '../../api/api';

const deletePostService = async function (postId) {
  if (!postId) return false;
  try {
    await api.delete(`/api/post/${postId}`);
  } catch (err) {
    if (err.response) {
      console.log(err.response);
    } else {
      console.log(err);
    }
    return false;
  }
  return true;
};
export default deletePostService;
