import React, { Component, Fragment} from 'react';
import childrenComponent from './childrenComponent';
class LifeCycle extends Component {
   // constructor(props) {
      //  super(props);
      //  this.state = {  
       //     name: "vyshnavi",
        //}; //initializing state
       // this.handleChange = this.handleChange.bind(this); //binding this keyword or event handler
       // console.log("CONSTRUCTOR BLOCK EXECUTING ...");
   // }
   // static getDerivedStateFromProps(props, state) {
     //   console.log("GET DERIVED STATE FROM PROPS BLOCK");
        //this.state = "hello";
        //window.fetch("hello");
      //  return null;
    //}
    //handleChange(e) {
      //  console.log(e);
    //}
    render() { 
        return ( 
            <Fragment>
                <h1>Life Cycle Methods in react</h1>
                <childrenComponent/>
            </Fragment>
         );
    }
}
 
export default LifeCycle;