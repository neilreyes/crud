import React, { Component } from 'react';

class Categories extends Component{
    render(){
        const { value, onChange, name } = this.props;
        return(
            <select
                name={name}
                onChange={onChange}
                value={value}   
            >
                <option>Category</option>
            </select>
        );
    }
}

export default Categories;