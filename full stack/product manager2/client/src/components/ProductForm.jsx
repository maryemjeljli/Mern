import React, { useState } from 'react';
import { useNavigate  , Link} from 'react-router-dom';
import axios from 'axios';

const ProductForm = () => {
  const nav = useNavigate();
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const objToBeSent = {
      title,
      price,
      description,
    };
    axios
      .post(`http://localhost:8000/api/product/new`, objToBeSent)
      .then((res) => {
        console.log(res);
        nav('/');
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="App">
      <form onSubmit={onSubmitHandler}>
        <div className="container mt-5">
          <h1 className="mb-4">Product Manager</h1>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title:
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="price" className="form-label">
              Price:
            </label>
            <input
              type="number"
              className="form-control"
              id="price"
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description:
            </label>
            <input
              type="text"
              className="form-control"
              id="description"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Create
          </button>
          <Link className='btn btn-secondary' to='/'>Back</Link>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
