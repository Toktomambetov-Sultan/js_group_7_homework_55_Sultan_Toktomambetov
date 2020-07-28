import React, { useState } from 'react';
import './App.css';
import { allIngredients } from './../../constants/ingredients';
import GraphicPanel from './../../components/GraphicPanel/GraphicPanel';
import ConrolPanel from '../../components/ConrolPanel/ControlPanel';

function App() {
  const [order, setOrder] = useState([
    {
      name: "meat",
      id: "1",
    },
    {
      name: "cheese",
      id: "2",
    },
    {
      name: "meat",
      id: "3",
    }
  ]);
  const AddNewIngredient = (name) => {
    const copyOrder = [...order];
    copyOrder.push({ name, id: new Date().getTime() });
    setOrder(copyOrder);
  };
  return (
    <div className="container App">
      <div className="item">
        <ConrolPanel title="Ingredients" order={order} />
      </div>
      <div className="item">
        <GraphicPanel title="Burger" order={order} />
      </div>
    </div>
  );
}

export default App;
