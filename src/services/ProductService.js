import axios from "axios";
 
const productUrl = 'https://dummyjson.com/products';
 
const getAllProducts = () => {
    console.log('getAllProducts');
    // return axios.get(`${productUrl}?limit=0&select=id,title`); //All products wil be displayed and with specific columns
     return axios.get(`${productUrl}?limit=0`); //All 100 products get displayed
   // return axios.get(`${productUrl}?select=id,title`); //30 products get displayed
   
};
 
const getProductsWithPagination = (limit, skip) => {
    console.log(limit, skip);
    return axios.get(`${productUrl}?limit=${limit}&skip=${skip}&select=id,title,description,thumbnail`);
};

const getProductById = (productId) => {
    console.log(productId);
    return axios.get(`${productUrl}/${productId}`);
};
 
// more functions
 
export { getAllProducts ,getProductsWithPagination,getProductById};