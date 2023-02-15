import './App.css';
import React, {useState,useEffect} from 'react';
import ResturantLayout from './components/ResturantLayoutComponents/ResturantLayout';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './components/HomeComponents/Home';
import Sample from './components/ResturantLayoutComponents/Sample';

function App() {

  const [cartItems, setCartItems] = useState([]);
  
  const onAdd = (product) => {
    console.log(product)
    const exist = cartItems.find((x) => x.id === product.id);
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
  
    <BrowserRouter>
        <Routes>
           <Route path='/' element={<Home />}> </Route>
           <Route path="/restaurant/:id" element={<ResturantLayout  onRemove={onRemove} onAdd={onAdd} cartItems={cartItems} />}></Route>
           <Route path="/restaurant/:id/cart" element={<Sample onRemove={onRemove} onAdd={onAdd} cartItems={cartItems} />}></Route>       
        </Routes>
    </BrowserRouter>
 
    
  );
}

export default App;









