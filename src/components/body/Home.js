import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/index';
import { firestoreConnect, isLoaded } from 'react-redux-firebase';

class Home extends Component {
    renderTransactions(data){
        if (!isLoaded(data)) {
            return <div>Loading...</div>
        } else {
            const transactions = data;

            console.log(transactions);
            return transactions.map(entry=>{
                return(
                    <div key={entry.id}>
                        <h3>{entry.title}</h3>
                        <p>{entry.amount}</p>
                        <hr/>
                    </div>
                );
            });
        }
    }

    render(){
        const transactions = this.props.transactions;
        return (
            <div>
                {this.renderTransactions(transactions)}
            </div>
        );
    }
}

Home.propTypes = {
    transactions: PropTypes.array,
}

function mapStateToProps(state){
    return {
        transactions: state.firestore.ordered.transactions,
    }
}

export default compose(
    firestoreConnect(props => {
        return [{
            collection: 'transactions',
        }]
    }),
    connect(mapStateToProps, { fetchPosts })
)(Home);