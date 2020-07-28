import React, { useState } from 'react';
import './App.css';
import GraphicPanel from './../../components/GraphicPanel/GraphicPanel';
import ConrolPanel from '../../components/ConrolPanel/ControlPanel';

function App() {
  const [order, setOrder] = useState([]);
  const addNewIngredient = (name) => {
    const copyOrder = [...order];
    copyOrder.push({ name, id: new Date().getTime() });
    setOrder(copyOrder);
  };
  return (
    <div className="container App">
      <div className="item">
        <ConrolPanel title="Ingredients" order={order} addIngredient={addNewIngredient} />
      </div>
      <div className="item">
        <GraphicPanel title="Burger" order={order} />
      </div>
    </div>
  );
}

export default App;
