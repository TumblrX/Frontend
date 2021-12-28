/* eslint-disable func-names */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import SideBar from './Sidebar/SideBar';
import Body from './Body/Body';
import { useEffect } from 'react';
import style from './Customize.module.scss';
import readData from './CustomizeController'

const Customize = function () {

  // useEffect(() => {
  //   readData();
  // }, [])

  return (
    <div className={style.customizeContainer} id='customizeContainer'>
      <SideBar />
      <Body />
    </div>
  );
};
export default Customize;
