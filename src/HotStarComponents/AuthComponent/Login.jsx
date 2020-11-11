import React, { Component, Fragment } from 'react'
import { Link } from "react-router-dom";
import "./Auth-Styles.css";
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() { 
        return ( 
            <Fragment>
                <section className="authBlock">
                <section className="card col-md-4 mx-auto">
                    <article className="form-block">
                        <h5 className="h5 font-weight-bold p-4">Login to continue</h5>
                        <div className="card-body">
                            <from>
                            <div className="from-group">
                                <lable htmlFor="username">Username</lable>
                                <input type="text"
                                 className="form-control" name="username" required/>
                            </div>
                            <div className="form-group">
                                <lable htmlFor="username">Password</lable>
                                <input type="text" className="form-control" name="password" required/>
                            </div>
                            <div className="form-group">
                            <button className="btn btn-block btn-outline-primary">Login</button>
                            </div>
                                <div className="form-group">
                                    <span>
                                        Don't have an account Please
                                        <Link to="/register" className="register-link">Register</Link>
                                    </span>
                                </div>
                            </from>
                        </div>
                    </article>
                </section>
                </section>
            </Fragment>
         );
    }
}
 
export default Login;