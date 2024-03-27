import React, { useState, useEffect } from "react";
import { getProductsWithPagination } from "../services/ProductService"; // Assuming ProductService is in the same directory
import { Link } from "react-router-dom";
 
const Home = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
 
  useEffect(() => {
    fetchProducts(currentPage);
  }, [currentPage]);
 
  const fetchProducts = (page) => {
    const pageSize = 9;
    getProductsWithPagination(pageSize, (page - 1) * pageSize)
      .then((response) => {
        console.log(response.data);
        setProducts(response.data.products);
        setTotalPages(Math.ceil(response.data.total / pageSize));
      })
      .catch((error) => {
        console.log(error);
      });
  };
 
  const handlePageChange = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };
 
  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          className={`btn btn-primary rounded-circle mx-1 ${
            i === currentPage ? "active" : ""
          }`}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };
 
  return (
    <div className="container py-5">
      <h1 className="mb-4">Product List</h1>
      <div className="row">
        {products.map((product) => (
          <div className="col-md-4 mb-3" key={product.id}>
            <div className="card h-100">
              <img
                src={product.thumbnail}
                className="card-img-top"
                alt={product.title}
              />
              <div className="card-body">
                <h5 className="card-title">
                  <Link to={`/product-details/${product.id}`}>
                    {product.title}
                  </Link>
                </h5>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="d-flex justify-content-center mt-4">
        <button
          className="btn btn-dark mx-1"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {renderPageNumbers()}
        <button
          className="btn btn-dark mx-1"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};
 
export default Home;