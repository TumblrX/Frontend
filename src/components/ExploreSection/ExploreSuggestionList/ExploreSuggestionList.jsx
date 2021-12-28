/* eslint-disable react/jsx-filename-extension */
import React from "react";
import styles from "./scss/ExploreSuggestionList.module.scss";
import img from "../../../assets/Images/icons8-chevron-right-60.png";
import img1 from "../../../assets/Images/icons8-chevron-right-60.png";
import { useEffect } from "react";
import ExploreSuggestionListCard from "./ExploreSuggestionListCard";
import api from "../../../api/api";
import { setDataItems, setTag } from "../../../redux/suggestList";
import confiugreStore from "../../../redux/store";
import { useSelector } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
/**
 * Component to render the whole suggestion list container in Explore page
 * @author Abdalla Mahmoud
 *
 * @component
 */
function ExploreSuggestionList() {
  const { items, tags } = useSelector((state) => state.suggestedList);
  useEffect(() => {
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
        confiugreStore.dispatch(
          setDataItems(Object.values(res.data.tagsPhotos))
        );
        // console.log(Object.keys(res.data.tagsPhotos));
        confiugreStore.dispatch(setTag(Object.keys(res.data.tagsPhotos)));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
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
  return (
    <div className={styles["suggestion-list"]}>
      <div className={styles["before"]} onClick={onArrowClick}>
        <img src={img} alt="" />
      </div>
      {items.map((value, index) => {
        if (value.length === 0) return <></>;
        if (value.length === 1)
          return (
            <ExploreSuggestionListCard
              img1={value[0]}
              img2={value[0]}
            />
          );
        else
          return (
            <ExploreSuggestionListCard
              img1={value[0]}
              img2={value[1]}
            />
          );
      })}
      {/* {Object.keys(items["0"]).map((value) => {
        if (items["0"][value].length === 2) {
          return (
            <ExploreSuggestionListCard
              tag={value}
              img1={items["0"][value][0]}
              img2={items["0"][value][1]}
            />
          );
        } else {
          return (
            <ExploreSuggestionListCard
              tag={value}
              img1={items["0"][value][0]}
              img2={items["0"][value][0]}
            />
          );
        }
      })} */}

      {/* {Object.keys(items['0']).map((value)=>{
        console.log(items['0'][value].length)
        if(items['0'][value].length===2){
          
        }
        else{

        }
      })} */}
      {/* {Object.keys(items).map((value, index) => {
        console.log(items['0']);
        // console.log(items[value]);
        if (items[value].length === 2)
          return (
            <ExploreSuggestionListCard
              tag={value}
              img1={items[value][0]}
              img2={items[value][1]}
            />
          );
        else
          return (
            <ExploreSuggestionListCard
              tag={value}
              img1={items[value][0]}
              img2={items[value][0]}
            />
          );
      })} */}

      {/* <ExploreSuggestionListCard />
      <ExploreSuggestionListCard />
      <ExploreSuggestionListCard />
      <ExploreSuggestionListCard />
      <ExploreSuggestionListCard />
      <ExploreSuggestionListCard />
      <ExploreSuggestionListCard />
      <ExploreSuggestionListCard />
      <ExploreSuggestionListCard />
      <ExploreSuggestionListCard />
      <ExploreSuggestionListCard />
      <ExploreSuggestionListCard />
      <ExploreSuggestionListCard />
      <ExploreSuggestionListCard />
      <ExploreSuggestionListCard />
      <ExploreSuggestionListCard /> */}

      <div className={styles["after"]} onClick={onArrowClick}>
        <img src={img1} alt="" />
      </div>
    </div>
  );
}

export default ExploreSuggestionList;
