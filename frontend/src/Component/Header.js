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
          <a class="active" href="#home">
            Home
          </a>
          <a href="#contact">Cart</a>
          <a href="#contact">Delivery</a>
          <a href="#contact">Payment</a>
          <a href="#about">About</a>
        </div>
      </div>
    </div>
  );
}
export default header;
