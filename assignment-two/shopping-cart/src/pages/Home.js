import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllProducts } from "../api"
const Home = () => {

    const [products, setProducts] = useState([]);

    const retrieveProducts = async () => {
        try {
            let result = await getAllProducts();
            setProducts(result.data);
        } catch (err) {
            console.error('Error fetching data:', err);
        }
    }


    useEffect(() => {
        retrieveProducts();
    }, [])

    return (

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 m-4 ">
            {
                products.map((product) => (
                    <Link key={product.id} to={`/products/${product.id}`} >
                        <div class="bg-white p-4 rounded shadow flex justify-center  ">
                            <div class=" w-64 h-64  ">
                                <h3 class="text-sm font-semibold flex justify-center">{product.title}</h3>

                                <div class='flex justify-center'>
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        class="mt-2 rounded-md object-contain h-32 w-32 "
                                    />
                                </div>

                                <p class="text-gray-700 flex justify-center mt-5 ">${product.price}</p>
                            </div>
                        </div>
                    </Link>
                ))
            }
        </div>

    );

}

export default Home;