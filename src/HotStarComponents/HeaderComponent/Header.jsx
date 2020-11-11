import React, { Component , Fragment } from 'react'
import "./HeaderStyles.css";
class HeaderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Fragment>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <span  className="bar-icon">
          <i className="fal fa-bars"></i>
            </span>      
         
        <a className="navbar-brand" href="/">
          <img src="disney-hotstar-logo-dark.svg" alt="logo"/>
          </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" 
        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
        aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">Tv</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Movies</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Sports</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">News</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Premium</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disney-block" href="/">
                <div>Disnery+</div>
                <div>new</div>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Kids
              </a>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
          <li className="nav-item">
              <input type="text" className="from-control"
              placeholder="search"/>
              <span style={{ position: "relative"}}>
                <i class="fas fa-search"
                style={{
                  position:"absolute",
                  top:"-5px",
                  right:"6px",
                  color:"rgb(119 119 119)",
                }} 
                ></i></span>
            </li>
            <li className="nav-item">
              <a className="nav-link subscribe-block" href="/">
                subscribe
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-uppercase" href="/">
                Login
              </a>
            </li>
          </ul>
          
        </div>
      </nav>
            </Fragment>
         );
    }
}
 
export default HeaderComponent;