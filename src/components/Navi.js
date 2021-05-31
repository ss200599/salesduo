import React, { useState } from 'react'
import './Navi.css'
import SettingsIcon from '@material-ui/icons/Settings';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar } from '@material-ui/core';

function Navi() {

    const [dropdown, setDropdown] = useState(false)

    const handleClick=()=>{
        setDropdown(!dropdown)
        console.log(dropdown);
    }
    

    return (
        <nav className="header_navbarItems">
            <div className="searchbox_sm">
                <SearchIcon />
                <input type="text" className="searchbox_sm_input" placeholder="Type to search..." />
            </div>
            <ul className='header_nav_menu'>

                <li><a className="header_nav_links" href="/"><SettingsIcon /></a></li>
                <li><a className="header_nav_links" href="/"><ChatBubbleOutlineIcon /></a></li>
                <li><a className="header_nav_links" href="/"> <NotificationsNoneIcon /></a></li>
                <li><div className="prof header_nav_links"><h6>Thomas Brown</h6> <p>Developer</p></div> </li>
                <li> <a className="header_nav_links" href="/"><Avatar /></a></li>
                <li>
                    <a className="header_nav_links" onClick={handleClick}><ExpandMoreIcon/></a>
                        <div className="dropdown">
                            <div id="myDropdown" className={dropdown ? 'dropdown-content show' : 'dropdown-content'}>
                                <a className="header_nav_links" href="#home">Home</a>
                                <a className="header_nav_links" href="#contact">Contact</a>
                                <a className="header_nav_links" href="#logout">Logout</a>
                            </div>
                        </div>
                </li>
            </ul>
        </nav>
    )
}

export default Navi
