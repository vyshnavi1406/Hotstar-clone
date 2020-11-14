import React, { Component } from 'react';
class childrenComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: "vyshnavi",
            age: 20,
         }
    }
    render() { 
        return ( 
            <Fragement>
                <h1>Hello children Component</h1>
            </Fragement>
         );
    }
}
 
export default childrenComponent;