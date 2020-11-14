import React, { Component , Fragment } from 'react';
import {Route, Switch, Link} from 'react-router-dom'

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Login from "./HotStarComponents/AuthComponent/Login";
import Register from "./HotStarComponents/AuthComponent/Register";
import HeaderComponent from "./HotStarComponents/HeaderComponent/Header";
import LifeCycle from './HotStarComponents/LifeCycleMethods/LifeCycle';
class App extends Component {
    constructor(props){
        super(props);
        this.state = { }
    }
    render() { 
        return ( <Fragment>
            <header>
                <HeaderComponent/>
                <LifeCycle/>
            </header>
            <main>
                <ToastContainer/>
                <Switch>
                <Route path="/login" component={Login}/>
                <Route path="/register" component={Register}/>
                </Switch>
                
                </main>
        </Fragment> );
    }
}
 
export default App;