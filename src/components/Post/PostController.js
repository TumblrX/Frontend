// /* eslint-disable */
/* eslint-disable no-plusplus */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable no-shadow */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable prefer-const */
import { useDispatch } from 'react-redux';
import { dashboardActions } from '../../redux/DashBoardReducer';
import { blogDraftsActions } from '../../redux/blogDrafts';
import deletePost from './DeletePostService';
import reblogPost from './ReblogPostService';
import likePost from './LikePostService';
import unLikePost from './UnlikePostService';
import postDraft from './PostDraftService';

const PostController = function () {
  const dispatch = useDispatch();
  return {
    reblogPostHandler: async (parentPostId) => {
      const fd = new FormData();
      fd.append('reblogData[parentPostId]',parentPostId);
      if(await reblogPost(fd)){
        alert('You rebloged the post.');
      }
    },
    likePostHandler: async (postId, isLiked) => {
      if(isLiked){
        await unLikePost(postId)
      }else {
        await likePost(postId)
      }
    },
    deletePostHandler: async (postId) => {
      // First delete it from the database then from the store
      if(await deletePost(postId)){
        dispatch(dashboardActions.deletePost(postId));
      }
    },
    deleteDraftHandler: async (draftId) => {
      // First delete it from the database then from the store
      if(await deletePost(draftId)){
        dispatch(blogDraftsActions.deleteDraft(draftId));
      }
    },
    postDraftHandler: async (draftId) =>{
      // First convert it in the database then delete it from the draft store
      if(await postDraft(draftId)){
        dispatch(blogDraftsActions.deleteDraft(draftId));
      }
    }
  };
};
export default PostController;