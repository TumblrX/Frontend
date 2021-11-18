import './List.scss';
import React from 'react';
import {NavLink} from 'react-router-dom';
import { NavbarIcons } from '../../UI/Icons';

function List(props) {
    return (
        <div className="list" >
                  <div className="new-post">
                    <NavLink to='/new'><NavbarIcons.FaPencilAlt/>Create a Post</NavLink>
                  </div>
                  <div className="list-icons">
                      <ul>
                        <NavLink to='/dashboard'><NavbarIcons.AiFillHome/>Dashboard</NavLink>
                        <NavLink to='/explore/recommended-for-you'><NavbarIcons.MdExplore/>Explore</NavLink>
                        <NavLink to='/inbox'><NavbarIcons.IoIosMail/>Inbox</NavLink>
                        <NavLink to='/messaging' ><NavbarIcons.RiChatSmile3Fill/>Messaging</NavLink> 
                        <NavLink to='/blog.username/activity'><NavbarIcons.GiElectric/>Activity</NavLink>
                        <NavLink to='/likes'><NavbarIcons.AiFillHeart/>Likes</NavLink>
                        <NavLink to='/following'><NavbarIcons.RiUserFollowFill/>Following</NavLink>    
                        <NavLink to='/setting'><NavbarIcons.FiSettings/>Setting</NavLink>
                        <NavLink to='/help'><NavbarIcons.IoMdHelpCircle/>Help</NavLink>
                        <NavLink to='/'><NavbarIcons.BsFillPaletteFill/>Change Palette</NavLink>
                      </ul>
                  </div>
                  
                  <div className="blog-word">
                      <p>Blogs</p>
                  </div>
                  <div className="blogs">
                      <div className="username">Username</div>
                      <ul>
                      <NavLink to='/blog/username'>Posts</NavLink>
                      <NavLink to='/blog/username/followers'>Followers</NavLink>
                      <NavLink to='/blog/username/activity'>Activity</NavLink>
                      <NavLink to='/blog/username/drafts'>Drafts</NavLink>
                      <NavLink to='/blog/username/queue'>Queue</NavLink>
                      <NavLink to='/settings/blog/username'>Edit Apperance</NavLink>
                      </ul>
                  </div>
                  <div className="links">
                  <NavLink to='/about'>About</NavLink>
                  <NavLink to='/apps'>Apps</NavLink>
                  <NavLink to='/policy/terms-of-services'>Legal</NavLink>
                  <NavLink to='/policy/privacy'>Privacy</NavLink>

                  </div>
              </div>
    );
}

export default List;