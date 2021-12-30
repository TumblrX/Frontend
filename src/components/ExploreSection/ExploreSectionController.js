import { retrivePosts } from "./ExploreSectionServices";
import { setFlexesNumbers } from "../../redux/ExploreRecuder";
import configureStore from "../../redux/store";
import sectionStyles from "../../pages/Explore/scss/explore.module.scss"

/**
 * this function is used to update the state when resizing the window
 * updating the number of flexes container of the posts
 * @type {function}
 * @param {void}
 * @returns {void} return nothing
 */
const onResize = () => {
  let container = document.querySelector(
    `.${sectionStyles["explore-container"]}`
  );
  if(container===null){
    return 
    // that means that the container has the second class . 
    
  }
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
const checkScroll = () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    window.removeEventListener("scroll", checkScroll);
    // no more retrived data until the last request response
    retrivePosts();
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
  retrivePosts();
  window.addEventListener("scroll", checkScroll);
  // it will be called when the Component is unmounted
  return () => {
    window.removeEventListener("resize", onResize);
  };
};

export { componentDidMount, onResize, checkScroll };
