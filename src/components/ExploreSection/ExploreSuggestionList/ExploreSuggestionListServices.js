import {
  setDataItems,
  setTag,
  truncateItems,
  setFollowingList,
} from "../../../redux/suggestList";
import confiugreStore from "../../../redux/store";
import api from "../../../api/api";
import styles from "./scss/ExploreSuggestionList.module.scss";

const getTags = () => {
  let token = localStorage.getItem("token");
  let config = {
    headers: {
      Authorization: token,
    },
  };
  api
    .get("api/user/get-tags", config)
    .then((res) => {
      confiugreStore.dispatch(setDataItems(Object.values(res.data.tagsPhotos)));
      confiugreStore.dispatch(setTag(Object.keys(res.data.tagsPhotos)));
      api
        .get("api/user/info", config)
        .then((res) => {
          confiugreStore.dispatch(setFollowingList(res.data.followingTags));
        })
        .catch((err) => {});
    })
    .catch((err) => {
      console.log(err);
    });

  return () => {
    confiugreStore.dispatch(truncateItems());
  };
};

const followUnfollowTag = function (ele) {
  const card = ele.target.parentElement;
  let tagName = card.firstChild.innerText;
  tagName = tagName.slice(1);
  console.log(tagName);
  let token = localStorage.getItem("token");
  if (ele.target.innerText === "Follow") {
    ele.target.innerText = "Unfollow";

    let sentData = { tag: tagName };
    let config = {
      headers: {
        Authorization: token,
      },
    };
    api
      .post("api/user/follow-tag", sentData, config)
      .then((respone) => {
        console.log(respone);
      })
      .catch((err) => console.log(err));
  } else {
    ele.target.innerText = "Follow";
    let sentData = { tag: tagName };
    console.log(sentData);
    let config = {
      headers: {
        Authorization: token,
      },
    };
    api
      .post("api/user/unfollow-tag", sentData, config)
      .then((respone) => {
        console.log(respone);
      })
      .catch((err) => console.log(err));
  }
};

/**
 * this function handle the click on the arrows on the suggestion list
 * it just scrolls the suggestion list to right or left .
 *
 * @type {function}
 * @param {*} event
 * @returns {void}
 */
const onArrowClick = (event) => {
  let header = document.querySelector(`.${styles["suggestion-list"]}`);
  let after = document.querySelector(`.${styles["after"]}`);
  // console.log(event.target.parentElement);
  if (event.target.parentElement === after) {
    header.scrollLeft += 652;
  } else {
    header.scrollLeft -= 652;
  }
};

export { getTags, onArrowClick, followUnfollowTag };
