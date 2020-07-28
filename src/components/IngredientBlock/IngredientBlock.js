import React from 'react';
import './IngredientBlock.css';

export default function IngredientBlock(props) {
    console.log(props);
    return (
        <div className="IngredientBlock">
            <button className='addBtn'>
                <img src={props.image} className="image"/>
            </button>
            <span className='name'>{props.name}</span>
            <span className="count">x{props.count}</span>
            <button className="deleteBtn">remove</button>
        </div>
    )
}
