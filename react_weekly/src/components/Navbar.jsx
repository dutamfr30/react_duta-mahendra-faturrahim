import React from 'react'
import { useState } from 'react'


export default function Navbar() {
    const [searchItem, setSearchItem] = useState("");

    return (
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
        </div>
    )
}
