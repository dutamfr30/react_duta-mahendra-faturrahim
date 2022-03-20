import React from 'react';
import Sidebar2 from './components/Sidebar2';
import HeaderRoute from './components/HeaderRoute';
import BodyRoute from './components/BodyRoute';
import './components/Route.css';

export default function About() {
    return (
        <div id="App">
            <Sidebar2 />
            <HeaderRoute text='About'/>
            <BodyRoute content='Halaman About'/>
        </div>
    );
}
