import API from "axios"

const BASE_API_URL = "https://fakestoreapi.com"

export const getAllProducts = () => {
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
        withCredentials: true,
    };
    //const body = JSON.stringify(formData);
    return API.get(BASE_API_URL + "/products");
};

export const getProductDetail = (id) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
        withCredentials: true,
    };
    //const body = JSON.stringify(formData);
    return API.get(BASE_API_URL + "/products/" + id);
};