import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./component/navbar";
// import Product from "./component/product";
import Productlist from "./component/productlist";
import Details from "./component/details";
import Default from "./component/default";
import Cart from "./component/cart";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Productlist />
        <Details />
        <Cart />
        <Default />
      </React.Fragment>
    );
  }
}

export default App;
