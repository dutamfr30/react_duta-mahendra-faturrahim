import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';

export default function Sidebar() {
    return (
        <Menu> 
            <Link to="/" className="menu-item">
                Home
            </Link>
            <Link  to="/about/about-app" className="menu-item">
                About App
            </Link>
            <Link  to="/about/about-author" className="menu-item">
                About Author
            </Link>
        </Menu>
    );
}
