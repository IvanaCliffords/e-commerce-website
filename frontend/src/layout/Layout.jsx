import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Container } from "react-bootstrap";

const Layout = (props) => {
  return (
    <div style={{ position: "relative" }}>
      <Header />
      <main style={{ marginTop: "180px", minHeight: "65vh" }}>
        <Container >{props.children}</Container>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
