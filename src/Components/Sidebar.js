import React from 'react'
import '../Css/Sidebar.css'
import TwitterIcon from "@material-ui/icons/Twitter"
import HomeIcon from "@material-ui/icons/Home";
import {SidebarOption} from './index';
import { ListAlt, MailOutline, MoreHoriz, NotificationsNone, PermIdentity, Search } from '@material-ui/icons';
import { Button } from '@material-ui/core';

const Sidebar = () => {
  return (
    <div className='sidebar'>
    <TwitterIcon className="sidebar__twitterIcon"/>
      
    <SidebarOption active Icon={HomeIcon} text="Home"/>
    <SidebarOption Icon={Search} text="Explore"/>
    <SidebarOption Icon={NotificationsNone} text="Notifications"/>
    <SidebarOption Icon={MailOutline} text="Messages"/>
    <SidebarOption Icon={ListAlt} text="Lists"/>
    <SidebarOption Icon={PermIdentity} text="Profile"/>
    <SidebarOption Icon={MoreHoriz} text="More"/>

    <Button variant="outlined" className="sidebar__tweet" fullWidth>Tweet</Button>
    </div>
  )
}

export default Sidebar
