import React from 'react';
import './CartItem.css';

const CartItem = ({gun}) => {
    const {name, img} = gun;
    return (
        <div className='cart-item'>
            <div>
                <img src={img} alt="" />
            </div>
            <h2>{name}</h2>
        </div>
    );
};

export default CartItem;