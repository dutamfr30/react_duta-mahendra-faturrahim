import Introduction from '../assets/img/IntroductionReactWeb.png';
import Fundamental from '../assets/img/ReactFundamentalWeb.png';
import Routing from '../assets/img/ReactRoutingWeb.png';
import Handling from '../assets/img/EventHandlingWeb.png';
import Hook from '../assets/img/ReactHookWeb.png';
import Form from '../assets/img/ReactFormWeb.png';
import Global from '../assets/img/GlobalStateWeb.png'; 
import WeeklyCard from './WeeklyCard';
import Navbar from './Navbar';
import Sidebar from "./Sidebar";
import { useState } from 'react';

export default function Home({weeklys}) {
    const [searchItem, setSearchItem] = useState("");
    return(
        <div>
            <nav className="navbar navbar-light">
                <div className="container-fluid">
                    <a className="nav-title navbar-brand ms-5 ps-5" href="/
                    ">
                        How to be an Ideal Top Search React JS Front-End Engineer (Kelas C)
                    </a>
                    <form className="d-flex me-4" action="http://localhost:3000" method="get">
                    <input className="form-control  me-2" type="search" placeholder="Search" aria-label="Search" onChange={(event) => {setSearchItem(event.target.value)}} />
                    <span id="search-addon">
                        <i className="icon bi bi-search pt-1 " type="submit"/>
                    </span>
                </form>
                </div>
            </nav>
            <Sidebar />
            <h1>React Weekly</h1>
            <div className="row">
                {weeklys.filter((weekly) => {
                if (searchItem == "") {
                    return weekly
                } else if (weekly.btn.toLowerCase().includes(searchItem.toLocaleLowerCase())){
                    return weekly
                }
            }).map((weekly)=> <WeeklyCard weekly={weekly}/>)}
            </div>
            
            
            
        </div>
        
    )
}