import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

const Product = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/product/' + id)
      .then((res) => setProduct(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  return (
    <div className="container mt-5">
      <h2>Product Details</h2>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Title: {product.title}</h5>
          <p className="card-text">Price: ${product.price}</p>
          <p className="card-text">Description: {product.description}</p>
        </div>
      </div>
      <Link to="/" className="btn btn-primary">
            All Products
          </Link>
    </div>
  );
};

export default Product;
