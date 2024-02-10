// src/DairyProductCard.js
import React from 'react';

const DairyProductCard = ({ product }) => {
  return (
    <div className="card" style={{ width: '18rem', margin: '1rem' }}>
      <img src={product.image} className="card-img-top" alt={product.title} />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">{product.description}</p>
        <p className="card-text">Price: ${product.price}</p>
        <p className="card-text">Rating: {product.rating} / 5</p>
        <a href="#" className="btn btn-primary">Buy Now</a>
      </div>
    </div>
  );
};

export default DairyProductCard;
