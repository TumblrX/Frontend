/* eslint quotes: ["error","single"] */
/* eslint jsx-quotes: ["error", "prefer-single"] */
/* eslint-disable no-unused-vars */

import React, { useState } from 'react';
import { MdSettings } from 'react-icons/md';
import { IoIosArrowDown } from 'react-icons/io';
import classes from './FormCard.module.scss';
import avatar from '../../assets/Images/avatar.png';

const FormCard = function ({ children }) {
  const [selectedOption, setSelectedOption] = useState('Blog_1_ID');
  const [showOptions, setShowOptions] = useState(false);
  const toggleOptionsHandler = () => {
    setShowOptions((x) => !x);
  };
  const selectOptionHandler = (e) => {
    setSelectedOption(e.target.getAttribute('value'));
    console.log(e.target.getAttribute('value'));
  };
  return (
    <div className={classes.text}>
      <div className={classes.avatar}>
        <img src={avatar} alt='avatar' />
      </div>
      <div className={classes.form}>
        <header>
          <div onClick={toggleOptionsHandler}>
            {selectedOption}
            <IoIosArrowDown />
            {showOptions && (
              <ul onClick={selectOptionHandler}>
                <li value='Blog_1_ID'>Blog_1_ID</li>
                <li value='Blog_2_ID'>Blog_2_ID</li>
              </ul>
            )}
          </div>
          {/* <MdSettings /> */}
        </header>
        {children}
      </div>
    </div>
  );
};
export default FormCard;
