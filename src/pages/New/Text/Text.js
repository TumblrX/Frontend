/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
// TODO: mention
/**
 * This is the /new/text page
 * @module Text
 * @author Yousef Elshabrawy
 */

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { newTextPostActions } from '../../../redux/newTextPost-slice';
import classes from './Text.module.scss';
import FormCard from '../../../components/NewPost/FormCard';
import PostButton from '../../../components/NewPost/PostButton';
import CloseButton from '../../../components/NewPost/CloseButton';
import TextEditor from '../../../components/TextEditor/TextEditor';
import textController from './TextController';
import { fetchUserBlogs } from '../../../redux/userBlogs-actions';

const NewText = function () {
  const userBlogs = useSelector((state) => state.userBlogs.userBlogs);
  const {
    titleChangeHandler, textChangeHandler, tagsChangeHandler, postStateChangeHandler, blogIdChangeHandler, formSubmitHandler,
  } = textController();
  const dispatch = useDispatch();
  const {
    title, uploadedImages, blocks, entities, tags, formIsValid, postState, blogId,
  } = useSelector((state) => state.newTextPost);

  useEffect(() => {
    dispatch(fetchUserBlogs());
  }, [dispatch]);
  
  useEffect(() => {
    if (userBlogs.length !== 0) {
      const primaryBlog = userBlogs.find((userBlog)=>userBlog.isPrimary);
      dispatch(newTextPostActions.setBlogId(primaryBlog.id));
    }
  }, [dispatch, userBlogs]);
  useEffect(() => {
    if (title.trim() && (blocks.length || uploadedImages.length) && userBlogs.length) dispatch(newTextPostActions.setFormIsValid(true));
    else dispatch(newTextPostActions.setFormIsValid(false));
  }, [title, blocks, uploadedImages, userBlogs, dispatch]);

  return (
    <FormCard changeBlogId={blogIdChangeHandler}>
      <form className={classes.form} onSubmit={formSubmitHandler}>
        <input
          className={classes.title}
          type="text"
          placeholder="Title"
          onChange={titleChangeHandler}
          value={title}
        />
        <TextEditor onChange={textChangeHandler} />
        <input
          className={classes.tags}
          type="text"
          placeholder="#tags"
          onChange={tagsChangeHandler}
          value={tags}
        />
        <div className={classes.actions}>
          <CloseButton />
          <PostButton setSelectedOption={postStateChangeHandler} />
        </div>
      </form>
    </FormCard>
  );
};
export default NewText;
