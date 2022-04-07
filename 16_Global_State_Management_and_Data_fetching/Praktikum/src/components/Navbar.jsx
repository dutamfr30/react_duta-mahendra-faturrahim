import React from 'react'


export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-light">
                <div className="container-fluid">
                    <a className="nav-title navbar-brand ms-5 ps-5" href="#">
                        React Weekly
                    </a>
                    <form className="d-flex me-4">
                    <input className="form-control  me-2" type="search" placeholder="Search" aria-label="Search" />
                    <i className="icon bi bi-search pt-1 " type="submit"/>
                    {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
                </form>
                </div>
            </nav>
        </div>
    )
}
