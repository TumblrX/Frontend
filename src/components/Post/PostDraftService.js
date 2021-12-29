import api from '../../api/api';

const postDraftService = async function (postId) {
  if (!postId) return false;
  try {
    const fd = {
      state: 'published'
    };
    await api.put(`/api/post/${postId}`,fd);
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
export default postDraftService;