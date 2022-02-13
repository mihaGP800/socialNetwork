import React from 'react';
import s from './NavBar.module.css'
import {NavLink} from "react-router-dom";

export const NavBar = () => {
    return (
        <nav className={s.nav}>

            <div><NavLink to="/Profile" className={navClick => navClick.isActive ? s.active : s.item}>Profile</NavLink></div>
            <div><NavLink to="/Messages" className={navClick => navClick.isActive ? s.active : s.item}>Messages</NavLink></div>
            <div><NavLink to="/News" className={navClick => navClick.isActive ? s.active : s.item}>News</NavLink></div>
            <div><NavLink to="/Music" className={navClick => navClick.isActive ? s.active : s.item}>Music</NavLink></div>
            <div><NavLink to="/Settings" className={navClick => navClick.isActive ? s.active : s.item}>Settings</NavLink></div>
        </nav>
    );
}