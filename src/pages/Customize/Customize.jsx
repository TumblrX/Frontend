/* eslint-disable func-names */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import SideBar from './Sidebar/SideBar';
import Body from './Body/Body';
import style from './Customize.module.scss';

const Customize = function () {
  return (
    <div className={style.customizeContainer}>
      <SideBar />
      <Body />
    </div>

  );
};
export default Customize;
