/* eslint-disable no-useless-concat */

import axios from "axios";

/**
 * It is a centeral function for retreiving Data for Explore page in all the Different aspect in the Explore
 * such as (for-you , trending , text and so on )
 * @type {function}
 * @param {void}
 * @returns {void} return nothing
 */
const retrivePosts = async function (route, pathname) {
  let token = localStorage.getItem("token");
  let config = {
    headers: {
      Authorization: token,
    },
  };
  try {
    const response = await axios.get(route, config);
    if (pathname === "recommended-for-you") {
      return "200 " + "Return data For you";
    } else if (pathname === "trending") {
      return "200 " + "Return data For trending";
    } else if (pathname === "audios") {
      return "200 " + "Return audio data ";
    } else if (pathname === "text") {
      return "200 " + "Return text data ";
    } else if (pathname === "photos") {
      return "200 " + "Return photos data ";
    } else if (pathname === "videos") {
      return "200 " + "Return videos data ";
    } else if (pathname === "asks") {
      return "200 " + "Return asks data ";
    }
    else{
        return 500
    }
  } catch (err) {
    return 500;
  }
};

export { retrivePosts };
