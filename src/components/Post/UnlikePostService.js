import api from '../../api/api';

const unLikePostService = async function (postId) {
  if (!postId) return false;
  try {
    await api.delete(`/api/post/${postId}/like`);
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
export default unLikePostService;
