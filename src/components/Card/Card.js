import React from "react";
import { BsCartFill } from 'react-icons/bs';
import "./Card.css";

const Card = ({gun, handleAddToCart}) => {
  const {name, img, action, bullet, capacity, price} = gun
  return (
    <div className="card">
      <div className="image-container">
        <img src={img} alt="" />
      </div>
        <div className="gun-info">
          <h1>{name}</h1>
          <p>Bullet Type: {bullet}</p>
          <p>Capacity: {capacity}</p>
          <p>Action: {action}</p>
        </div>
        <div className="add-to-cart">
          <button onClick={() => handleAddToCart(gun)}><BsCartFill  className="icon"/></button>
          <h1>${price}</h1>
        </div>
    </div>
  );
};

export default Card;
