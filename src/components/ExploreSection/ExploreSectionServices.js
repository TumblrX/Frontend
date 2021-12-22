import api from "../../api/api";
import configureStore from "../../redux/store";
import { pushTrendingPosts } from "../../redux/ExploreRecuder";
const retrivePosts = function (postsIndex, page) {
  let route = `/api/user/explore/${postsIndex}/`;
  if (page === "trending") {
      route+=page;
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
