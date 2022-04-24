import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import Rating from "./Rating";
import axios from "axios";
import { Store } from "../Store";

const Product = (props) => {
  const { product } = props;
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;
  const addToCartHandler = async (item) => {
    const existItem = cartItems.find((x) => x._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/products/${item._id}`);
    if (data.countInStock < quantity) {
      window.alert("Sorry. Product is out of stock");
      return;
    }

    ctxDispatch({
      type: "CART_ADD_ITEM",
      payload: { ...item, quantity },
    });
  };
  return (
    <Card className="product-card">
      <Link to={`/product/${product.slug}`}>
        <img src={product.image} alt={product.name} className="card-img-top" />
      </Link>
      <Card.Body>
        <Link to={`/product/${product.slug}`} className="product-link">
          <span>{product.name}</span>
        </Link>
        <Rating rating={product.rating} numReviews={product.numReviews} />
        <Card.Text className="product-price">
          <span className="power-span">$</span>
          {product.price}
          <br />

          <span className="delivery-date">
            Est delievery:{" "}
            <span className="delivery-date-span">Fri, Apr 20</span>
          </span>
        </Card.Text>

        {product.countInStock === 0 ? (
          <Button variant="light" disabled>
            Out of stock
          </Button>
        ) : (
          <Button
            onClick={() => addToCartHandler(product)}
            className="product-button"
          >
            Add to cart
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};

export default Product;
