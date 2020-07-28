import React from 'react';
import { allIngredients } from '../../constants/ingredients';
import './../../constants/ingredients.css';


export default function Burger(props) {
    return (
        <div className="Burger">
            <div className="BreadTop">
                <div className="Seeds1"></div>
                <div className="Seeds2"></div>
            </div>
            <>
                {
                    props.order.map(ingredient => (
                        <div key={ingredient.id} className={allIngredients.find(elem => elem.name === ingredient.name).className}></div>
                    ))
                }
            </>
            <div className="BreadBottom"></div>
        </div>
    )
}
