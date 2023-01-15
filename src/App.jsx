import { Fragment } from "react";
import Navbar from "./components/Navbar";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./pages/Home/Home";
import './App.css'

function App() {
    return (
        <Fragment>
            <Navbar />
            <Switch>
                <Route path='/' exact>
                    <Redirect to='/home' />
                </Route>
                <Route path='/home'>
                    <Home />
                </Route>
                <Route path='/profile'>
                    <h2>Profile</h2>
                </Route>
            </Switch>
        </Fragment>
    );
}

export default App;
