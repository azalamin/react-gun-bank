import React from "react";
import { BsCart } from 'react-icons/bs';
import "./Navbar.css";

const Navbar = ({openModal, cart}) => {
  return (
    <nav className='navbar'>
      <h1>The Gun Bank</h1>
        <div className="cart-counter" onClick={openModal}>
          <span>{cart.length}</span>
          <BsCart color="#fff"  className="icon"/>
        </div>
    </nav>
  );
};

export default Navbar;
