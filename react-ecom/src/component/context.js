import React, { Component } from "react";
import Product from "./product";
import { storeProducts, detailProduct } from "../data";

const ProductContext = React.createContext();
//Provider - provide info for app
//Consumer - able to grab props wherever in app instead of passing

class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct: detailProduct, //the detail product is for another component, when the user clicks on the item it takes them to the full description of the item
    cart: storeProducts,
    modalOpen: false,
    modalProduct: detailProduct,
    cartSubTotal: 0, //price of item
    cartTax: 0, //tax for cart
    cartTotal: 0, //total of item
    increment: this.increment,
    decrement: this.decrement,
    removeItem: this.removeItem,
    clearCart: this.clearCart
  };
  componentDidMount() {
    //react lifecycle to get products // this was meant to get a fresh set values. // the point of this was when changing the value in one place were also changing the value that the object was assigned to.
    this.setProducts();
  }
  setProducts = () => {
    let tempProducts = [];
    storeProducts.forEach(item => {
      const singleItem = { ...item };
      tempProducts = [...tempProducts, singleItem]; //looping through
    });
    this.setState(() => {
      return { products: tempProducts };
    });
  };

  //utility item that gets the id
  getItem = id => {
    const product = this.state.products.find(item => item.id === id);
    return product;
  };

  handleDetail = id => {
    const product = this.getItem(id);
    this.setState(() => {
      return { detailProduct: product };
    });
  };
  addToCart = id => {
    //when an item is added to the cart it picks up the id of the specifci item.
    let tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getItem(id));
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    this.setState(
      () => {
        return { products: tempProducts, cart: [...this.state.cart, product] };
      },
      () => {
        console.log(this.state);
      }
    );
  };
  openModal = id => {
    const product = this.getItem(id);
    this.setState(() => {
      return { modalProduct: product, modalOpen: true };
    });
  };
  closeModal = () => {
    this.setState(() => {
      return { modalOpen: false };
    });
  };

  increment = id => {
    console.log("this is increment");
  };
  decrement = id => {
    console.log("this is decrement");
  };
  removeItem = id => {
    console.log("item removed");
  };
  clearCart = () => {
    console.log("cart was cleared");
  };
  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
          openModal: this.openModal,
          closeModal: this.closeModal
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}
const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
