import React from 'react';
import Sidebar from '../components/Sidebar';
import HeaderRoute from '../components/HeaderRoute';
import BodyRoute from '../components/BodyRoute';
import './components/Route.css';

export default function Home(props) {
    return (
        <div id="App">
            <Sidebar />
            <HeaderRoute text='Home'/>
            <BodyRoute content='Halaman To Do App'/>
        </div>
    );
}
