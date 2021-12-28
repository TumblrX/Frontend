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

  let dir = window.location.pathname.split("/")[3];
  let route = "/api/post?q=" + searchTag + "&offset=";
  if (dir === "all") {
    route += Search.searchPostsIndex;
  } else if (dir === "text") {
    route += Search.textPostsIndex;
  } else if (dir === "image") {
    route += Search.imagesPostsIndex;
  } else if (dir === "video") {
    route += Search.vidoesPostsIndex;
  } else if (dir === "audio") {
    route += Search.audioPostsIndex;
  }
  if (dir !== "all") route += "&type=" + dir;

  console.log(route);

  api
    .get(route)
    .then((res) => {
      console.log("From hyou ", res.data.data);

      if (dir === "all") {
        configureStore.dispatch(pushForYouPosts(res.data.data));
        configureStore.dispatch(
          setSearchPostsIndex(Search.searchPostsIndex + 10)
        );
      } else if (dir === "text") {
        configureStore.dispatch(pushTextPosts(res.data.data));
        configureStore.dispatch(setTextPostIndex(Search.textPostsIndex + 10));
      } else if (dir === "image") {
        configureStore.dispatch(pushImagePosts(res.data.data));
        configureStore.dispatch(
          setImagesPostIndex(Search.imagesPostsIndex + 10)
        );
      } else if (dir === "video") {
        configureStore.dispatch(pushVideosPosts(res.data.data));
        configureStore.dispatch(
          setVideosPostIndex(Search.vidoesPostsIndex + 10)
        );
      } else if (dir === "audio") {
        configureStore.dispatch(pushAudioPosts(res.data.data));
        configureStore.dispatch(setAudioPostIndex(Search.audioPostsIndex + 10));
      }
      window.addEventListener("scroll", checkScrollo);
    })
    .catch((err) => {
      console.log(err);
    });
};

export { retrieveSearchPosts };
