import React from 'react';

export default function TransactionEntry(props){
    const { entry } = props
    return(
        <div>
            <h3>{entry.title}</h3>
            <p>{entry.amount}</p>
            <hr />
        </div>
    );
}