import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.png";
import styled from "styled-components";

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expands-sm navbar-dark px-sm-5">
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
          <ButtonContainer>
            <span className="mr-2">
              <i className="fas fa-cart-plus" />
            </span>
            my cart
          </ButtonContainer>
        </Link>
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
  background: var(--mainPink);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
`;

export const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1.4rem;
  background: transparent;
  border: 0.05rem solid var(--mainPink);
  color: ${prop => prop.cart ? "var (--mainYellow)": "var(--mainLight)"};
  border-radius: 0.5rem;
  border-color: ${props => (props.cart? "var (--mainYellow)" : "var (--mainLight)")};  
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: 0.5s ease-in-out;
  &:hover {
    background: var(--mainPink);
    color: var(--mainLight);
  }
  &:focus {
    outline: none;
  }
`;
