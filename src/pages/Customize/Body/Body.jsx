/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/function-component-definition */
import React, { useState } from 'react';
import style from './Body.module.scss';

const Body = function () {
  const [avatar, setAvatar] = useState('https://assets.tumblr.com/images/default_avatar/sphere_open_128.png');
  const [headerImage, setHeaderImage] = useState('https://assets.tumblr.com/images/default_header/optica_pattern_10_focused_v3.png?_v=eafbfb1726b334d86841955ae7b9221c');
  const [avatarData, sestavatarData] = useState('');
  const [headerImageData, setHeaderImageData] = useState('');
  const changeAvatar = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setAvatar(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
    sestavatarData(e.target.files[0]);
  };
  const changeHeaderImage = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setHeaderImage(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
    setHeaderImageData(e.target.files[0]);
  };
  return (
    <div className={style.bodyContainer}>
      <input type="file" onChange={changeAvatar} />
      <input type="file" onChange={changeHeaderImage} />
      <div
        className={style.backgroundWrapper}
        style={{
          background: `url(${headerImage}) center center`,
        }}
      />
      <img
        className={style.avatarImage}
        src={avatar}
        alt=""
        accept="image/*"
      />
      <div className={style.headerText}>
        <h2>     Taher   </h2>
        <p>      description    </p>
        <ul>
          <li>Posts </li>
          <li>Likes </li>
          <li>Following </li>
          <li>Ask me anything </li>
          <li>Submit a post </li>
          <li>Archive </li>
        </ul>
      </div>
    </div>
  );
};
export default Body;
