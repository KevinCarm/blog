import { Fragment, useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { Route, Switch, Redirect, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";
import "./App.css";
import Signup from "./pages/Home/Signup";

function App() {
    const location = useLocation();
    const [isSignupPage, setIsSignupPage] = useState(false);

    useEffect(() => {
        if (location.pathname === "/signup") {
            setIsSignupPage(true);
        } else {
            setIsSignupPage(false);
        }
    }, [location]);

    return (
        <Fragment>
            {!isSignupPage ? <Navbar /> : null}
            <Switch>
                <Route path='/' exact>
                    <Redirect to='/home' />
                </Route>
                <Route path='/home'>
                    <Home />
                </Route>
                <Route path='/signup'>
                    <Signup />
                </Route>
                <Route path='/profile'>
                    <h2>Profile</h2>
                </Route>
            </Switch>
        </Fragment>
    );
}

export default App;
