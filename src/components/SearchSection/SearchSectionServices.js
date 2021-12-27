import api from "../../api/api";
import configureStore from "../../redux/store";
import {
  pushTrendingPosts,
  pushForYouPosts,
  setAudioPostIndex,
  pushAudioPosts,
  setTextPostIndex,
  pushTextPosts,
  setImagesPostIndex,
  pushImagePosts,
  pushVideosPosts,
  setVideosPostIndex,
  setAskPostIndex,
  pushAskPosts,
  setSearchPostsIndex,
} from "../../redux/SearchReducer";

import { checkScrollo } from "./SearchSectionController";
import Search from "../../pages/Search/Search";
/**
 * retrieves Search Posts from the Backend .
 * @type {function}
 * @param {void}
 * @returns {void} return nothing
 */

const retrieveSearchPosts = () => {
  const { Search } = configureStore.getState();

  const searchTag = document.getElementById("searchTag").innerText;
  api
    .get("/api/post?q=" + searchTag + "&offset=" + Search.searchPostsIndex)
    .then((res) => {
      console.log("From hyou ",res.data.data);
      configureStore.dispatch(pushForYouPosts(res.data.data));
      configureStore.dispatch(setSearchPostsIndex(Search.searchPostsIndex+10));
      window.addEventListener("scroll", checkScrollo);
    });
};

export { retrieveSearchPosts };
