import React, { Component } from "react";
import Product from "./product";
import { storeProducts, detailProduct } from "../data";

const ProductContext = React.createContext();
//Provider - provide info for app
//Consumer - able to grab props wherever in app instead of passing

class ProductProvider extends Component {
  state = {
    products: storeProducts,
    detailProduct: detailProduct
  };
  handleDetail = () => {
    console.log("hello from detail");
  };
  addToCart = () => {
    console.log("hello from addToCart");
  };
  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}
const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
