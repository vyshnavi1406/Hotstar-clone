import React, { Component, Fragment } from 'react'
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() { 
        return ( 
            <Fragment>
                <section className="card col-md-4 mx-auto">
                    <article className="form-block">
                        <h2>Login</h2>
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
                            <button className="btn btn-block btn-primary">Login</button>
                            </div>

                            </from>
                        </div>
                    </article>
                </section>
            </Fragment>
         );
    }
}
 
export default Login;