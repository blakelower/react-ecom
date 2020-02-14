import React from 'react';
import CartItem from './cartitem';

export default function CartList({value}) {
    console.log(value);
    const {cart} = value

    return(
        <div>
        <h1>hi</h1>
        <CartItem />
        </div>
    )
}