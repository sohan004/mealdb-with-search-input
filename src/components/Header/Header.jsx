import React from 'react';
import { Link, NavLink, Outlet } from "react-router-dom";

const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container">
                    <h1 className=" fw-bolder" href="#">Meal DB</h1>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item me-4 ">
                                <NavLink className={({isActive})=> isActive ? 'active nav-link  bg-success rounded p-1 bg-opacity-25 ' : 'nav-link'} aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item me-4">
                                <NavLink className={({isActive})=> isActive ? 'active nav-link  bg-success rounded p-1 bg-opacity-25 ' : 'nav-link'} to="/food">food</NavLink>
                            </li>
                            <li className="nav-item me-4">
                                <NavLink className={({isActive})=> isActive ? 'active nav-link  bg-success rounded p-1 bg-opacity-25 ' : 'nav-link'} to="/contact">cantact</NavLink>
                            </li>
                            <li className="nav-item me-4">
                                <NavLink className={({isActive})=> isActive ? 'active nav-link  bg-success rounded p-1 bg-opacity-25 ' : 'nav-link'} to="/about">about</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet></Outlet>
        </>
    );
};

export default Header;