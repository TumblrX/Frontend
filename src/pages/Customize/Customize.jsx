import React from 'react';
import SideBar from './Sidebar/SideBar';
import Body from './Body/Body';
import { useEffect } from 'react';
import style from './Customize.module.scss';
import CustomizeController from './CustomizeController'
const Customize = function () {

  const {readData} = CustomizeController();

  useEffect( () => {
    const x = async ()=>{
      await readData();
    }    
    x();
  },[]);

  return (
    <div className={style.customizeContainer} id='customizeContainer'>
      <SideBar />
      <Body />
    </div>
  );
};
export default Customize;
