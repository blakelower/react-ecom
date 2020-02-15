import React from "react";
import {Link} from 'react-router-dom';
export default function CartTotals({ value }) {
  const { CartSubtotal, cartTax, cartTotals, clearCart } = value;
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
            <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalized text-right">
            
            </div>
        </div>
      </div>
    </React.Fragment>
  );
}
