/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/function-component-definition */
import { useSelector, useDispatch } from 'react-redux';
import React, { useState } from 'react';
import style from './Body.module.scss';
// import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import readData from './../CustomizeController'

const Body = function () { 
  const {
    settings,
  } = useSelector((state) => state.customize);  

  // useEffect(() => {
  //   readData();
  // }, [])
  
  return (
    <div className={style.bodyContainer} >      
      <div
        id  = 'headerImage'
        className={style.backgroundWrapper}
        style={{
          background: `url(${settings.headerImage}) center center`,
        }}
      />
      <img id='avatar'
        className={style.avatarImage}
        src={settings.avatar}
        alt=""
        accept="image/*"
      />
      <div className={style.headerText} id='headerText'>
        <h2 id = 'title' >     Taher   </h2>
        <p id = 'description' >      description    </p>
        <ul id = 'accent'>
          <li id='accent1' >Posts </li>
          <li>Likes </li>
          <li>Following </li>
          <li>Ask me anything </li>
          <li>Submit a post </li>
          <li >Archive </li>
        </ul>
      </div>
    </div>
  );
};
export default Body;
