import React, { Component } from 'react';
// Components
//import Categories from './Categories';
// Redux
import { connect } from "react-redux";
import { addExpense } from "../../actions/transactions";
// Firebase
// Utils
import uuid from 'uuid';
import PropTypes from 'prop-types';

class AddExpenseForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            amount: 0,
            category: 0,
            catOptions: [{
                id: 0,
                category: "select category"
            }],
            date: "",
            datePosted: "",
            description: "",
            expense: true,
            status: "paid",
            title: "",
            transaction_id: "",
            user_id: "oii7XDwPouD9B4G3V8wU",
        }

        this.getNewCatOptions = this.getNewCatOptions.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.renderCatOptions = this.renderCatOptions.bind(this);

    }

    componentWillReceiveProps(nextProps) {
        this.getNewCatOptions(nextProps);
    }

    onSubmit(e) {
        const transactionID = uuid();
        e.preventDefault();

        const transaction = {
            amount: this.state.amount,
            category: this.state.category,
            date: new Date(),
            datePosted: new Date(),
            description: this.state.description,
            expense: true,
            status: this.state.status,
            title: this.state.title,
            user_id: this.state.user_id,
            transaction_id: transactionID,
        }

        this.props.addExpense(transaction);
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    getNewCatOptions(nextProps) {
        const newCats = nextProps.categories;

        if (newCats.length !== 0) {
            newCats.map((cat, index) => {
                this.setState(state => {
                    catOptions: state.catOptions.push(cat)
                });
            })
        }
    }

    renderCatOptions(cats) {
        return cats.map(cat => {
            return (
                <option key={cat.id} value={cat.id}>
                    {cat.category}
                </option>
            );
        });
    }

    renderStatusOptions() {
        const statusOptions = [{ status: "paid" }, { status: "unpaid" }];
        return statusOptions.map(option => {
            return (
                <option key={option.status} value={option.status}>
                    {option.status}
                </option>
            )
        })
    }

    render() {
        const cats = this.props.categories;
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <label>Amount</label><br />
                    <input
                        name="amount"
                        value={this.state.amount}
                        type="number"
                        onChange={this.onChange}
                    /><br />
                    <label>Title</label><br />
                    <input
                        name="title"
                        value={this.state.title}
                        type="text"
                        onChange={this.onChange}
                    /><br />
                    <label>Description</label><br />
                    <textarea
                        name="description"
                        rows="4"
                        value={this.state.description}
                        onChange={this.onChange}
                    /><br />
                    <label>Category</label><br />
                    <select
                        name="category"
                        onChange={this.onChange}
                        value={this.state.category}
                    >
                        {this.renderCatOptions(this.state.catOptions)}
                    </select><br />
                    <input value="Submit" type="submit" />
                </form>
            </div>
        );
    }
}

AddExpenseForm.propTypes = {
    addExpense: PropTypes.func.isRequired,
    categories: PropTypes.array,
}

const mapStateToProps = state => {
    return {
        categories: state.firestore.ordered.categories,
    }
}

export default connect(mapStateToProps, { addExpense })(AddExpenseForm);