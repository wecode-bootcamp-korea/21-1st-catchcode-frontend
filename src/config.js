const BASE_URL = 'http://10.58.6.177:8000';

export const GET_LOGIN_API = `${BASE_URL}/users/signin`;
export const POST_SIGN_API = `${BASE_URL}/users/signup`;
export const GET_PRODUCTS_API = `${BASE_URL}/products/${id}`;
export const GET_COTEGORIES_API = `${BASE_URL}/products/categories`;
export const GET_FILTERPRODUCTS_API = `${BASE_URL}/products/search`;

// import { GET_PRODUCT_API } from '../../../config.js';
// fetch(`${GET_PRODUCT_API}/5`).then(...).then(...);
