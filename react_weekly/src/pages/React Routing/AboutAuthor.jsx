import React from 'react';
import Sidebar2 from '../components/Sidebar2';
import HeaderRoute from '../components/HeaderRoute';
import BodyRoute from '../components/BodyRoute';
import './components/Route.css';

export default function About() {
    return (
        <div id="App">
            <Sidebar2 />
            <HeaderRoute text='About Author'/>
            <BodyRoute content='About The Author'/>
            <p id="content">This app was developed by someone, a self-taught web developer and technical writer.</p>
        </div>
    );
}
