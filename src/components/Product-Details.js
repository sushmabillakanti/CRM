import { useEffect, useState } from "react";
import { getProductById } from "../services/ProductService";
import { useParams } from "react-router-dom";
 
const ProductDetails = () => {
 
    const productParam = useParams();
 
    const [product, setProduct] = useState('');
    const [errorMessage, serErrorMessage] = useState('');
 
    useEffect(() => {
        console.log(productParam.productId);
        getProductById(productParam.productId)
            .then((response) => {
                console.log(response);
                setProduct(response.data);
                serErrorMessage('');
            })
            .catch((error) => {
                console.log(error);
                serErrorMessage(error.response.data.message);
                setProduct('');
            });
    }, []);
 
    return (
        <>
            <p className="mt-3 display-5 text-primary">Product Details</p>
            {product &&
                <div className="border border-secondary shadow rounded px-2 py-2" >
                    <h2>{product.title}</h2>
                    <p>{product.description} {product.description}</p>
                    <p>MRP ₹{product.price}/-</p>
                    <p>Discount {product.discountPercentage}%</p>
                    <p>Effective Price ₹{product.price - (product.price * (product.discountPercentage) / 100)}/-</p>
                    <img width={'30%'} src={product.thumbnail} alt="product thumbnail" />
                </div>
            }
            <div> {errorMessage &&
                <p> {errorMessage} </p>
            }
            </div>
        </>
    );
}
 
export default ProductDetails;