import React from 'react';
import '../statics/cart.css';
import Product from './Product';

const Cart = ({cart, setCart}) => {
    return (
        <div className="cart">
            <h3>Carro de Compras</h3>
            {cart.length === 0
             ?
                <p>No hay elementos</p>
             : cart.map(product =>(
                 <Product
                    key = {product.id}
                    product = {product}
                    cart = {cart}
                    setCart = {setCart}
                 />
             ))
                    

            }


        </div>
    );
}
 

export default Cart;