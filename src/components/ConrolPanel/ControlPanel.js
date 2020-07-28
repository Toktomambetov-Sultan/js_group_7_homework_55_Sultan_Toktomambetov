import React from 'react';
import './ControlPanel.css';
import { allIngredients } from '../../constants/ingredients';
import IngredientBlock from '../IngredientBlock/IngredientBlock';

export default function ConrolPanel(props) {
    return (
        <div className="ControlPanel">
            <h4 className="title">{props.title}</h4>
            <div className="bottom">
                {allIngredients.map(ingredient => (
                    <IngredientBlock
                        key={ingredient.name}
                        name={ingredient.name}
                        image={ingredient.image}
                        count={props.order.reduce((count, elem) => (elem.name === ingredient.name ? count + 1 : count), 0)}
                    />
                ))}
            </div>
        </div>
    )
}
