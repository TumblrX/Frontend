/**
 * Component to render the post button in the new post editor
 * @author Yousef Elshabrawy
 *
 * @component
 */
/* eslint-disable no-nested-ternary */
/* eslint quotes: ["error","single"] */
/* eslint jsx-quotes: ["error", "prefer-single"] */
/* eslint-disable no-unused-vars */

import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import classes from './PostButton.module.scss';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PostButton = function ({ setSelectedOption }) {
  const { formIsValid, postState } = useSelector((state) => state.newTextPost);

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
    if(window.screen.width>970) history.goBack();
  };
  return (
    <div className={classes.post}>
      <button disabled={!formIsValid} onClick={buttonClickHandler}>
        {postState === 'published' ? 'Post now' : postState === 'draft' ? 'Save as draft' : 'Post privately'}
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
