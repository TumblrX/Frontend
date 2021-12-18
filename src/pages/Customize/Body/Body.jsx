/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/function-component-definition */
import React, { useState } from 'react';
import style from './Body.module.scss';

const Body = function () {
  const [avatar1, setAvatar1] = useState('https://assets.tumblr.com/images/default_avatar/sphere_open_128.png');
  const [imageData, sstImageData] = useState('');
  const changeAvatar1 = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setAvatar1(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
    sstImageData(e.target.files[0]);

    console.log(e.target.files[0]);
    console.log(imageData);
  };
  return (
    <div>
      <input type="file" onChange={changeAvatar1} />
      <img src={avatar1} alt="" accept="image/*" />
    </div>
  );
};
export default Body;
