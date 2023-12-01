import React from 'react';
import { useCart } from '../contexts/CartContext';

const ShoppingCart = () => {
    const { cartItems, removeFromCart } = useCart();

    const handleRemoveFromCart = (productId) => {
        removeFromCart(productId);
    };

    const calculateTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.price, 0);
    };

    return (
        <div class=" p-4  my-8 mx-4  ">
            <h2 class="text-center font-semibold">Shopping Cart</h2>
            {cartItems.length === 0 ? (
                <p class="text-center my-4">Your cart is empty.</p>
            ) : (
                <div>
                    {cartItems.map((item) => (
                        <div class="bg-white p-4 rounded shadow my-8 mx-4 ">
                            <div class=" flex space-x-60 flex-row items-center ">
                                <div class='flex justify-center'>
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        class="mt-2 rounded-md object-contain h-32 w-32 "
                                    />
                                </div>
                                <h3 class="text-sm font-semibold flex justify-center">{item.title}</h3>

                                <p class="text-gray-700 place-items-end ">${item.price}</p>
                                <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                                    onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
                            </div>

                        </div>

                    ))}


                </div>
            )}
            <div class="text-center my-4">
                <p>Total Price: ${calculateTotalPrice()}</p>
            </div>
        </div>
    );
};

export default ShoppingCart;