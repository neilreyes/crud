import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/index';
import { firebase } from 'react-redux-firebase';

class Home extends Component {
    
    componentWillMount() {
        this.props.fetchPosts();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.newPost) {
            this.props.posts.unshift(nextProps.newPost);
        }
    }

    render(){
        const posts = this.props.posts;
        return (
            <div>
                {posts.map((text, index) => {
                    return (
                        <div key={index}>
                            <h3>{text.title}</h3>
                            <p>{text.body}</p>
                        </div>
                    );
                })}
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        posts: state.posts.items,
        newPost: state.posts.item,
    }
}

Home.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    newPost: PropTypes.object,
}

export default connect(mapStateToProps, { fetchPosts })(Home);