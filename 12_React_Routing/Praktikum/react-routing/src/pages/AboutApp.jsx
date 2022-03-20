import React from 'react';
import Sidebar2 from './components/Sidebar2';
import HeaderRoute from './components/HeaderRoute';
import BodyRoute from './components/BodyRoute';
import './components/Route.css';

export default function About() {
    return (
        <div id="App">
            <Sidebar2 />
            <HeaderRoute text='About App'/>
            <BodyRoute content='About App'/>
            <p id="content">In this App you can add, delete, submit and edit items. To esit items, simply double click on it. Once you are done, press the enter key to resubmit. This app will persist your data in the browser local storage. Sho whether you reload, close your app or reopened it, you still have access to your todo items.</p>
        </div>
    );
}
