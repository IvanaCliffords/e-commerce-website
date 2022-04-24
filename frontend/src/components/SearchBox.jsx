import React, { useState } from "react";
import { Form, Button, InputGroup, FormControl } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const SearchBox = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    navigate(query ? `/search/?query=${query}` : "/search");
  };

  return (
    <Form className="d-flex me-auto" onSubmit={submitHandler} className="search-form" >
      <InputGroup>
        <FormControl
          className="search-custom"
          type="text"
          name="q"
          id="q"
          onChange={(e) => setQuery(e.target.value)}
          placeholder="search our store"
          aria-label="Search Products"
          aria-describedby="button-search"
        ></FormControl>
        <Button type="submit" id="button-search" className="search-button-custom">
          <i className="fas fa-search"></i>
        </Button>
      </InputGroup>
    </Form>
  );
};

export default SearchBox;
