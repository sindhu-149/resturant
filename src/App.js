import './App.css';
import React, {useState} from 'react';
import ResturantLayout from './components/ResturantLayout';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import data from './WOTM_TheRedBox_Gajuwaka.json'
import Cart from './components/ResturantLayoutComponents/Cart';
import MenuCards from './components/MenuCards';

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
    // <div>
    //   <ResturantLayout  onRemove={onRemove} onAdd={onAdd} cartItems={cartItems} data={data}/>
    // </div>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<ResturantLayout  onRemove={onRemove} onAdd={onAdd} cartItems={cartItems} data={data}/>}>
            <Route path='resturant/:productId' element={<MenuCards />}></Route>
            <Route path='resturant/:productId' element={<Cart />}></Route>
          </Route>
        </Routes>
    </BrowserRouter>
    
  );
}

export default App;
