import styles from "./scss/ExploreNavbar.module.scss";

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
  return () => {
    document.removeEventListener("mouseup", closeMore);
    console.log("I have been unmounted ");
  };
};

export { onMoreClick, componentDidMount };
