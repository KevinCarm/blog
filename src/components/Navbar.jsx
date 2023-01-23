import { Fragment, useState } from "react";
import "bulma/css/bulma.css";
import logo from "../assets/logo.png";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const [menuClick, setMenuClick] = useState(false);

    const menuClasses = `${
        menuClick ? "navbar-burger is-active" : "navbar-burger"
    }`;

    const onMenuClickHandler = () => {
        setMenuClick(prev => !prev);
    };

    const mobileMenu = (
        <div class='navbar-start mt-6 box'>
            <div>
                <a class='navbar-item'>
                    <NavLink to='/home'>Home</NavLink>
                </a>
                <a class='navbar-item'>
                    <NavLink to='/profile'>Profile</NavLink>
                </a>
            </div>

            <div class='navbar-end mt-6'>
                <div class='navbar-item '>
                    <div class='buttons is-flex-direction-row is-justify-content-center'>
                        <a class='button is-success is-light is-rounded'>
                            <Link to='/signup'>Sign up</Link>
                        </a>
                        <a class='button is-info is-light is-rounded'>
                            <Link to='/login'>Login</Link>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <Fragment>
            <nav class='navbar' role='navigation' aria-label='main navigation'>
                <div class='navbar-brand'>
                    <a class='navbar-item' style={{ width: "65px", height: "65px" }}>
                        <img src={logo} style={{ width: "65px", height: "65px" }} />
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
                            <NavLink to='/home'>Home</NavLink>
                        </a>

                        <a class='navbar-item'>
                            <NavLink to='/profile'>Profile</NavLink>
                        </a>
                    </div>

                    <div class='navbar-end'>
                        <div class='navbar-item'>
                            <div class='buttons'>
                                <a class='button is-success is-light is-rounded'>
                                    <Link to='/signup'>Sign up</Link>
                                </a>
                                <a class='button is-info is-light is-rounded'>
                                    <Link to='/login'>Login</Link>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </Fragment>
    );
};

export default Navbar;
