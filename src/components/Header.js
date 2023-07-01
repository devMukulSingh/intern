import React from 'react';
import { Link, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { AiFillHome } from "react-icons/ai";
import { AiFillPhone } from "react-icons/ai"
import { FcAbout } from "react-icons/fc"
import { AiFillDashboard } from "react-icons/ai";
import { FaStore } from "react-icons/fa"
import { IconContext } from "react-icons";

const Header = () => {
    return (
        <>
     
     <div className="col-sm-12 col-md-3 col-lg-2 nav-bar">

                <Link to="/" className=' text-white'>
                    <h3 className='brand-name'>Brand_Name</h3>
                </Link>
                <div className="nav-links ">
                    <ul className="nav-items p-0">
                        <NavLink className="nav-link" to="/"  >
                            <div className="nav-col d-flex flex-row align-items-center ">
                                <div className="nav-items mx-2 ">
                                    <IconContext.Provider value={{ color: "white", size: "2rem" }}>
                                        <AiFillHome />
                                    </IconContext.Provider>
                                </div>
                                <div>
                                    <li className="item1">Home</li>
                                </div>
                            </div>
                        </NavLink>

                        <NavLink className="nav-link" to="/dashboard">
                            <div className="nav-col d-flex flex-row align-items-center ">
                                <div className="nav-items mx-2">

                                    <IconContext.Provider value={{ color: "white", size: "2rem" }}>     <AiFillDashboard /></IconContext.Provider>
                                </div>
                                <div>
                                    <li className="item1">DashBoard</li>
                                </div>
                            </div>
                        </NavLink>

                        <NavLink className="nav-link" to="/store">
                            <div className="nav-col d-flex flex-row align-items-center ">
                                <div className="nav-items mx-2">

                                    <IconContext.Provider value={{ color: "white", size: "2rem" }}>  <FaStore /></IconContext.Provider>
                                </div>
                                <div>
                                    <li className="item1">Store</li>
                                </div>
                            </div>
                        </NavLink>

                        <NavLink className="nav-link" to="/contactus">
                            <div className="nav-col d-flex flex-row align-items-center ">
                                <div className="nav-items mx-2">

                                    <IconContext.Provider value={{ color: "white", size: "2rem" }}><AiFillPhone /></IconContext.Provider>
                                </div>
                                <div>
                                    <li className="item1">Contact Us</li>
                                </div>
                            </div>
                        </NavLink>
                        
                        <NavLink className="nav-link" to="/aboutus">
                            <div className="nav-col d-flex flex-row align-items-center ">
                                <div className="nav-items mx-2">

                                    <IconContext.Provider value={{ color: "white", size: "2rem" }}><FcAbout /></IconContext.Provider>
                                </div>
                                <div>
                                    <li className="item1">About Us</li>
                                </div>
                            </div>
                        </NavLink>

                        
                        



                    </ul>
                </div>
            </div>

        </>
    )
}

export default Header