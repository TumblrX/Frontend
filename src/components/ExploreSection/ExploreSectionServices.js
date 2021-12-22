import api from "../../api/api";
import configureStore from "../../redux/store";
import { pushTrendingPosts } from "../../redux/ExploreRecuder";
import { setTrendingPostIndex } from "../../redux/ExploreRecuder";
const retrivePosts = function (postsIndex, page) {
  const { Explore } = configureStore.getState();

  let route = `/api/user/explore/`;
  if (page === "trending") {
    route += Explore.trendingPostsIndex + "/";
    route += page;
    configureStore.dispatch(
      setTrendingPostIndex(Explore.trendingPostsIndex + 10)
    );
  }

  api
    .get(route)
    .then((res) => {
      console.log(res);

      configureStore.dispatch(pushTrendingPosts(res.data.trendingPosts));
    })
    .catch((err) => {
      console.log(err);
    });
};

export { retrivePosts };
