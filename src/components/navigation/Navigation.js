import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navigation extends Component {
    render(){
        return(
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/add-expense">Add Expense</NavLink>
            </nav>
        );
    }
}

export default Navigation;