import styles from "./scss/ExploreNavbar.module.scss";

const onMoreClick = () => {
  document.querySelector(`.${styles["more-list"]}`).style.display = "block";
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
  document.addEventListener("mouseup", function (e) {
    var container = document.querySelector(`.${styles["more-list"]}`);
    if (!container.contains(e.target)) {
      container.style.display = "none";
    }
  });
};

export { onMoreClick, componentDidMount };
