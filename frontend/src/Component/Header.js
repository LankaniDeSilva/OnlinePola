import React from "react";
import "../CSS/header.css"

function header() {
  return (
    <div>
      <div class="header">
          <div class="name">
        <a href="#default" class="logo">
          OnlinePola
        </a>
        </div>
        <div class="header-right">
        <a href="/login">Login</a>
        <a href="/register">Register</a>
          <a class="active" href="/home">
            Home
          </a>
          <a href="/cart">Cart</a>
          <a href="">Farmer</a>
          <a href="#contact">Delivery</a>
          <a href="">Payment</a>
          <a href=""></a>
        </div>
      </div>
    </div>
  );
}
export default header;
