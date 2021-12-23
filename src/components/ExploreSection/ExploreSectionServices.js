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
    // console.log(route);
  } else if (pathname === "photos") {
    route += Explore.imagesPostsIndex + "/";
    route += "image";
    // console.log(route);
  } else if (pathname === "videos") {
    route += Explore.vidoesPostsIndex + "/";
    route += "video";
    // console.log(route);
  } else if (pathname === "asks") {
    route += Explore.askPostsIndex + "/";
    route += "ask";
    // console.log(route);
  }

  api
    .get(route, config)
    .then((res) => {
      if (pathname === "recommended-for-you") {
        configureStore.dispatch(pushForYouPosts(res.data["for-youPosts"]));
        configureStore.dispatch(
          setForYouPostIndex(Explore.forYouPostsIndex + 10)
        );
        console.log(res);
        console.log("Iam in side recommended-for-you ", route);
        //console.log(res);
      } else if (pathname === "trending") {
        configureStore.dispatch(pushTrendingPosts(res.data.trendingPosts));
        configureStore.dispatch(
          setTrendingPostIndex(Explore.trendingPostsIndex + 10)
        );
        console.log(res);
        console.log("Iam in side trending", route);
      } else if (pathname === "audios") {
        console.log(route);
        configureStore.dispatch(pushAudioPosts(res.data.audio));
        configureStore.dispatch(
          setAudioPostIndex(Explore.audioPostsIndex + 10)
        );
        console.log("Iam in side audio ", route);
      } else if (pathname === "text") {
        configureStore.dispatch(pushTextPosts(res.data.trendingPosts));
        configureStore.dispatch(setTextPostIndex(Explore.textPostsIndex + 10));
        console.log("Iam in side text ", route);
      } else if (pathname === "photos") {
        configureStore.dispatch(pushImagePosts(res.data.trendingPosts));
        configureStore.dispatch(
          setImagesPostIndex(Explore.imagesPostsIndex + 10)
        );
        console.log("Iam in side photos ", route);
      } else if (pathname === "videos") {
        configureStore.dispatch(pushVideosPosts(res.data.trendingPosts));
        configureStore.dispatch(
          setVideosPostIndex(Explore.vidoesPostsIndex + 10)
        );
        console.log("Iam in side videos ", route);
      } else if (pathname === "asks") {
        configureStore.dispatch(pushAskPosts(res.data.trendingPosts));
        configureStore.dispatch(setAskPostIndex(Explore.askPostsIndex + 10));
        console.log("Iam in side asks ", route);
      }
      window.addEventListener("scroll", checkScroll);
    })
    .catch((err) => {
      console.log(err);
    });
};

export { retrivePosts };
