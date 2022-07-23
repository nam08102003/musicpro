import React from 'react';
import { NavLink } from 'react-router-dom';
import { BsFillBellFill } from 'react-icons/bs';
const Header = ({ className, Nav, navPosition, hideNav, ...props }) => {
    return (
        <header>
            <div className="container">
                <div className="header-nav-inner">
                    <div className="header-nav-left">
                        <ul>
                            <li className="release-navLink">
                                <NavLink className="title-nav hover-button" to="/releases">
                                    New Releases
                                </NavLink>
                            </li>
                            <li className="shuffle-navLink">
                                <NavLink className="title-nav hover-button" to="/shuffle">
                                    Shuffle Play
                                </NavLink>
                            </li>
                            <li className="live-navLink">
                                <NavLink className="title-nav hover-button" to="/live">
                                    Live Podcasts
                                </NavLink>
                                <span className="fl-center font-bold">6</span>
                            </li>
                        </ul>
                    </div>
                    <div className="header-action-right">
                        <NavLink className="title-nav hover-button mx-15" to="/upgrade">
                            Upgrade Plan
                        </NavLink>
                        <div className="notification mx-15 fl-center">
                            <span>
                                <BsFillBellFill />
                            </span>
                        </div>
                        <div className="user mx-15 fl-center">
                            <div className="avatar">
                                <img alt="user" />
                            </div>
                            <div className="name">
                                <h5>Lê Nam</h5>
                                <span>Active</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
