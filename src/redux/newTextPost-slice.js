import { createSlice } from '@reduxjs/toolkit';

const newTextPostSlice = createSlice({
  name: 'newTextPost',
  initialState: {
    title: '',
    uploadedImages: [],
    blocks: [],
    entities: [],
    tags: '',
    formIsValid: false,
    postState: 'published',
    blogId: null,
  },
  reducers: {
    setTitle: (state, { payload }) => {
      state.title = payload;
    },
    setUploadedImages: (state, { payload }) => {
      state.uploadedImages = payload;
    },
    setBlocks: (state, { payload }) => {
      state.blocks = payload;
    },
    setEntities: (state, { payload }) => {
      state.entities = payload;
    },
    setTags: (state, { payload }) => {
      state.tags = payload;
    },
    setFormIsValid: (state, { payload }) => {
      state.formIsValid = payload;
    },
    setPostState: (state, { payload }) => {
      state.postState = payload;
    },
    setBlogId: (state, { payload }) => {
      state.blogId = payload;
    },
    addImage: (state, { payload }) => {
      console.log(payload);
      state.uploadedImages.push(payload);
    },
  },
});

export const newTextPostActions = newTextPostSlice.actions;
export default newTextPostSlice.reducer;
