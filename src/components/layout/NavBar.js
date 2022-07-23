import React from 'react';
import { NavLink } from 'react-router-dom';
import ButtonMode from '../elements/ButtonMode';
import Logo from './partials/Logo';

const NavBar = ({ className, MenuNav, LibraryNav, CustomNav, navPosition, hideNav, ...props }) => {
    return (
        <div className="navbar">
            <div className="container">
                <div className="navbar-logo">
                    <Logo />
                </div>
                <div className="navbar-content">
                    <div className="m-15">
                        <h4 className="title text-upper">Menu</h4>
                        <ul>
                            {MenuNav.map((navLink, index) => {
                                const Icon = navLink.icon;
                                return (
                                    <li key={index}>
                                        <NavLink
                                            className="title font-bold hover-button"
                                            to={navLink.href ? navLink.href : ''}
                                        >
                                            <Icon />
                                            {navLink.name}
                                        </NavLink>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <div className="m-15">
                        <h4 className="title text-upper">Library</h4>
                        <ul>
                            {LibraryNav.map((navLink, index) => {
                                const Icon = navLink.icon;
                                return (
                                    <li key={index}>
                                        <NavLink
                                            className="title font-bold hover-button"
                                            to={navLink.href ? navLink.href : ''}
                                        >
                                            <Icon />
                                            {navLink.name}
                                        </NavLink>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <div className="m-15">
                        <h4 className="title text-upper">Customize</h4>
                        <ul>
                            {CustomNav.map((navLink, index) => {
                                const Icon = navLink.icon;
                                return (
                                    <li key={index}>
                                        <NavLink
                                            className="title font-bold hover-button"
                                            to={navLink.href ? navLink.href : ''}
                                        >
                                            <Icon />
                                            {navLink.name}
                                        </NavLink>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
                <div className="navbar-button fl-center">
                    <ButtonMode />
                    <label for="checkbox" className="label">
                        <div className="ball"></div>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
