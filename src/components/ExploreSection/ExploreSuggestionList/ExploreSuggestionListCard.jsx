/* eslint-disable react/jsx-filename-extension */
import React from "react";
import img1 from "../../../assets/Images/avatar.png";
import styles from "./scss/ExploreSuggestionList.module.scss";
import { followUnfollowTag } from "./ExploreSuggestionListServices";
import { useSelector } from "react-redux";
import { unfollow } from "../../Blog/Followers/followerSection/followservice";
/**
 * Component to render the suggestion list card  in Explore page
 * @author Abdalla Mahmoud
 *
 * @component
 */
function ExploreSuggestionListCard(props) {
  const { followingList } = useSelector((state) => state.suggestedList);
  return (
    <div
      className={styles["suggestion-card"]}
      style={{ backgroundColor: `${props.background}` }}
    >
      <div className={styles["card-tag"]}>#{props.tag}</div>
      <div className={styles["card-imgs-container"]}>
        <img
          src={props.img1}
          alt=""
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = img1;
          }}
        />
        <img
          src={props.img2}
          alt=""
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = img1;
          }}
        />
      </div>
      <button
        data-tesid="follow-tag"
        style={{ color: `${props.color}` }}
        onClick={followUnfollowTag}
      >
        {followingList.includes(props.tag) && <>UnFollow </>}
        {!followingList.includes(props.tag) && <>Follow </>}
      </button>
    </div>
  );
}

export default ExploreSuggestionListCard;
