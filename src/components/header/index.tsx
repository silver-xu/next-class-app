import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import "./header.scss";

export const Header = () => (
    <header id="header" className="site-header">
        <a
            title="Logo"
            href="home-restaurant.html"
            className="site__brand__logo"
        >
            <img src="images/logo.svg" alt="nextclass" />
        </a>
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
    </header>
);
