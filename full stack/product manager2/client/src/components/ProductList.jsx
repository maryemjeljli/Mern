import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/products')
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  const removeFromDom = (productId) => {
    setProduct(product.filter((item) => item._id !== productId));
  };

  const deleteObj = (Id) => {
    axios
      .delete('http://localhost:8000/api/product/delete/' + Id)
      .then((res) => {
        removeFromDom(Id);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="container mt-5">
      <h2>All Products</h2>
      {product.map((product, i) => (
        <div className="card mb-3" key={i}>
          <div className="card-body">
            <h5 className="card-title">
              <Link to={`/product/${product._id}`}>{product.title}</Link>
            </h5>
            <Link to={`/product/edit/${product._id}`} className="btn btn-primary me-2">
              Edit
            </Link>
            <button
              onClick={(e) => {
                deleteObj(product._id);
              }}
              className="btn btn-danger"
            >
              Delete
            </button>
          </div>
        </div>
      ))}

      <div>
        <Link to='/add' className="btn btn-success">
          Add New Product
        </Link>
      </div>
    </div>
  );
};

export default ProductList;
