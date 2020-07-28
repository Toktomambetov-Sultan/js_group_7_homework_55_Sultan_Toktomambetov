import React from 'react';
import './Counter.css'

export default function Counter({ price }) {
    return (
        <div className="Counter">Price: {price}</div>
    )
}
