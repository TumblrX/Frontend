import api from '../../../api/api';

const CommentService = async function (postId, fd) {
  if (!postId) return false;
  try {
    await api.post(`/api/post/${postId}/comment`,fd);
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
export default CommentService;