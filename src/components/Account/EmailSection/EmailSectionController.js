import { getUserInfo } from "./EmailSectionServices";
/**
   * retreive the data from the backend when the component mounted
   * @type {function}
   * @param {*} event
   * @returns {void} return nothing , it just a click event handler
   */
 const componentDidMount = () => {
  getUserInfo();
};


export {componentDidMount};