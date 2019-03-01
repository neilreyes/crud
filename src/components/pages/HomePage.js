import React, { Component } from 'react';
import Transactions from '../transactions';

class HomePage extends Component {
    render(){     
        return (
            <div>
                {<Transactions />}
            </div>
        );
    }
}

export default HomePage;