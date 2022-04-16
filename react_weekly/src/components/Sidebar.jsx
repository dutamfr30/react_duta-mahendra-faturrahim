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

                <a className="menu-item" href="/introduction-react">
                    Introduction React
                </a>

                <a className="menu-item" href="/react-fundamental">
                    React Fundamental
                </a>

                <a className="menu-item" href="/react-routing">
                    React Routing
                </a>

                <a className="menu-item" href="/event-handling">
                    Event Handling
                </a>

                <a className="menu-item" href="/react-hook">
                    React Hook
                </a>

                <a className="menu-item" href="/react-form">
                    React Form
                </a>
                <a className="menu-item" href="/global-state">
                    Global State
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
