import api from "../../api/api";
import { checkScroll } from "./ExploreSectionController";
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
} from "../../redux/ExploreRecuder";
import {
  setTrendingPostIndex,
  setForYouPostIndex,
} from "../../redux/ExploreRecuder";

/**
 * It is a centeral function for retreiving Data for Explore page in all the Different aspect in the Explore
 * such as (for-you , trending , text and so on )
 * @type {function}
 * @param {void}
 * @returns {void} return nothing
 */
const retrivePosts = function () {
  let token = localStorage.getItem("token");
  let config = {
    headers: {
      Authorization: token,
    },
  };
  const { Explore } = configureStore.getState();
  let pathname = window.location.pathname.split("/")[2];
  let route = `/api/user/explore/`;
  if (pathname === "trending") {
    route += Explore.trendingPostsIndex + "/";
    route += pathname;
  } else if (pathname === "recommended-for-you") {
    route += Explore.forYouPostsIndex + "/";
    route += "for-you";
  } else if (pathname === "audios") {
    route += Explore.audioPostsIndex + "/";
    route += "audio";
  } else if (pathname === "text") {
    route += Explore.textPostsIndex + "/";
    route += "text";
  } else if (pathname === "photos") {
    route += Explore.imagesPostsIndex + "/";
    route += "image";
  } else if (pathname === "videos") {
    route += Explore.vidoesPostsIndex + "/";
    route += "video";
  } else if (pathname === "asks") {
    route += Explore.askPostsIndex + "/";
    route += "ask";
  }

  api
    .get(route, config)
    .then((res) => {
      if (pathname === "recommended-for-you") {
        configureStore.dispatch(pushForYouPosts(res.data["for-youPosts"]));
        configureStore.dispatch(
          setForYouPostIndex(Explore.forYouPostsIndex + 10)
        );
      } else if (pathname === "trending") {
        configureStore.dispatch(pushTrendingPosts(res.data.trendingPosts));
        configureStore.dispatch(
          setTrendingPostIndex(Explore.trendingPostsIndex + 10)
        );
      } else if (pathname === "audios") {
        configureStore.dispatch(pushAudioPosts(res.data.audio));
        configureStore.dispatch(
          setAudioPostIndex(Explore.audioPostsIndex + 10)
        );
      } else if (pathname === "text") {
        configureStore.dispatch(pushTextPosts(res.data.trendingPosts));
        configureStore.dispatch(setTextPostIndex(Explore.textPostsIndex + 10));
      } else if (pathname === "photos") {
        configureStore.dispatch(pushImagePosts(res.data.trendingPosts));
        configureStore.dispatch(
          setImagesPostIndex(Explore.imagesPostsIndex + 10)
        );
      } else if (pathname === "videos") {
        configureStore.dispatch(pushVideosPosts(res.data.trendingPosts));
        configureStore.dispatch(
          setVideosPostIndex(Explore.vidoesPostsIndex + 10)
        );
      } else if (pathname === "asks") {
        configureStore.dispatch(pushAskPosts(res.data.trendingPosts));
        configureStore.dispatch(setAskPostIndex(Explore.askPostsIndex + 10));
      }
      window.addEventListener("scroll", checkScroll);
    })
    .catch((err) => {});
};

export { retrivePosts };
