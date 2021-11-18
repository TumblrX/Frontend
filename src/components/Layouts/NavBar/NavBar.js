import './NavBar.scss';
import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import { NavbarIcons } from '../../UI/Icons';
import List from './List';
import DropDownInbox from './DropDownInbox';
import DropDownActivity from './DropDownActivity';
import DropDownProfile from './DropDownProfile';



const NavBar = () => {


  const [title,setTitle] = useState('');
  const [isShown,setIsShown] = useState(false);
  const [isSearch,setSearch] = useState(false);
  const [isInbox,setInbox] = useState(false);
  const [isActivity,setActivity] = useState(false);
  const [isProfile,setProfile] = useState(false);


  const barsClickHandler = () => setIsShown(!isShown)
  const searchClickhHandler = () => setSearch(!isSearch)
  const inboxClickHandler = () =>{
    setInbox(!isInbox)
    setActivity(false)
    setProfile(false)
  }
  const activityClickHandler = () => {
    setInbox(false)
    setActivity(!isActivity)
    setProfile(false)
  }  
  const profileClickHandler = () =>{
    setInbox(false)
    setActivity(false)
    setProfile(!isProfile)
  }


  const onChangeHandler = (e) => {
      setTitle(e.target.value);
      
  } 


    return (

          <div className="page">
                {/* <div className={`navbar ${darkMode?"navbar-dark":""}`}> */}
                <div className="navbar">
                <div className="container">

                  <div className='bars' onClick={barsClickHandler}>
                         {isShown ? <NavbarIcons.ImCross/> : <NavbarIcons.GiHamburgerMenu/>} 
                        
                  </div> 
                  <div className="search-icon" onClick={searchClickhHandler}>
                        <span>{isSearch ? <NavbarIcons.ImCross/>  : <NavbarIcons.BiSearch/>}</span>
                  </div>
                  <div className="container-1">
                    {!isSearch && <div className="logo">
                    <NavLink to='/dashboard'><NavbarIcons.FaTumblr/></NavLink>
                    </div>}
                    <div className="search-bar">
                      <div className="search-bar-icon"><NavbarIcons.BiSearch/></div>
                      <input id="myText" type="text" placeholder="Search Tumblr" value={title} onChange={onChangeHandler}></input>
                    </div>
                    {isSearch && <div className="search-bar-small">
                      <input id="myText" type="text" placeholder="Search Tumblr" value={title} onChange={onChangeHandler}></input>
                    </div>}
                  </div>
                  <div className="container-2">
                    <div className="icons">
                      <NavLink to='/dashboard'><NavbarIcons.AiFillHome/></NavLink>
                      <NavLink to='/explore/recommended-for-you'><NavbarIcons.MdExplore/></NavLink>
                      <NavLink to='/inbox'><NavbarIcons.IoIosMail/></NavLink>
                      <span onClick={inboxClickHandler}><NavbarIcons.RiChatSmile3Fill/></span>
                      <span onClick={activityClickHandler}><NavbarIcons.GiElectric/></span>
                      <span onClick={profileClickHandler}><NavbarIcons.BsFillPersonFill/></span>
                    </div>
                    <div className="new-post-navbar">
                    <NavLink to="/new"><NavbarIcons.FaPencilAlt/></NavLink>
                    </div>
                  </div>
                </div>
              </div>
              {isShown && <List/>} 
              {isInbox && <DropDownInbox/>}
              {isActivity && <DropDownActivity/>}
              {isProfile && <DropDownProfile/>}
          </div>    
        )
  
};




export default NavBar;
