import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Editproduct = () => {
  const { id } = useParams();
  const nav = useNavigate();

  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:8000/api/product/${id}`).then((res) => {
      setTitle(res.data.title);
      setPrice(res.data.price);
      setDescription(res.data.description);
    });
  }, [id]);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8000/api/product/update/${id}`, {
        title,
        price,
        description,
      })
      .then((res) => {
        console.log(res);
        nav('/');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container mt-5">
      <h1>Update Product</h1>
      <form onSubmit={onSubmitHandler}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title:
          </label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Price:
          </label>
          <input
            type="number"
            name="price"
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description:
          </label>
          <input
            type="text"
            name="description"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Editproduct;
