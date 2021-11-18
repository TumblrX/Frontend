import './DropDownProfile.scss'
import React,{useState} from 'react';
import {NavLink} from 'react-router-dom';
import { NavbarIcons } from '../../UI/Icons';
import {useDetectClickOutside} from 'react-detect-click-outside';

function DropDownProfile() {

   
    return (
        
            <div className="profile" >
            <div className="account">
                <span>Account</span>
                <NavLink to="/">Log out</NavLink>   
            </div>
            <ul className="account-list">
                <NavLink to="/likes"><NavbarIcons.AiFillHeart/>Likes</NavLink>
                <NavLink to="/following"><NavbarIcons.RiUserFollowFill/>Following</NavLink>
                <NavLink to="/settings/account"><NavbarIcons.FiSettings/>Settings</NavLink>
                <NavLink to="/blog/view/changes"><NavbarIcons.GiPresent/>What's new</NavLink>
                <NavLink to="/help"><NavbarIcons.IoMdHelpCircle/>Help</NavLink>
                <span><NavbarIcons.BsFillKeyboardFill/>Keyboard shortcuts</span>
                <span><NavbarIcons.BsFillPaletteFill/>Change Palette</span>

            </ul>
            <div className="tumblrs">
                <span>Tumblrs</span>
                <NavLink to="/new/blog">+ New</NavLink>
            </div>
            <ul className="tumblrs-list">
                <NavLink to='/blog/username'>Posts</NavLink>
                <NavLink to='/blog/username/followers'>Followers</NavLink>
                <NavLink to='/blog/username/activity'>Activity</NavLink>
                <NavLink to='/blog/username/drafts'>Drafts</NavLink>
                <NavLink to='/blog/username/queue'>Queue</NavLink>
                <NavLink to='/settings/blog/username'>Edit Apperance</NavLink>
            </ul>
            <div className="links">
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/apps'>Apps</NavLink>
                <NavLink to='/policy/terms-of-services'>Legal</NavLink>
                <NavLink to='/policy/privacy'>Privacy</NavLink>
            </div>
            </div>
    
    )
}

export default DropDownProfile;