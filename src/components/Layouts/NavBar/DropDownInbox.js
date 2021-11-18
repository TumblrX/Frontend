import './DropDownInbox.scss';
import React from 'react';
import {NavLink} from 'react-router-dom';
import { NavbarIcons } from '../../UI/Icons';

function DropDownInbox(props) {
    return (
        <div className="smile">
                  <div className="header">
                    <span>username</span>
                    <NavLink to='/'>New Message</NavLink>
                  </div>
                  <div className="content">
                  <NavbarIcons.RiChatSmile3Fill/>
                    <span>Talk to tumblr</span>
                    

                  </div>
        </div>
    )
}

export default DropDownInbox;