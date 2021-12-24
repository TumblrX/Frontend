/* eslint-disable no-unused-vars */
/* eslint-disable func-names */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/function-component-definition */
import React, { useState , useEffect } from 'react';
import style from './SideBar.module.scss';
import { BsFillPencilFill, BsQuestionCircleFill } from 'react-icons/bs';

const SideBar = function () {
  const [color1, setColor1] = useState('#000000');
  const [color2, setColor2] = useState('#ffffff');
  const [color3, setColor3] = useState('#aca87c');
  const [avatar1, setAvatar1] = useState('');

  useEffect(()=>{
    document.getElementById('customizeContainer').style.background =  color1;
    document.getElementById('title').style.color =  color2; 
    document.getElementById('description').style.color =  color2; 
    document.getElementById('accent').style.color =  color3; 
    document.getElementById('accent1').style.borderBottom =  `4px solid ${color3}`; 
  })
  const handler1 = (e) => {
    setColor1(e.target.value);
    document.getElementById('customizeContainer').style.background =  e.target.value;
  };
  const handler2 = (e) => {
    setColor2(e.target.value); 
    document.getElementById('title').style.color =  e.target.value; 
    document.getElementById('description').style.color =  e.target.value; 
  };
  const handler3 = (e) => {
    setColor3(e.target.value);
    document.getElementById('accent').style.color =  e.target.value; 
    document.getElementById('accent1').style.borderBottom =  `4px solid ${e.target.value}`; 
  };
  const changeTitle = (e) =>{
    document.getElementById('title').innerHTML =  e.target.value; 
  }
  const changeDescription = (e) =>{
    document.getElementById('description').innerHTML =  e.target.value; 
  }
  const handleRadio = (e) =>{
    console.log(e.target.value);
    if (e.target.value === 'circle'){
      console.log( document.getElementById('avatar').style.borderRaduis);
      document.getElementById('avatar').style.borderRadius  =  '100%'; 
      document.getElementById('avatar').style.MozBorderRadius  =  '100%'; 
      document.getElementById('avatar').style.WebkitBorderRadius  =  '100%'; 
    }else{
      console.log( document.getElementById('avatar').style.borderRaduis);
      document.getElementById('avatar').style.borderRadius  =  '0'; 
      document.getElementById('avatar').style.MozBorderRadius  =  '0'; 
      document.getElementById('avatar').style.WebkitBorderRadius  =  '0'; 
    }
  }
  const handleCheckBoxes = (e) =>{
    const value = e.target.value;
    const checked = e.target.checked;
    if(e.target.value === '1'){
      if(checked){
        document.getElementById('headerImage').style.display  = 'block'; 
        document.getElementById('avatar').style.marginTop  = '0px'; 
      }else{
        document.getElementById('headerImage').style.display  = 'none'; 
        document.getElementById('avatar').style.marginTop  = '100px'; 
      }
    }
    else if(e.target.value === '2'){
      if(checked){
        document.getElementById('headerImage').style.width  = '100%'; 
        document.getElementById('headerImage').style.marginTop  = '0px'; 
        document.getElementById('headerImage').style.marginBottom  = '0px'; 
        document.getElementById('headerImage').style.height  = '300px'; 
      }else{
        document.getElementById('headerImage').style.width  = '60%'; 
        document.getElementById('headerImage').style.marginTop  = '50px'; 
        document.getElementById('headerImage').style.marginBottom  = '65px'; 
        document.getElementById('headerImage').style.height  = '200px'; 
      }
    }
    else if(e.target.value === '3'){
      if(checked){
        document.getElementById('avatar').style.display  = 'block'; 
        document.getElementById('avatar').style.transform = 'translate(0, -70px)';
        document.getElementById('headerText').style.transform = 'translate(0, -70px)';        
      }else{
        document.getElementById('avatar').style.transform = 'translate(0,0)';
        document.getElementById('headerText').style.transform = 'translate(0, 0)';
        document.getElementById('avatar').style.display  = 'none'; 
      }
    }
    else if(e.target.value === '4'){
      if(checked){
        document.getElementById('title').style.display  = 'block';         
      }else{
        document.getElementById('title').style.display  = 'none'; 
      }
    }
    else if(e.target.value === '5'){
      if(checked){
        document.getElementById('description').style.display  = 'block';         
      }else{
        document.getElementById('description').style.display  = 'none'; 
      }
    }
    
  }
  
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
            <input type="text" name="" id="" defaultValue="default" onChange={changeTitle} />
          </li>
          <li>
            <div className={style.li}>         Description      </div>
            <input type="text" name="" id="" defaultValue="default" onChange={changeDescription} />
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
                <input type="radio" id="square" name="avatar_shape" value="square"  onChange={handleRadio} />
                <input type="radio" id="circle" name="avatar_shape" value="circle"  onChange={handleRadio} />
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
                  <input type="checkbox" value='1' onChange={handleCheckBoxes}/>
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
                  <input type="checkbox" value='2' onChange={handleCheckBoxes} />
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
                  <input type="checkbox" value='3' onChange={handleCheckBoxes} />
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
                  <input type="checkbox" value='4' onChange={handleCheckBoxes} />
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
                  <input type="checkbox" value='5' onChange={handleCheckBoxes}/>
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
                  <input type="checkbox" value='6' onChange={handleCheckBoxes}/>
                  <span className={`${style.slider} ${style.round}`} />
                </label>
              </span>
            </div>
          </li>
        </ul>
        <div className={style.apperance}>
          THEME OPTIONS
        </div>
        <ul>          
          <li>
            <div className={style.li}>
              Sliding header
              <span className={style.checkbox}>
                <label className={style.switch}>
                  <input type="checkbox" value='7' onChange={handleCheckBoxes}/>
                  <span className={`${style.slider} ${style.round}`} />
                </label>
              </span>
            </div>
          </li>
          <li>
            <div className={style.li}>
              Show navigation
              <span className={style.checkbox}>
                <label className={style.switch}>
                  <input type="checkbox" value='8' onChange={handleCheckBoxes}/>
                  <span className={`${style.slider} ${style.round}`} />
                </label>
              </span>
            </div>
          </li>
          <li>
            <div className={style.li}>
              Endless scrolling
              <span className={style.checkbox}>
                <label className={style.switch}>
                  <input type="checkbox" value='9' onChange={handleCheckBoxes}/>
                  <span className={`${style.slider} ${style.round}`} />
                </label>
              </span>
            </div>
          </li>
          <li>
            <div className={style.li}>
              Syntax highlighting
              <span className={style.checkbox}>
                <label className={style.switch}>
                  <input type="checkbox" value='10' onChange={handleCheckBoxes}/>
                  <span className={`${style.slider} ${style.round}`} />
                </label>
              </span>
            </div>
          </li>
          <li>
            <div className={style.li}>
              Related Posts
              <span className={style.checkbox}>
                <label className={style.switch}>
                  <input type="checkbox" value='11' onChange={handleCheckBoxes}/>
                  <span className={`${style.slider} ${style.round}`} />
                </label>
              </span>
            </div>
          </li>          
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
