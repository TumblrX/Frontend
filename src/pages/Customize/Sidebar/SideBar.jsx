/* eslint-disable no-unused-vars */
/* eslint-disable func-names */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/function-component-definition */
import React, { useEffect } from 'react';
import style from './SideBar.module.scss';
import { BsFillPencilFill, BsQuestionCircleFill } from 'react-icons/bs';
import { useSelector, useDispatch } from 'react-redux';
import CustomizePageController from '../CustomizeController';
import { NavLink } from 'react-router-dom';


const SideBar = function () {
  const {
    settings, dataToSend,
  } = useSelector((state) => state.customize);

  const { 
        handler1,
        handler2,
        handler3,
        changeTitleFunc,
        changeTitle,
        changeDescriptionFunc,
        changeDescription,
        makeCircle,
        handleRadio,
        showHeaderImageFunc,
        stretchHeaderImageFunc,
        showAvatarFunc,
        showTitleFunc,
        showDescriptionFunc,
        handleCheckBoxes,
        changeAvatarHandler, 
        changeHeaderImageHandler,  
        saveHandler,
  } = CustomizePageController();

  const dispatch = useDispatch();

  useEffect(()=>{
    console.log(dataToSend);

    changeTitleFunc(settings.title);

    changeDescriptionFunc(settings.description);

    document.getElementById('customizeContainer').style.background =  settings.bgColor;
    document.getElementById('title').style.color =  settings.titleColor; 
    document.getElementById('description').style.color =  settings.titleColor; 
    document.getElementById('accent').style.color =  settings.accentColor; 
    document.getElementById('accent1').style.borderBottom =  `4px solid ${settings.accentColor}`;

    document.getElementById("showHeaderImage").checked = settings.showHeaderImage; 
    showHeaderImageFunc(settings.showHeaderImage);   

    document.getElementById("stretchHeaderImage").checked = settings.stretchHeaderImage;
    stretchHeaderImageFunc(settings.stretchHeaderImage);

    document.getElementById("showAvatar").checked = settings.showAvatar; 
    showAvatarFunc(settings.showAvatar);

    document.getElementById("showTitle").checked = settings.showTitle; 
    showTitleFunc(settings.showTitle);

    document.getElementById("showDescription").checked = settings.showDescription; 
    showDescriptionFunc(settings.showDescription);

    document.getElementById("useNewPostTypes").checked = settings.useNewPostTypes;
    document.getElementById("slidingHeader").checked = settings.slidingHeader; 
    document.getElementById("showNavigation").checked = settings.showNavigation; 
    document.getElementById("endlessScrolling").checked = settings.endlessScrolling; 
    document.getElementById("syntaxHighlighting").checked = settings.syntaxHighlighting; 
    document.getElementById("relatedPosts").checked = settings.relatedPosts; 
    document.getElementById("circle").checked = settings.avatarShapeCircle; 
    document.getElementById("square").checked = !settings.avatarShapeCircle; 
    makeCircle(settings.avatarShapeCircle);
  },) 
 
  return (
    <div className={style.sidebarContainer}>
      <div className={style.header}>
        <NavLink to="/dashboard" style={{ background: '#6a6e72', padding: '3px 9px', fontSize: '13px', borderRadius: '2px' }} >Exit</NavLink>
        <div> Edit theme </div>
        <button onClick={saveHandler}> Save </button>
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
            <input type="text" name="" id="" defaultValue={settings.title} onChange={changeTitle} />
          </li>
          <li>
            <div className={style.li}>         Description      </div>
            <input type="text" name="" id="" defaultValue={settings.description}  onChange={changeDescription} />
          </li>
          <li>
            <div className={style.li}>
              {' '}
              Header Image
              <div style={{float:'right'}}>
                <label for="upload-photo"><BsFillPencilFill color="#acacac" fontSize="15px" float="right" cursor='pointer' /></label>
                <input id='upload-photo'
                style ={{
                  opacity: '0',
                  position: 'absolute',
                  zIndex: '-1',
                }}
                type="file" onChange={changeHeaderImageHandler} />             
              </div>
            </div>
          </li>
          <li>
            <div className={style.li}>
              {' '}
              Avatar
              <div style={{float:'right'}}>
                <label for="upload-photo2"><BsFillPencilFill color="#acacac" fontSize="15px" float="right" cursor='pointer' /></label>
                <input id='upload-photo2'
                style ={{
                  opacity: '0',
                  position: 'absolute',
                  zIndex: '-1',
                }}
                type="file" onChange={changeAvatarHandler} />             
              </div>
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
              Background color
              <input type="color" value={settings.bgColor} onChange={handler1} />
            </div>
          </li>
          <li>
            <div className={style.li}>
              Title color
              <input type="color" value={settings.titleColor} onChange={handler2} />

            </div>
          </li>
          <li>
            <div className={style.li}>
              Accent color
              <input type="color" value={settings.accentColor} onChange={handler3} />
            </div>
          </li>
          <li>
            <div className={style.li}>
              Show header image
              <span className={style.checkbox}>
                <label className={style.switch}>
                  <input id = 'showHeaderImage' type="checkbox" value='1' onChange={handleCheckBoxes}/>
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
                  <input id = 'stretchHeaderImage' type="checkbox" value='2' onChange={handleCheckBoxes} />
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
                  <input id = 'showAvatar' type="checkbox" value='3' onChange={handleCheckBoxes} />
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
                  <input id = 'showTitle' type="checkbox" value='4' onChange={handleCheckBoxes} />
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
                  <input id = 'showDescription' type="checkbox" value='5' onChange={handleCheckBoxes}/>
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
                  <input id = 'useNewPostTypes' type="checkbox" value='6' onChange={handleCheckBoxes}/>
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
                  <input id = 'slidingHeader' type="checkbox" value='7' onChange={handleCheckBoxes}/>
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
                  <input id = 'showNavigation' type="checkbox" value='8' onChange={handleCheckBoxes}/>
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
                  <input id = 'endlessScrolling' type="checkbox" value='9' onChange={handleCheckBoxes}/>
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
                  <input id = 'syntaxHighlighting' type="checkbox" value='10' onChange={handleCheckBoxes}/>
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
                  <input id = 'relatedPosts' type="checkbox" value='11' onChange={handleCheckBoxes}/>
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
