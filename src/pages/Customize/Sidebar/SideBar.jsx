/* eslint-disable no-unused-vars */
/* eslint-disable func-names */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/function-component-definition */
import React, { useState } from 'react';
import style from './SideBar.module.scss';
import { BsFillPencilFill, BsQuestionCircleFill } from 'react-icons/bs';

const SideBar = function () {
  const [color1, setColor1] = useState('#acacac');
  const [color2, setColor2] = useState('#12acac');
  const [color3, setColor3] = useState('#aca87c');
  const [avatar1, setAvatar1] = useState('');
  const handler1 = (e) => {
    setColor1(e.target.value);
  };
  const handler2 = (e) => {
    setColor2(e.target.value);
  };
  const handler3 = (e) => {
    setColor3(e.target.value);
  };
  const changeAvatar1 = (e) => {
    setAvatar1(e.target.files[0]);
    console.log(e.target.files[0]);
  };
  return (
    <div className={style.sidebarContainer}>
      <div className={style.header}>
        <button> Exit </button>
        <div> Edit theme </div>
        <button> Save </button>
      </div>
      <div className={style.sidebarWrapper}>
        <div className={style.apperance}>
          {' '}
          APPERRANCE OPTIONS
          {' '}
          <BsQuestionCircleFill />
        </div>
        <ul>
          <li>
            <div className={style.li}>         Title       </div>
            <input type="text" name="" id="" defaultValue="default" />
          </li>
          <li>
            <div className={style.li}>         Description      </div>
            <input type="text" name="" id="" defaultValue="default" />
          </li>
          <li>
            <div className={style.li}>
              {' '}
              Header Image
              <button className={style.pen}>
                <BsFillPencilFill color="#acacac" fontSize="15px" float="right" />
              </button>
            </div>
          </li>
          <li>

            <div className={style.li}>
              Avatar
              <button className={style.pen}>
                <BsFillPencilFill color="#acacac" fontSize="15px" float="right" />
              </button>
            </div>
          </li>
          <li>
            <div className={style.li}>
              Avatar Shape
              <span className={style.avatarShape}>
                <input type="radio" id="square" name="avatar_shape" value="square" checked />
                <input type="radio" id="circle" name="avatar_shape" value="circle" />

              </span>

            </div>
          </li>
          <li>
            <div className={style.li}>
              Title font
            </div>
          </li>
          <li>
            <div className={style.li}>
              Background color
              <input type="color" value={color1} onChange={handler1} />
            </div>
          </li>
          <li>
            <div className={style.li}>
              Title color
              <input type="color" value={color2} onChange={handler2} />

            </div>
          </li>
          <li>
            <div className={style.li}>
              Accent color
              <input type="color" value={color3} onChange={handler3} />
            </div>
          </li>
          <li>
            <div className={style.li}>
              Show header image
              <span className={style.checkbox}>
                <label className={style.switch}>
                  <input type="checkbox" />
                  <span className={`${style.slider} ${style.round}`} />
                </label>
              </span>
            </div>
          </li>
          <li>
            <div className={style.li}>
              Stretch header image
              <span className={style.checkbox}>
                <label className={style.switch}>
                  <input type="checkbox" />
                  <span className={`${style.slider} ${style.round}`} />
                </label>
              </span>
            </div>
          </li>
          <li>
            <div className={style.li}>
              Show avatar
              <span className={style.checkbox}>
                <label className={style.switch}>
                  <input type="checkbox" />
                  <span className={`${style.slider} ${style.round}`} />
                </label>
              </span>
            </div>
          </li>
          <li>
            <div className={style.li}>
              Show title
              <span className={style.checkbox}>
                <label className={style.switch}>
                  <input type="checkbox" />
                  <span className={`${style.slider} ${style.round}`} />
                </label>
              </span>
            </div>
          </li>
          <li>
            <div className={style.li}>
              Show description
              <span className={style.checkbox}>
                <label className={style.switch}>
                  <input type="checkbox" />
                  <span className={`${style.slider} ${style.round}`} />
                </label>
              </span>
            </div>
          </li>
          <li>
            <div className={style.li}>
              Use new post types
              <BsQuestionCircleFill color="#acacac" />
              <span className={style.checkbox}>
                <label className={style.switch}>
                  <input type="checkbox" />
                  <span className={`${style.slider} ${style.round}`} />
                </label>
              </span>
            </div>
          </li>
        </ul>
        SIdebar
      </div>
    </div>
  );
};

export default SideBar;
