import './DropDownActivity.scss'
import React from 'react';
import {NavLink} from 'react-router-dom';
import { NavbarIcons } from '../../UI/Icons';

function DropDownActivity(props) {
    return (
        <div className="activity">
            <div className="header">
                <span>username</span>
                <NavLink to='/blog/username/activity'>---------</NavLink>
            </div>
            <div className="content">
            <NavLink to='/dashboard'>All</NavLink>
            <NavLink to='/dashboard'>Mentions</NavLink>
            <NavLink to='/dashboard'>Reblogs</NavLink>
            <NavLink to='/dashboard'>Replies</NavLink>
            </div>
            <div className="footer">
                <NavbarIcons.GiElectric/>
                <span>Check out this tab when you make a post to see Likes, Reblogs, and new followers.</span>
            </div>
        </div>
    );
}

export default DropDownActivity;