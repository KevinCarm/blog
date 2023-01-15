import { Fragment, useState } from "react";
import "bulma/css/bulma.css";
import logo from "../assets/twitter.svg";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const [menuClick, setMenuClick] = useState(false);

    const menuClasses = `${
        menuClick ? "navbar-burger is-active" : "navbar-burger"
    }`;

    const onMenuClickHandler = () => {
        setMenuClick(prev => !prev);
    };

    const mobileMenu = (
        <div class='navbar-start mt-6'>
            <a class='navbar-item'>
                <NavLink to='/home' >Home</NavLink>
            </a>
            <a class='navbar-item'>
                <NavLink to='/profile' >Profile</NavLink>
            </a>

            <div class='navbar-end'>
                <div class='navbar-item'>
                    <div class='buttons'>
                        <a class='button is-primary'>
                            <strong>Sign up</strong>
                        </a>
                        <a class='button is-light'>Log in</a>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <Fragment>
            <nav class='navbar' role='navigation' aria-label='main navigation'>
                <div class='navbar-brand'>
                    <a class='navbar-item' href='https://bulma.io'>
                        <img src={logo} width='112' height='28' />
                    </a>

                    <a
                        onClick={onMenuClickHandler}
                        role='button'
                        class={menuClasses}
                        aria-label='menu'
                        aria-expanded='false'
                        data-target='navbarBasicExample'
                    >
                        <span aria-hidden='true'></span>
                        <span aria-hidden='true'></span>
                        <span aria-hidden='true'></span>
                    </a>
                </div>
                {menuClick ? mobileMenu : null}

                <div id='navbarBasicExample' class='navbar-menu'>
                    <div class='navbar-start'>
                        <a class='navbar-item'>
                            <NavLink to='/home' >Home</NavLink>
                        </a>

                        <a class='navbar-item'>
                            <NavLink to='/profile' >Profile</NavLink>
                        </a>
                    </div>

                    <div class='navbar-end'>
                        <div class='navbar-item'>
                            <div class='buttons'>
                                <a class='button is-primary'>
                                    <strong>Sign up</strong>
                                </a>
                                <a class='button is-light'>Log in</a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </Fragment>
    );
};

export default Navbar;
