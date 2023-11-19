import React from "react";

const Navbar = () => {
  return (
    <div class="navbar bg-dark">
      <div class="container">
        <h1 class="logo lg-heading text-light">WT</h1>
        <ul class="nav-items">
          <li class="nav-item">
            <a href="./index.html">Home</a>
          </li>
          <li class="nav-item">
            <a href="./about.html">About</a>
          </li>
          <li class="nav-item">
            <a href="./contact.html">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
