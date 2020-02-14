import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.png";

export default class Navbar extends Component {
  render() {
    return (
      <nav class="navbar navbar-expands-sm bg-pink navbar-dark px-sm-5">
        {/*https://cdn1.iconfinder.com/data/icons/clothes-outfit-line-shop-aholic/512/Pants-512.png */}
        {/* <Link to="/">
          <img src={logo} alt="store" className="navbar-brand"></img>
        </Link> */}
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5"></li>
          <Link to="/" className="nav-link">
            products
          </Link>
        </ul>
        <Link to="/cart" className="ml-auto">
          <button>
            <i className="fas fa-cart-plus" />
            my cart
          </button>
        </Link>
      </nav>
    );
  }
}
