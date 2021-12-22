import api from "../../api/api";
import configureStore from "../../redux/store";
import {
  pushTrendingPosts,
  pushForYouPosts,
  setAudioPostIndex,
  pushAudioPosts,
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
  console.log(window.location.pathname);
  const { Explore } = configureStore.getState();
  let pathname = window.location.pathname.split("/")[2];
  let route = `/api/user/explore/`;
  if (pathname === "trending") {
    route += Explore.trendingPostsIndex + "/";
    route += pathname;
    configureStore.dispatch(
      setTrendingPostIndex(Explore.trendingPostsIndex + 10)
    );
  } else if (pathname === "recommended-for-you") {
    route += Explore.forYouPostsIndex + "/";
    route += "for-you";
    configureStore.dispatch(
      setForYouPostIndex(Explore.trendingPostsIndex + 10)
    );
  } else if (pathname === "audios") {
    route += Explore.audioPostsIndex + "/";
    route += "audio";
    configureStore.dispatch(setAudioPostIndex(Explore.audioPostsIndex + 10));
    console.log(route);
  }

  api
    .get(route, config)
    .then((res) => {
      console.log(res);
      if (pathname === "recommended-for-you")
        configureStore.dispatch(pushForYouPosts(res.data["for-youPosts"]));
      else if (pathname === "trending")
        configureStore.dispatch(pushTrendingPosts(res.data.trendingPosts));
      else if (pathname === "audio")
        configureStore.dispatch(pushAudioPosts(res.data.audio));
    })
    .catch((err) => {
      console.log(err);
    });
};

export { retrivePosts };
