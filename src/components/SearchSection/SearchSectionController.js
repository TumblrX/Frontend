import { setFlexesNumbers } from "../../redux/SearchReducer";
import configureStore from "../../redux/store";
import { retrieveSearchPosts } from "./SearchSectionServices";
import styles from "../ExploreSection/ExploreNavbar/scss/ExploreNavbar.module.scss";
import exploreStyles from "../ExploreSection/scss/ExploreSection.module.scss";
import asideStyles from "../ExploreAside/scss/ExploreAside.module.scss";
import sectionStyles from "../../pages/Explore/scss/explore.module.scss";

/**
 * this function is used to update the state when resizing the window
 * updating the number of flexes container of the posts
 * @type {function}
 * @param {void}
 * @returns {void} return nothing
 */
const onResize = () => {
  if (window.innerWidth <= 910) {
    configureStore.dispatch(setFlexesNumbers(1));
  } else if (window.innerWidth <= 1364) {
    configureStore.dispatch(setFlexesNumbers(2));
  } else if (window.innerWidth <= 1830) {
    configureStore.dispatch(setFlexesNumbers(3));
  } else {
    configureStore.dispatch(setFlexesNumbers(4));
  }
};

/**
 * check if the user scroll to the end of the page , it will retrieve more data
 * @type {function}
 * @param {void}
 * @returns {void} return nothing
 */
const checkScrollo = () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    window.removeEventListener("scroll", checkScrollo);
    // no more retrived data until the last request response
    retrieveSearchPosts();
  }
};

/**
 * once the Component is mounted you should add onresize function on the window to handle
 * the flexes numbers
 * @type {function}
 * @param {void}
 * @returns {void} return nothing
 */

const componentDidMount = function () {
  onResize(); // First call to set the state ;
  window.addEventListener("resize", onResize); // it should be added one time as well as scroll Event handler
  retrieveSearchPosts();
  window.addEventListener("scroll", checkScrollo);
  document.querySelector(`.${styles["page-name"]}`).innerHTML =
    window.location.pathname.split("/")[3] +
    `<span class=${styles["arrow"]}>^</span>`;
  // it will be called when the Component is unmounted
  return () => {
    window.removeEventListener("resize", onResize);
    window.removeEventListener("scroll", checkScrollo);
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
    console.log(container);
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

export { componentDidMount, onResize, checkScrollo,changeView };
