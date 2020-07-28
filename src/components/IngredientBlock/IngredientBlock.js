import React from 'react';
import './IngredientBlock.css';

export default function IngredientBlock(props) {
    return (
        <div className="IngredientBlock">
            <button className='addBtn' onClick={props.addIngredient}>
                <img src={props.image} className="image" alt=""/>
            </button>
            <span className='name'>{props.name}</span>
            <span className="count">x{props.count}</span>
            <button className="deleteBtn">remove</button>
        </div>
    )
}
