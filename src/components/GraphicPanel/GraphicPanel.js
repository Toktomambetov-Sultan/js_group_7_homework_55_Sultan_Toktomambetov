import React from 'react';
import './GraphicPanel.css'
import Burger from '../Burger/Burger';
import Counter from '../Counter/Counter';
import { allIngredients } from '../../constants/ingredients';

export default function GraphicPanel(props) {
    return (
        <div className="GraphicPanel">
            <h4 className="title">{props.title}</h4>
            <div className="bottom">
                <Burger order={props.order} />
            </div>
            <Counter price={props.order.reduce(
                (count, ingredient) => {return count + allIngredients.find(elem => elem.name === ingredient.name).price}
                , 0)} />
        </div>
    )
}
