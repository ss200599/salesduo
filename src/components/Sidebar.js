import React from 'react'
import '../App.css'
import {SidebarData} from './SidebarData'
// import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import logo from './logo.png'

function Sidebar() {
    return <div className="Sidebar">
            <div className="logo">
            <a href="#home" onClick={()=> {window.location.pathname= ''}}><img src={logo} alt="Logo" /></a><span>&nbsp;&nbsp; Artemis </span>
            <div className="line" />
            </div>
        <ul className="SidebarList">
            {SidebarData.map(val=>{
                return (
                <div className="section">
                    <div className="header">{val.header}</div>
                    {val.child.map((val,key)=>{
                    return (
                    <li key={key} className="row" id={window.location.pathname === val.link ? "active" : ""} onClick={()=> {window.location.pathname= val.link}}>
                        <div id="icon">{val.icon}</div><div id="title"> {val.title} </div>
                    </li>
                    );
                    })}
                </div>
                );
            })}
        </ul>
    </div>
}

export default Sidebar