import React , { useState}from 'react'
import { Link } from 'react-router-dom';
import "./Header.css";
import MenuIcon from '@material-ui/icons/MenuSharp';
import SearchIcon from '@material-ui/icons/SearchSharp';
import VideoCallIcon from '@material-ui/icons/VideoCallSharp';
import AppsIcon from '@material-ui/icons/AppsSharp';
import NotificationsIcon from '@material-ui/icons/NotificationsSharp';
import Avatar from '@material-ui/core/Avatar';
import MicIcon from '@material-ui/icons/MicSharp';
function Header() {

const [inputSearch , setInputSearch] = useState("");

    return (
        <div className="header">

        <div className="header__left">
            <MenuIcon/>
            <Link to="/" >
            <img className="header__logo" src="/logo.svg" alt="yt"/>
            </Link>
        </div>
            
<div className="header__middle ">

            <div className="header__input">
            
            <input className="input__area" onChange={e => setInputSearch(e.target.value)} value={inputSearch}placeholder="   Search" type="text"/>
            <Link to={`/search/${inputSearch}`} style={{ color: 'gray' }}>
            <SearchIcon className="header__inputbutton"/>
            
            
            </Link>
            
            </div>

            <MicIcon className="icon__mic"/>
           
           </div>
          
        
        
         <div className="header__icons">
         
            <VideoCallIcon className="head__icons"/>
            <AppsIcon className="head__icons"/>
            <NotificationsIcon className="head__icons"/>
            <Avatar className="head__icons" alt="Shivam Balwani"/>
        </div>


        </div>
    )
}

export default Header
