import './App.css';
import React, {useState} from 'react';
import ResturantLayout from './components/ResturantLayout';

import data from './WOTM_TheRedBox_Gajuwaka.json'

function App() {
  const [cartItems, setCartItems] = useState([]);
  
  const onAdd = (product) => {
    console.log(product)
    const exist = cartItems.find((x) => x.id === product.id);
    // alert(exist)
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  return (
    <div>
      <ResturantLayout  onRemove={onRemove} onAdd={onAdd} cartItems={cartItems} data={data}/>
    </div>
    
  );
}

export default App;
