import { retrivePosts } from "./ExploreSectionServices";
import { setFlexesNumbers } from "../../redux/ExploreRecuder";
import configureStore from "../../redux/store";

/**
 * this function is used to update the state when resizing the window
 * updating the number of flexes container of the posts
 * @type {function}
 * @param {void}
 * @returns {void} return nothing
 */
const onResize = () => {
    console.log("Iam heree ")
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
 * once the Component is mounted you should add onresize function on the window to handle
 * the flexes numbers
 * @type {function}
 * @param {void}
 * @returns {void} return nothing
 */

const componentDidMount = function () {
  onResize(); // First call to set the state ;
  window.addEventListener("resize", onResize);
  retrivePosts();
  window.addEventListener("scroll", () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      retrivePosts()
    }
  });
  // it will be called when the Component is unmounted
  return () => {
    window.removeEventListener("resize", onResize);
  };
};

export { componentDidMount, onResize };
