import React from 'react';

export default function TransactionEntry(props){
    const { entry } = props
    return(
        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", borderBottom: "1px solid #c0c0c0"}}>
            <div style={{width: "50%"}}>
                <h3>{entry.title}</h3>
                <p>{entry.description}</p>
            </div>
            <div style={{ width: "40%"}}>
                <p>P {entry.amount}</p>
                <p>{entry.status}</p>
            </div>
            <div style={{ width: "10%" }}>
                <button>
                    Delete
                </button>
                <button>
                    Edit
                </button>
            </div>
        </div>
    );
}