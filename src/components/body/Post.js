import React, { Component } from 'react';

class Post extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                Post
            </div>
        );
    }
}

export default Post;