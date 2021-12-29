import api from '../../../api/api';

const deleteCommentService = async function (postId, commentId) {
  if (!commentId) return false;
  try {
    await api.delete(`/api/post/${postId}/comments/${commentId}`);
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
export default deleteCommentService;