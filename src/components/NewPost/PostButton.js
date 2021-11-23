/* eslint quotes: ["error","single"] */
/* eslint jsx-quotes: ["error", "prefer-single"] */
/* eslint-disable no-unused-vars */

import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import classes from './PostButton.module.scss';

const PostButton = function ({ formIsValid }) {
  const [selectedOption, setSelectedOption] = useState('Post');
  const [showOptions, setShowOptions] = useState(false);
  const toggleOptionsHandler = () => {
    setShowOptions((x) => !x);
  };
  const selectOptionHandler = (e) => {
    setSelectedOption(e.target.getAttribute('value'));
  };
  return (
    <div className={classes.post}>
      <button disabled={!formIsValid}>{selectedOption}</button>
      <div onClick={toggleOptionsHandler}>
        <IoIosArrowDown />
        {showOptions && (
          <ul onClick={selectOptionHandler}>
            <li value='Post'>Post now</li>
            <li value='Save draft'>Save as draft</li>
            <li value='Post privately'>Post privately</li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default PostButton;
