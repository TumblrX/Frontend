/* eslint-disable no-nested-ternary */
/* eslint quotes: ["error","single"] */
/* eslint jsx-quotes: ["error", "prefer-single"] */
/* eslint-disable no-unused-vars */

import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import classes from './PostButton.module.scss';
import { useHistory } from 'react-router-dom';

const PostButton = function ({ formIsValid, selectedOption, setSelectedOption }) {
  const [showOptions, setShowOptions] = useState(false);
  const history = useHistory();
  const toggleOptionsHandler = () => {
    setShowOptions((x) => !x);
  };
  const selectOptionHandler = (e) => {
    setSelectedOption(e.target.getAttribute('value'));
  };
  const buttonClickHandler = () => {
    history.goBack();
    history.goBack();
  };
  return (
    <div className={classes.post}>
      <button disabled={!formIsValid} onClick={buttonClickHandler}>
        {selectedOption === 'published' ? 'Post now' : selectedOption === 'draft' ? 'Save as draft' : 'Post privately'}
      </button>
      <div onClick={toggleOptionsHandler}>
        <IoIosArrowDown />
        {showOptions && (
          <ul onClick={selectOptionHandler}>
            <li value='published'>Post now</li>
            <li value='draft'>Save as draft</li>
            <li value='private'>Post privately</li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default PostButton;
