import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className='bg-light p-3 '>
            <NavLink className="nav-link container" to="/login">Login</NavLink>
            </div>
           <div className=''>
           <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
                <div className="container ">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/home">Home</NavLink></li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/blogs">Blogs</NavLink></li>
                        </ul>
                    </div>
                </div>
            </nav>
           </div>
        </div>
    );
};

export default Header;