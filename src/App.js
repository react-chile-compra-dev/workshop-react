import React, {useState} from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Product from './components/Product';
import Cart from './components/Cart';

function App() {

  const [products, setProducts] = useState([
    {id:1, name:'camisa', price: 10000},
    {id:2, name:'pantalon', price: 15000},
    {id:3, name:'poleron', price: 20000},
    {id:4, name:'zapatillas', price: 30000}
  ]);

  //state del carrito
  const [cart, setCart] = useState([]);


  const year = new Date().getFullYear();

  return (
    <div className="App">
     <Header
        titulo = "Tienda"
     />
     <h3>Listados de productos</h3>
     {
       products.map(product => (
         <Product
          key = {product.id} 
          product = {product}
          products = {products}
          cart = {cart}
          setCart = {setCart}
         />
       ))
     } 

      <Cart
        cart = {cart}
        setCart ={setCart}
      />

     <Footer
      year = {year}
     /> 
    </div>
  );
}

export default App;
