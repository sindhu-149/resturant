import './App.css';
import React, {useState,useEffect} from 'react';
import ResturantLayout from './components/ResturantLayoutComponents/ResturantLayout';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import data from './WOTM_TheRedBox_Gajuwaka.json'
// import data from './restaurants/1.json'
import Home from './components/HomeComponents/Home';


function App() {
  const [cartItems, setCartItems] = useState([]);
  const {Menu} =data 

  
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
           <Route path="res" element={<ResturantLayout  onRemove={onRemove} onAdd={onAdd} cartItems={cartItems} data={Menu} res={data}/>}>
           </Route>
        </Routes>
    </BrowserRouter>
    
  );
}

export default App;









