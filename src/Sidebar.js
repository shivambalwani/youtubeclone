import React from 'react'
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import HomeIcon from '@material-ui/icons/HomeSharp';
import WhatshotIcon from '@material-ui/icons/WhatshotSharp';
import SubscriptionsIcon from '@material-ui/icons/SubscriptionsSharp';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrarySharp';
import HistoryIcon from '@material-ui/icons/HistorySharp';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideoSharp';
import WatchLaterIcon from '@material-ui/icons/WatchLaterSharp';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAltSharp';
import ExpandMoreIcon from '@material-ui/icons/ExpandMoreSharp';
function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow  selected Icon={HomeIcon} title="Home"/>
            <SidebarRow  Icon={WhatshotIcon}title="Trending"/>
            <SidebarRow Icon={SubscriptionsIcon}title="Subscription"/>
            <hr/>
            <SidebarRow   Icon={VideoLibraryIcon} title="Library"/>
            <SidebarRow   Icon={HistoryIcon} title="History"/>
            <SidebarRow   Icon={OndemandVideoIcon} title="Your Videos"/>
            <SidebarRow   Icon={WatchLaterIcon} title="Watch Later"/>
            <SidebarRow   Icon={ThumbUpAltIcon} title="Liked Videos"/>
            <SidebarRow   Icon={ExpandMoreIcon} title="Show More"/>
            <hr/>
        </div>
    )
}

export default Sidebar
