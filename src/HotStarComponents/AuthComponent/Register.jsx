import React, { Component, Fragment } from 'react'
import { toast } from 'react-toastify';
import firebase from '../../firebase';
import md5 from 'md5';
import { Link } from "react-router-dom";
import "./Auth-Styles.css";
class Register extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username: "",
            password: "",
            email: "",
         };
    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
};

handleSubmit = async (e) => {
    try { 
        let { username, password, email } = this.state;
        e.preventDefault();
       //connecting firebase auth provider
       let userData = await firebase
       .auth()
       .createUserWithEmailAndPassword(email,password);
       userData.user.sendEmailVerification(); //firebase
       let message = `A verifivation has been send to ${email} and please verify email adderss`
       toast.success(message);
       console.log(userData);

       //update prfile includin user phot, photo number, id ahatever
       await userData.user.updateProfile({
        displayName: username,
        photoURL:`https://www.gravatar.com/avatar/${md5(
            userData.user.email
        )}?d=identicon`,
       });
       this.setState({
            username: "",
            pssword: "",
            email: "",
        });
    } catch (err) {
        console.error(err);
        toast.error(err.message);
    }
    };

render() {
   let { username, password, email } = this.state;
        return ( 
            <Fragment>
                <section className="authBlock">
                <section className="card col-md-4 mx-auto">
                    <article className="form-block">
                        <h5 className="h5 font-weight-bold p-4">Register to continue</h5>
                        <div className="card-body">
                            <form onSubmit={this.handleSubmit}>
                            <div className="from-group">
                                <lable htmlFor="username">Username</lable>
                                <input type="text"
                                 className="form-control" 
                                 name="username" 
                                 placeholder="enter username"
                                 value={username}
                                 onChange={this.handleChange}
                                 required/>
                            </div>
                            <div className="from-group">
                                <lable htmlFor="email">Email</lable>
                                <input type="email"
                                 className="form-control" 
                                 name="email" required
                                 value={email}
                                 onChange={this.handleChange}
                                 placeholder="enter email"/>
                            </div>
                            <div className="form-group">
                                <lable htmlFor="username">Password</lable>
                                <input type="password" 
                                className="form-control" 
                                name="password" 
                                placeholder="enter password"
                                value={password}
                                onChange={this.handleChange}
                                required/>
                            </div>
                            <div className="form-group">
                            <button className="btn btn-block btn-outline-primary">Register</button>
                            </div>
                                <div className="form-group">
                                    <span>
                                        Already have an account Please
                                        <Link to="/login" className="register-link float-right">Register</Link>
                                    </span>
                                </div>
                            </form>
                        </div>
                    </article>
                </section>
                </section>
            </Fragment>
         );
    }
}
 
export default Register;