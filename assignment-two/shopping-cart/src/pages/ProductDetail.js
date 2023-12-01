import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductDetail } from "../api"
import { useCart } from '../contexts/CartContext';

const ProductDetail = () => {

    const { productId } = useParams();
    const { addToCart } = useCart();
    const [productDetail, setProductDetail] = useState([]);

    const handleAddToCart = () => {
        if (productDetail) {
            // Assuming you have product details fetched
            addToCart(productDetail);
        }
    };

    const retrieveProductDetail = async (productId) => {
        try {
            let result = await getProductDetail(productId);
            setProductDetail(result.data);
        } catch (err) {
            console.error('Error fetching data:', err);
        }
    }


    useEffect(() => {
        retrieveProductDetail(productId);
    }, [productId])


    return (
        <div class="flex justify-center">
            <div class="rounded shadow-md h-auto w-1/2 text-left p-4 m-6 bg-white pt-12 justify-center ">
                <div class="flex justify-center text-lg ">{productDetail.title}</div>
                <div class="flex justify-center">
                    <img
                        src={productDetail.image}
                        alt={productDetail.title}
                        class="mt-2 rounded-md w-1/4 h-1/4 object-scale-down "
                    />
                </div>
                <div class="flex justify-center m-5 text-lg ">{productDetail.description}</div>
                <p class="text-base font-semibold flex justify-center m-5">Price: {productDetail.price}</p>

                <hr />
                <div class="m-2 flex justify-center">
                    <button onClick={handleAddToCart} class="m-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>

    );


}


export default ProductDetail;