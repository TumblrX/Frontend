import styles from "./scss/ExploreNavbar.module.scss";
import { setSeachWord } from "../../../redux/SearchReducer";
import configureStore from "../../../redux/store";

/**
 * Handels the Click on the "more " button in the Explore
 * when click occurs on it the list should appear .
 * @type {function}
 * @param {void}
 * @returns {void} return nothing
 */

const onMoreClick = () => {
  let moreList = document.querySelector(`.${styles["more-list"]}`);
  if (moreList.classList.contains(`${styles["hide"]}`)) {
    moreList.style.display = "block";
  }

  document
    .querySelector(`.${styles["more-list"]}`)
    .classList.toggle(`${styles["hide"]}`);
};

const closeMore = function (e) {
  var container = document.querySelector(`.${styles["more-list"]}`);
  if (!container.contains(e.target)) {
    container.style.display = "none";
  }
};

/**
 * once the Component is mounted you should add the event handlers
 *
 * @type {function}
 * @param {void}
 * @returns {void} return nothing
 */
const componentDidMount = () => {
  document
    .querySelector(`.more-section`)
    .addEventListener("click", onMoreClick);
  document
    .querySelectorAll(`.${styles["more-list"]}> div`)
    .forEach((element) => {
      element.addEventListener("click", (event) => {
        document.querySelector(`.${styles["more-list"]}`).style.display =
          "none";

        

        // event.stopPropagation(); // stop action from propagation to the parent
      });
    });
  document.addEventListener("mouseup", closeMore);

  // if the function is called from the Search Component .
  if (window.location.pathname.split("/")[1] == "search") {
    const searchWord = window.location.pathname.split("/")[2];
    document.getElementById("searchTag").innerText = searchWord;
    configureStore.dispatch(setSeachWord(searchWord));
  }
  return () => {
    document.removeEventListener("mouseup", closeMore);
  };
};

export { onMoreClick, componentDidMount };
