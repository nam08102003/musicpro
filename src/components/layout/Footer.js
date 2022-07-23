import React from 'react';
import { NavLink } from 'react-router-dom';
import { AiFillFacebook, AiFillInstagram, AiOutlineMail, AiFillTwitterSquare } from 'react-icons/ai';
const Footer = ({ MenuNav, LibraryNav }) => {
    return (
        <footer className="mt-40">
            <div className="wrapper-footer px-40">
                <div className="footer-top grid">
                    <div className="m-15 grid-2">
                        <h4 className="title text-upper">Menu</h4>
                        <ul>
                            {MenuNav.map((navLink, index) => {
                                return (
                                    <li key={index}>
                                        <NavLink className="title hover-button" to={navLink.href ? navLink.href : ''}>
                                            {navLink.name}
                                        </NavLink>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <div className="m-15 grid-2">
                        <h4 className="title text-upper">Library</h4>
                        <ul>
                            {LibraryNav.map((navLink, index) => {
                                return (
                                    <li key={index}>
                                        <NavLink className="title hover-button" to={navLink.href ? navLink.href : ''}>
                                            {navLink.name}
                                        </NavLink>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <div className="m-15 grid-2">
                        <h4 className="title text-upper">Top 100</h4>
                        <ul>
                            <li>
                                <NavLink className="title hover-button" to="/">
                                    Việt Nam
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="title hover-button" to="/">
                                    Âu Mỹ
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="title hover-button" to="/">
                                    Châu Á
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="title hover-button" to="/">
                                    Hàn Quốc
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-contact m-15 grid-4">
                        <h4>Contact</h4>
                        <div className="link-contact">
                            <span>
                                <AiFillFacebook />
                            </span>
                            <span>
                                <AiFillInstagram />
                            </span>
                            <span>
                                <AiOutlineMail />
                            </span>
                            <span>
                                <AiFillTwitterSquare />
                            </span>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="footer-bottom-content">
                        <p>Built by Lê Đức Nam</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
