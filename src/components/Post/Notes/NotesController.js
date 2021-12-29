// /* eslint-disable */
/* eslint-disable no-plusplus */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable no-shadow */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable prefer-const */

import commentOnPost from './CommentService';
import deleteComment from './deleteCommentService'
const PostController = function () {
  return {
    submitComment: async (postId, comment) => {
      const fd = {
        commentText:comment
      }
      return await commentOnPost(postId, fd);
    },
    deleteComment: async (postId, commentId) =>{
      return await deleteComment(postId, commentId);
    }
  };
};
export default PostController;