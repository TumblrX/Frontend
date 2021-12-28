import { setDataItems, setTag } from "../../../redux/suggestList";
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
      // console.log("HIIIIIIIII", Object.values(res.data.tagsPhotos).length);
      confiugreStore.dispatch(setDataItems(Object.values(res.data.tagsPhotos)));
      confiugreStore.dispatch(setTag(Object.keys(res.data.tagsPhotos)));
    })
    .catch((err) => {
      console.log(err);
    });
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

export { getTags, onArrowClick };
