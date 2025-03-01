import React from 'react'
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from "./HeaderOption";
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { logout } from '../features/userSlice';
import { useDispatch } from "react-redux";
import { auth } from '../body/firebase';


function Header() {


    const dispatch = useDispatch();

    const logoutOfApp = () => {
        console.log('hey there');
        dispatch(logout());
        auth.signOut();
    }

    return (
        <div className="header">
            <div className="header__left">
                <img src="https://krueger.ca/wp-content/uploads/2016/02/linkedin-logo.png" alt="" />

                <div className="header__search">
                <SearchIcon />
                <input type="text" placeholder="Search" />
                </div>
            </div>
            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title="Home" />
                <HeaderOption Icon ={SupervisorAccountIcon} title="My Network"/>
                <HeaderOption Icon={BusinessCenterIcon} title="Jobs"/>
                <HeaderOption Icon={ChatIcon} title="Messaging"/>
                <HeaderOption Icon={NotificationsIcon} title="Notifications"/>
                <HeaderOption 
                    avatar={true}
                    title="me" 
                    onClick={logoutOfApp}
                />
            </div>
        </div>
    )
}

export default Header
