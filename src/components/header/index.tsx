"use client";

import { faPlus, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useState } from "react";

import "./header.scss";

export const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const menu = mobileMenuOpen ? (
        <div className="menu__mobile">
            <div className="menu">
                <ul>
                    <li className="head-tail">
                        <div>Home</div>
                        <div className="close" onClick={toggleMobileMenu}>
                            <FontAwesomeIcon icon={faXmark} width={18} />
                        </div>
                    </li>
                    <li className="split-two">
                        <div>Sign in</div>
                        <div>Signup</div>
                    </li>
                    <li>Provider Sign in</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div className="menu__bg" onClick={toggleMobileMenu} />
        </div>
    ) : (
        <></>
    );

    return (
        <header id="header" className="site-header">
            <div className="left-header">
                <div className="menu__btn__mobile" onClick={toggleMobileMenu}>
                    <FontAwesomeIcon icon={faBars} width={20} />
                </div>
                <div className="site__brand__logo">
                    <a title="Logo" href="home-restaurant.html">
                        <img src="images/logo.svg" alt="nextclass" />
                    </a>
                </div>
            </div>
            <div className="right-header">
                <div className="right-header__link">
                    <a title="Home" href="#">
                        Home
                    </a>
                </div>
                <div className="right-header__link">
                    <a title="Login" href="#">
                        Sign in
                    </a>
                </div>
                <div className="right-header__button btn">
                    <a title="Add place" href="add-place.html">
                        <FontAwesomeIcon icon={faPlus} width={18} />
                        <span>Add Listing</span>
                    </a>
                </div>
            </div>
            {menu}
        </header>
    );
};
