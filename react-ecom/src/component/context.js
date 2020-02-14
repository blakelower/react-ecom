import React, { Component } from "react";
import Product from "./product";
import { storeProducts, detailProduct } from "../data";

const ProductContext = React.createContext();
//Provider - provide info for app
//Consumer - able to grab props wherever in app instead of passing

class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct: detailProduct //the detail product is for another component, when the user clicks on the item it takes them to the full description of the item
  };
  componentDidMount(){  //react lifecycle to get products // this was meant to get a fresh set values. // the point of this was when changing the value in one place were also changing the value that the object was assigned to. 
      this.setProducts();
  }
  setProducts = () => {
      let tempProducts = [];
      storeProducts.forEach(item => {
        const singleItem = {...item};
        tempProducts = [...tempProducts, singleItem] //looping through
      })
      this.setState(() => {
          return {products:tempProducts}
      })
  }
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
