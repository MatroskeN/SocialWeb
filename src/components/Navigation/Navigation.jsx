import Nav_style from './Navigation.module.css'
import {useState} from "react";
import {NavLink} from "react-router-dom";

let passive_item = `${Nav_style.nav_item}`;

function Navigation() {

    return (
        <nav className={Nav_style.nav}>
            <NavLink to="/profile" className={passive_item} activeClassName={Nav_style.active}>Profile</NavLink>
            <NavLink to="/messages" className={passive_item} activeClassName={Nav_style.active}>Messages</NavLink>
            <NavLink to="/news" className={passive_item} activeClassName={Nav_style.active}>News</NavLink>
            <NavLink to="/settings" className={passive_item} activeClassName={Nav_style.active}>Settings</NavLink>
        </nav>
    )
}

export default Navigation;
