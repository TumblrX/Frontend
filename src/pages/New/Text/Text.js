// TODO: mention and getting the blogID
/* eslint-disable */
/* eslint-disable no-unused-vars */
/**
 * This is the /new/text page
 * @module Text
 * @author Yousef Elshabrawy
 */

import React, { useEffect, useState } from 'react';
import classes from './Text.module.scss';
import FormCard from '../../../components/NewPost/FormCard';
import PostButton from '../../../components/NewPost/PostButton';
import CloseButton from '../../../components/NewPost/CloseButton';
import api from '../../../api/api';
import TextEditor from '../../../components/TextEditor/TextEditor';
import { convertToRaw} from 'draft-js';
import { v4 as uuidv4 } from 'uuid';

const NewText =function () {
  const [title, setTitle] = useState('');
  const [uploadedImages, setUploadedImages] = useState([]);
  const [blocks, setBlocks] = useState([]);
  const [entities, setEntities] = useState([]);
  const [tags, setTags] = useState('');
  const [formIsValid, setFormIsValid] = useState(false);
  const [postState, setPostState] = useState('published');
  const [blogId, setBlogId] = useState();
  useEffect(() => {
    if (title.trim() && blocks.length) setFormIsValid(true);
    else setFormIsValid(false);
  }, [title,blocks.length]);
  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };
  const textChangeHandler = (editorOutput) => {
    setUploadedImages(editorOutput.uploadedImages);
    let blocks = convertToRaw(editorOutput.editorState.getCurrentContent()).blocks;
    // Removing the Empty Text Blocks
    blocks=blocks.filter(block =>{
      if(block.type!=='unstyled') return block;
      else if(block.text.trim()!=='') return block;
    });
    setBlocks(blocks);
    const entityMap = convertToRaw(editorOutput.editorState.getCurrentContent()).entityMap;
    // Converting the entityMap Object to an array of objects
    const entities = [];
    for (const item in entityMap ) {
      entities.push(entityMap[item]);
    }
    setEntities(entities);
  };
  const tagsChangeHandler = (e) => {
    setTags(e.target.value);
  };
  const postStateChangeHandler=(newState)=>{
    setPostState(newState);
  }
  const blogIdChangeHandler = (blogId) => {
    setBlogId(blogId);
    console.log(blogId);
  }
  const formSubmitHandler = async (e) => {
    e.preventDefault();[]
    if (!formIsValid) return;
    const fd = new FormData();
    const content = [];
    blocks.forEach((block) => {
      const contentBlock={};
      if(block.type === 'unstyled'){
        contentBlock.type='text';
        contentBlock.text=block.text;
      }else if(block.type === 'header-one'){
        contentBlock.type='text';
        contentBlock.subtype='heading1';
        contentBlock.text=block.text;
      }else if(block.type === 'header-two'){
        contentBlock.type='text';
        contentBlock.subtype='heading2';
        contentBlock.text=block.text;
      }else if(block.type === 'blockquote'){
        contentBlock.type='text';
        contentBlock.subtype='indented';
        contentBlock.text=block.text;
      }else if(block.type ==='unordered-list-item'){
        contentBlock.type='text';
        contentBlock.subtype='unordered-list-item';
        contentBlock.text=block.text;
      }else if(block.type === 'ordered-list-item'){
        contentBlock.type='text';
        contentBlock.subtype='ordered-list-item';
        contentBlock.text=block.text;
      }else if(block.type === 'atomic'){
        // Here will be the images and the embedded videos 
        if(entities[block.entityRanges[0].key].type==='IMAGE'){
          contentBlock.type='image';
          const id = uuidv4();
          const image = uploadedImages.shift();
          fd.append(id,image);
          contentBlock.identifier=id;
          const base64Image=entities[block.entityRanges[0].key].data.src;
          contentBlock.media=base64Image.substring('data:'.length, base64Image.indexOf(';base64'));
          contentBlock.altText=entities[block.entityRanges[0].key].data.alt;
          contentBlock.width=entities[block.entityRanges[0].key].data.width;
          contentBlock.height=entities[block.entityRanges[0].key].data.height;
        } else if(entities[block.entityRanges[0].key].type==='EMBEDDED_LINK'){
          contentBlock.url=entities[block.entityRanges[0].key].data.src;
          contentBlock.type='video';
          contentBlock.provider='youtube'
        }
      }
      
      // Bold, Italic and Strikethrough Inline Format Types
      if(block.inlineStyleRanges.length!==0){
        contentBlock.formatting=block.inlineStyleRanges.map((format)=>{
          return{
            start:format.offset,
            end:format.offset+format.length,
            type:format.style.toLowerCase()
          }
        })
      }
      // Link Inline Format Type
      if(block.entityRanges.length!==0){
        if(!contentBlock.formatting) contentBlock.formatting=[];
        block.entityRanges.forEach(entityRange=>{
          if(entities[entityRange.key].type==='LINK'){
            contentBlock.formatting.push({
              start:entityRange.offset,
              end:entityRange.offset+entityRange.length,
              type:'link',
              url:entities[entityRange.key].data.url
            })
          }else if(entities[entityRange.key].type==='MENTION'){
            contentBlock.formatting.push({
              start:entityRange.offset,
              end:entityRange.offset+entityRange.length,
              type:'mention',
              blog:{
                uuid:entities[entityRange.key].data.value,
                name:entities[entityRange.key].data.text,
                url:entities[entityRange.key].data.url
              }
            })
          }
        })
      }
      content.push(contentBlock);
    })
    fd.append('state',postState);
    fd.append('title',title);
    fd.append('postType','text');
    fd.append('content',content);
    fd.append('tags', tags);
    try {
      const post = {
        state:postState,
        title:title,
        postType:'text',
        content:content,
        tags:tags
      }
      // await api.post('/new', post);
      console.log(post);
      await api.post(`api/blog/${blogId}/posts`, fd);
    } catch (err) {
      if (err.response) {
        console.log(err.response);
      } else {
        console.log(err);
      }
    }
    setTitle('');
    setUploadedImages([]);
    setBlocks([]);
    setEntities([]);
    setTags('');
  };
  return (
    <FormCard changeBlogId={blogIdChangeHandler}>
      <form className={classes.form} onSubmit={formSubmitHandler}>
        <input
          className={classes.title}
          type='text'
          placeholder='Title'
          onChange={titleChangeHandler}
          value={title}
        />
        <TextEditor onChange={textChangeHandler} />
        <input
          className={classes.tags}
          type='text'
          placeholder='#tags'
          onChange={tagsChangeHandler}
          value={tags}
        />
        <div className={classes.actions}>
          <CloseButton />
          <PostButton formIsValid={formIsValid} selectedOption={postState} setSelectedOption={postStateChangeHandler}/>
        </div>
      </form>
    </FormCard>
  );
};
export default NewText;
