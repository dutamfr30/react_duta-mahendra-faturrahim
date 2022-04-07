import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';


export default function Sidebar() {
    return (
        <div>
            <Menu>
                <a className="menu-item" href="/">
                    Home
                </a>

                <a className="menu-item" href="#">
                    Introduction React
                </a>

                <a className="menu-item" href="#">
                    React Fundamental
                </a>

                <a className="menu-item" href="#">
                    React Routing
                </a>

                <a className="menu-item" href="#">
                    Event Handling
                </a>

                <a className="menu-item" href="#">
                    React Hook
                </a>

                <a className="menu-item" href="#">
                    React Form
                </a>
            </Menu>
            {/* <Link to="/" className="menu-item">
                Home
            </Link>
            <Link  to="#" className="menu-item">
                About
            </Link> */}
        </div>
        
        
    );
}
