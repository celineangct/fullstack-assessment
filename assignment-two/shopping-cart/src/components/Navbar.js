
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import CartIcon from "../assets/img/shopping-cart-icon.png"

const Navbar = () => {
    const { cartItems } = useCart();
    const cartImage = require('../assets/img/shopping-cart-icon.png').default;


    return (
        <nav class="bg-gray-700 p-4">
            <div class="flex place-content-between">
                <div class="flex space-x-4">
                    <Link to="/" class="text-white text-2xl font-bold">Fake Store</Link>
                    <div class="flex self-center">
                        <Link to="/" class="text-white">All Products</Link>
                    </div>
                </div>

                <Link to="/cart" class="text-white">
                    <img
                        src={CartIcon}
                        class="mt-2 w-8 h-8 "
                    />
                </Link>
                {cartItems.length > 0 && (
                    <span className="absolute top-1 right-1 bg-red-500 text-white rounded-full px-2 py-1 text-xs">
                        {cartItems.length}
                    </span>
                )}


            </div>
        </nav>


    );
};

export default Navbar;