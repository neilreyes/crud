import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { fetchTransactions } from '../../actions/transactions';
import TransactionEntry from './TransactionEntry';

class Transactions extends Component {
    componentWillMount() {
        this.props.fetchTransactions();
    }

    renderTransactions(data) {
        const { entries, loading, error } = data;
    
        if (loading) {
            return "Loading..."
        } else if ( error ){
            return <div>{error}</div>
        }

        return entries.map((entry, index) => {
            return <TransactionEntry entry={entry} key={index} />;
        });
    }

    render() {
        return (
            <div>
                {this.renderTransactions(this.props.transactions) }
            </div>
        );
    }
}

Transactions.propTypes = {
    transactions: PropTypes.object,
}

function mapStateToProps(state) {
    return {
        transactions: state.transactions.lists,
    }
}

export default compose(
    connect(mapStateToProps, { fetchTransactions })
)(Transactions);