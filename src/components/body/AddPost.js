import React, { Component } from 'react';
import PropTypes from 'prop-types';
// Redux
import { connect } from "react-redux";
import { addPost } from "../../actions/index";

class AddPost extends Component {
    constructor(props){
        super(props);

        this.state ={
            title: "",
            body: "",
        }

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onSubmit(e){
        e.preventDefault();

        const post = {
            title: this.state.title,
            body: this.state.body,
        }
        this.props.addPost(post);
    }

    onChange(e){
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render(){
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <label>Title</label><br />
                    <input
                        name="title"
                        value={this.state.title}
                        type="text"
                        onChange={this.onChange}
                    /><br />
                    <label>Body</label><br/>
                    <textarea
                        name="body"
                        rows="4"
                        value={this.state.body}
                        onChange={this.onChange}
                    /><br/> 
                    <input value="Submit" type="submit" />
                </form>
            </div>
        );
    }
}

AddPost.propTypes = {
    addPost: PropTypes.func.isRequired,
}

export default connect(null,{addPost})(AddPost);