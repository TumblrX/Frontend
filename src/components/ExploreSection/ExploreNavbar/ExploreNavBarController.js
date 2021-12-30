import styles from "./scss/ExploreNavbar.module.scss";
import exploreStyles from "../scss/ExploreSection.module.scss";
import asideStyles from "../../ExploreAside/scss/ExploreAside.module.scss";
import sectionStyles from "../../../pages/Explore/scss/explore.module.scss";
import { setSeachWord } from "../../../redux/SearchReducer";
import configureStore from "../../../redux/store";
import { setFlexesNumbers } from "../../../redux/ExploreRecuder";

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
    // let finalSearchWord = "";
    // const searchWord = window.location.pathname.split("/")[2];
    // let actualSearchWord = searchWord.split("%20");
    // actualSearchWord = actualSearchWord.filter((x) => x !== "");
    // actualSearchWord.forEach((val) => {
    //   finalSearchWord += val + " ";
    // });
    let finalSearchWord = "";
    const searchWord = window.location.pathname.split("/")[2];
    let actualSearchWord = localStorage.getItem("actualSearch");
    actualSearchWord = actualSearchWord.split(" ");
    actualSearchWord = actualSearchWord.filter((x) => x !== "");
    actualSearchWord.forEach((val) => {
      finalSearchWord += val + " ";
    });
    document.getElementById("searchTag").innerText = finalSearchWord;
    configureStore.dispatch(setSeachWord(searchWord));
  }
  return () => {
    document.removeEventListener("mouseup", closeMore);
  };
};

const changeView = function () {
  console.log("Hi  I am here ");

  let grid = document.querySelectorAll(`.${styles["grid-icons"]}`);
  let firstSpan = grid[0];
  let secondSpan = grid[1];
  const firstSpanView = firstSpan.getAttribute("clicked");
  console.log(firstSpanView);
  if (firstSpanView === "true") {
    firstSpan.setAttribute("clicked", "false");
    secondSpan.setAttribute("clicked", "true");
    const container = document.querySelector(
      `.${sectionStyles["explore-container"]}`
    );
    container.classList.remove(`${sectionStyles["explore-container"]}`);
    container.classList.add(
      `${sectionStyles["explore-container-second-prespective"]}`
    );
    container.setAttribute("view", "narrow");
    const section = document.querySelector(
      `.${exploreStyles["explore-section"]}`
    );
    section.classList.remove(`${exploreStyles["explore-section"]}`);
    section.classList.add(
      `${exploreStyles["explore-section-second-prespective"]}`
    );
    const aside = document.querySelector(`.${asideStyles["explore-aside"]}`);
    aside.classList.remove(`${asideStyles["explore-aside"]}`);
    aside.classList.add(`${asideStyles["explore-aside-second-prespective"]}`);

    secondSpan.firstChild.setAttribute("fill", "RGB(255,255,255,1)");
    firstSpan.firstChild.setAttribute("fill", "RGB(255,255,255,.65)");
    configureStore.dispatch(setFlexesNumbers(1));
    console.log(container)
  } else {
    secondSpan.setAttribute("clicked", "false");
    firstSpan.setAttribute("clicked", "true");
    const container = document.querySelector(
      `.${sectionStyles["explore-container-second-prespective"]}`
    );
    container.classList.add(`${sectionStyles["explore-container"]}`);
    container.classList.remove(
      `${sectionStyles["explore-container-second-prespective"]}`
    );
    container.setAttribute("view", "wide");
    const section = document.querySelector(
      `.${exploreStyles["explore-section-second-prespective"]}`
    );
    section.classList.add(`${exploreStyles["explore-section"]}`);
    section.classList.remove(
      `${exploreStyles["explore-section-second-prespective"]}`
    );

    const aside = document.querySelector(
      `.${asideStyles["explore-aside-second-prespective"]}`
    );
    aside.classList.add(`${asideStyles["explore-aside"]}`);
    aside.classList.remove(
      `${asideStyles["explore-aside-second-prespective"]}`
    );

    firstSpan.firstChild.setAttribute("fill", "RGB(255,255,255,1)");
    secondSpan.firstChild.setAttribute("fill", "RGB(255,255,255,.65)");
    if (window.innerWidth <= 910) {
      configureStore.dispatch(setFlexesNumbers(1));
    } else if (window.innerWidth <= 1364) {
      configureStore.dispatch(setFlexesNumbers(2));
    } else if (window.innerWidth <= 1830) {
      configureStore.dispatch(setFlexesNumbers(3));
    } else {
      configureStore.dispatch(setFlexesNumbers(4));
    }
    // if (window.innerWidth <= 990) {
    //   container.style.justifyContent = "center";
    //   // to be compatible with the media query
    //   // it will be helpful when you trigger between
    //   // the view while you are in the samll window mode
    // }
  }
};

export { onMoreClick, componentDidMount, changeView };
