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
    <div>
      <input type="file" onChange={changeAvatar} />
      <input type="file" onChange={changeHeaderImage} />
      <div style={{
        background: `url(${headerImage})`, backgroundSize: 'cover', height: '300px', width: '100vw',
      }}
      />
      <img
        src={avatar}
        alt=""
        accept="image/*"
        style={{
          height: '100px', width: '100px', borderRadius: '100%', transform: 'translate(450px, -70px)',
        }}
      />
    </div>
  );
};
export default Body;
