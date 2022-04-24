import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { Navbar, Container, Nav, Badge, NavDropdown } from "react-bootstrap";
import { Store } from "../Store";
import SearchBox from "../components/SearchBox";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { getError } from '../utils';
import { toast } from 'react-toastify';



const Header = () => {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart, userInfo } = state;
  const [categories, setCategories] = useState([]);

  const signoutHandler = () => {
    ctxDispatch({
      type: "USER_SIGNOUT",
    });
    localStorage.removeItem("userInfo");
    localStorage.removeItem("shippingAddress");
    localStorage.removeItem("paymentMethod");
    window.location.href = "/signin";
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await axios.get(`/api/products/categories`);
        setCategories(data);
      } catch (err) {
        toast.error(getError(err));
      }
    };
    fetchCategories();
  }, []);

  return (
    <header className="header">
      <div className="offer">
        <h3>Great Deal! Free Shipping on Orders Over $70!</h3>
      </div>
      <Navbar bg="dark" variant="light" className="navbar-custom" expand="lg">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand className="brand-custom">
              <img
                src={`${process.env.PUBLIC_URL}/images/logo.jpeg`}
                alt="FreeWater logo"
                className="navbar-logo"
              />
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto custom-navbar-item w-100 justify-content-end">
              <Link to="/cart" className="nav-link nav-link-custom">
                <AiOutlineShoppingCart className="navbar-cart" />
                {cart.cartItems.length > 0 && (
                  <Badge pill bg="danger">
                    {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                  </Badge>
                )}
              </Link>
              {userInfo ? (
                <NavDropdown
                  title={userInfo.name}
                  id="basic-nav-dropdown"
                  className="custom-navbar-item-special"
                >
                  <LinkContainer to="/profile">
                    <NavDropdown.Item>User Profile</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/orderhistory">
                    <NavDropdown.Item>Order History</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Divider />
                  <Link
                    className="dropdown-item"
                    to="#signout"
                    onClick={signoutHandler}
                  >
                    Sign Out
                  </Link>
                </NavDropdown>
              ) : (
                <Link className="nav-link" to="/signin">
                  <FaRegUser className="user-icon" />
                </Link>
              )}
            </Nav>
            <SearchBox />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
