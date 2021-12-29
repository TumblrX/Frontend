import { useSelector } from 'react-redux';
import React from 'react';
import style from './Body.module.scss';

const Body = function () { 
  const {
    settings,
  } = useSelector((state) => state.customize);  

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
