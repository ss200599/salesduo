import React from 'react'
import DashboardIcon from '@material-ui/icons/Dashboard';
import LanguageIcon from '@material-ui/icons/Language';
import AccountBoxOutlinedIcon from '@material-ui/icons/AccountBoxOutlined';
import MenuBookOutlinedIcon from '@material-ui/icons/MenuBookOutlined';
import AppsIcon from '@material-ui/icons/Apps';
import InsertDriveFileOutlinedIcon from '@material-ui/icons/InsertDriveFileOutlined';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import InboxOutlinedIcon from '@material-ui/icons/InboxOutlined';
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';
import ListIcon from '@material-ui/icons/List';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';

export const SidebarData = [
    {
        header:'MAIN',
        child:[
            {
                title:'Dashboard',
                icon:<DashboardIcon />,
                link:'/dashboard',
            },
            {
                title:'Discover',
                icon:<LanguageIcon />,
                link:'/discover',
            },
            {
                title:'Users',
                icon:<AccountBoxOutlinedIcon />,
                link: '/users'
            },
            {
                title:'Documents',
                icon:<MenuBookOutlinedIcon />,
                link:'/documents'
            },
            {
                title:'Applications',
                icon:<AppsIcon />,
                link:'/applications'
            },
            {
                title:'Pages',
                icon:<InsertDriveFileOutlinedIcon />,
                link:'/pages'
            },
        ]
    }, 
    {
        header:'SECONDARY',
        child:[
            {
                title:'Support Center',
                icon:<HelpOutlineIcon />,
                link:'/support'
            },
            {
                title:'Inbox',
                icon:<InboxOutlinedIcon />,
                link:'/inbox'
            },
            {
                title:'File Manager',
                icon:<FileCopyOutlinedIcon />,
                link:'/filemanager'
            },
            {
                title:'Data List',
                icon:<ListIcon />,
                link:'/datalist'
            },
        ]
    },
    {
        header:'\n',
        child:[
            {
                title:'Settings',
                icon:<SettingsIcon />,
                link:'/settings'
            },
            {
                title:'Log Out',
                icon:<ExitToAppOutlinedIcon />,
                link:'/logout'
            }
        ]
    }
    
]
