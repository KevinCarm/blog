import { Fragment } from "react";
import Navbar from "./components/Navbar";
import { Route, Switch, Redirect } from "react-router-dom";

function App() {
    return (
        <Fragment>
            <Navbar />
            <Switch>
                <Route path='/' exact>
                    <Redirect to='/home' />
                </Route>
                <Route path='/home'>
                    <h2>Home</h2>
                </Route>
                <Route path='/profile'>
                    <h2>Profile</h2>
                </Route>
            </Switch>
        </Fragment>
    );
}

export default App;
