import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/index';

class Home extends Component {
     componentDidMount(){
        this.props.fetchPosts();
    }

    renderTransactions(data){
        if( data.length === 0 ){
            return "Loading..."
        } else {
            return data.map((entry, index) => {
                return (
                    <div key={index}>
                        <h3>{entry.title}</h3>
                        <p>{entry.amount}</p>
                        <hr />
                    </div>
                );
            });
        }
    }

    render(){
        const posts = this.props.posts;
        
        return (
            <div>
                {this.renderTransactions(posts)}
            </div>
        );
    }
}

/* Home.propTypes = {
    transactions: PropTypes.array,
}
 */
function mapStateToProps(state){
    return {
        posts: state.posts.items,
    }
}

export default compose(
    connect(mapStateToProps, { fetchPosts })
)(Home);