import { setFlexesNumbers } from "../../redux/SearchReducer";
import configureStore from "../../redux/store";
import { retrieveSearchPosts } from "./SearchSectionServices";

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

  // it will be called when the Component is unmounted
  return () => {
    window.removeEventListener("resize", onResize);
    window.removeEventListener("scroll", checkScrollo);
  };
};

export { componentDidMount, onResize, checkScrollo };
