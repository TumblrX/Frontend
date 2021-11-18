import React, { useState } from 'react';
import classes from './FormCard.module.scss';
import avatar from '../../assets/Images/avatar.png';
import { MdSettings } from 'react-icons/md';
import { IoIosArrowDown } from 'react-icons/io';

const FormCard = (props) => {
  const [selectedOption, setSelectedOption] = useState('lyousefelshabrawy');
  const [showOptions, setShowOptions] = useState(false);
  const toggleOptionsHandler = () => {
    setShowOptions((showOptions) => !showOptions);
  };
  const selectOptionHandler = (e) => {
    setSelectedOption(e.target.getAttribute('value'));
  };
  return (
    <div className={classes.text}>
      <div className={classes.avatar}>
        <img src={avatar} alt='avatar' />
      </div>
      <div className={classes.form}>
        <header>
          <div onClick={toggleOptionsHandler}>
            {selectedOption} <IoIosArrowDown />
            {showOptions && (
              <ul onClick={selectOptionHandler}>
                <li value='lyousefelshabrawy'>lyousefelshabrawy</li>
                <li value='llyousefelshabrawy'>llyousefelshabrawy</li>
              </ul>
            )}
          </div>
          <MdSettings />
        </header>
        {props.children}
      </div>
    </div>
  );
};
export default FormCard;
