import React, { Component } from 'react';

class Home extends Component {
    render(){
        console.log("Home props:",this.props);
        return (
            <div>
                Home
            </div>
        );
    }
}

export default Home;