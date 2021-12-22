import api from "../../api/api";
import configureStore from "../../redux/store";
import { pushPosts } from "../../redux/ExploreRecuder";
const retrivePosts = function (postsIndex) {
  api
    .get(`/api/user/explore/${postsIndex}/trending`)
    .then((res) => {
      console.log(res);

      configureStore.dispatch(pushPosts(res.data.trendingPosts));
    })
    .catch((err) => {
      console.log(err);
    });
};

export { retrivePosts };
