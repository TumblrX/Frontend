/* eslint-disable no-plusplus */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable no-shadow */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable prefer-const */
import { convertToRaw } from 'draft-js';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { newTextPostActions } from '../../../redux/newTextPost-slice';
import submitPost from './SubmitPostService';

const TextController = function () {
  const dispatch = useDispatch();
  let {
    title, uploadedImages, blocks, entities, tags, formIsValid, postState, blogId,
  } = useSelector((state) => state.newTextPost);
  return {
    titleChangeHandler: (e) => {
      dispatch(newTextPostActions.setTitle(e.target.value));
    },
    textChangeHandler: (editorOutput) => {
      // dispatch(newTextPostActions.setUploadedImages(editorOutput.uploadedImages));
      let { blocks } = convertToRaw(editorOutput.editorState.getCurrentContent());
      // Removing the Empty Text Blocks
      blocks = blocks.filter((block) => {
        if (block.type !== 'unstyled') return block;
        if (block.text.trim() !== '') return block;
      });
      dispatch(newTextPostActions.setBlocks(blocks));
      const { entityMap } = convertToRaw(editorOutput.editorState.getCurrentContent());
      // Converting the entityMap Object to an array of objects
      const entities = [];
      for (const item in entityMap) {
        entities.push(entityMap[item]);
      }
      dispatch(newTextPostActions.setEntities(entities));
    },
    tagsChangeHandler: (e) => {
      dispatch(newTextPostActions.setTags(e.target.value));
    },
    postStateChangeHandler: (newState) => {
      dispatch(newTextPostActions.setPostState(newState));
    },
    blogIdChangeHandler: (blogId) => {
      dispatch(newTextPostActions.setBlogId(blogId));
    },
    formSubmitHandler: async (e) => {
      e.preventDefault();
      if (!formIsValid) return;
      const fd = new FormData();
      const content = [];
      blocks.forEach((block) => {
        const contentBlock = {};
        if (block.type === 'unstyled') {
          contentBlock.type = 'text';
          contentBlock.text = block.text;
        } else if (block.type === 'header-one') {
          contentBlock.type = 'text';
          contentBlock.subtype = 'heading1';
          contentBlock.text = block.text;
        } else if (block.type === 'header-two') {
          contentBlock.type = 'text';
          contentBlock.subtype = 'heading2';
          contentBlock.text = block.text;
        } else if (block.type === 'blockquote') {
          contentBlock.type = 'text';
          contentBlock.subtype = 'indented';
          contentBlock.text = block.text;
        } else if (block.type === 'unordered-list-item') {
          contentBlock.type = 'text';
          contentBlock.subtype = 'unordered-list-item';
          contentBlock.text = block.text;
        } else if (block.type === 'ordered-list-item') {
          contentBlock.type = 'text';
          contentBlock.subtype = 'ordered-list-item';
          contentBlock.text = block.text;
        } else if (block.type === 'atomic') {
          // Here will be the images and the embedded videos
          if (entities[block.entityRanges[0].key].type === 'IMAGE') {
            contentBlock.type = 'image';
            const id = uuidv4();
            // const image = uploadedImages.shift();
            const images = [...uploadedImages];
            const image = images.shift();
            uploadedImages = [...images];
            fd.append(id, image);
            contentBlock.identifier = id;
            const base64Image = entities[block.entityRanges[0].key].data.src;
            contentBlock.media = base64Image.substring('data:'.length, base64Image.indexOf(';base64'));
            contentBlock.altText = entities[block.entityRanges[0].key].data.alt;
            // contentBlock.width = entities[block.entityRanges[0].key].data.width;
            // contentBlock.height = entities[block.entityRanges[0].key].data.height;
          } else if (entities[block.entityRanges[0].key].type === 'EMBEDDED_LINK') {
            contentBlock.url = entities[block.entityRanges[0].key].data.src;
            contentBlock.type = 'video';
            contentBlock.provider = 'youtube';
          }
        }

        // Bold, Italic and Strikethrough Inline Format Types
        if (block.inlineStyleRanges.length !== 0) {
          contentBlock.formatting = block.inlineStyleRanges.map((format) => ({
            start: format.offset,
            end: format.offset + format.length,
            type: format.style.toLowerCase(),
          }));
        }
        // Link Inline Format Type
        if (block.entityRanges.length !== 0) {
          if (!contentBlock.formatting) contentBlock.formatting = [];
          block.entityRanges.forEach((entityRange) => {
            if (entities[entityRange.key].type === 'LINK') {
              contentBlock.formatting.push({
                start: entityRange.offset,
                end: entityRange.offset + entityRange.length,
                type: 'link',
                url: entities[entityRange.key].data.url,
              });
            } else if (entities[entityRange.key].type === 'MENTION') {
              contentBlock.formatting.push({
                start: entityRange.offset,
                end: entityRange.offset + entityRange.length,
                type: 'mention',
                blog: {
                  uuid: entities[entityRange.key].data.value,
                  name: entities[entityRange.key].data.text,
                  url: entities[entityRange.key].data.url,
                },
              });
            }
          });
        }
        content.push(contentBlock);
      });
      fd.append('state', postState);
      fd.append('title', title);
      fd.append('postType', 'text');
      function objectToFormData(object, objectName, formData) {
        if (Array.isArray(object)) {
          for (let i = 0; i < object.length; i++) {
            objectToFormData(object[i], `${objectName}[${i}]`, formData);
          }
        } else if (object instanceof Object) {
          for (const key in object) {
            objectToFormData(object[key], `${objectName}[${key}]`, formData);
          }
        } else {
          formData.append(objectName, object);
        }
      }
      objectToFormData(content, 'content', fd);
      const tagsWithoutHash = tags.replaceAll('#', ' ');
      let tagsArr = tagsWithoutHash.split(' ');
      tagsArr = tagsArr.filter(tag => tag.trim() !== '');
      for (let i = 0; i < tagsArr.length; i++) {
        fd.append(`tags[${i}]`, tagsArr[i]);
      }
      if (!await submitPost(blogId, fd)) return;
      dispatch(newTextPostActions.setTitle(''));
      dispatch(newTextPostActions.setUploadedImages([]));
      dispatch(newTextPostActions.setBlocks([]));
      dispatch(newTextPostActions.setEntities([]));
      dispatch(newTextPostActions.setTags(''));
    },
  };
};
export default TextController;
