import React from "react";
import "./menubar.css";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";

export const MenuBar = () => {
  return (
    <nav className="menu-bar">
      <ul>
        <li>
          <a href="#farms">Explore Farms</a>
        </li>
        <li>
          <a href="#poglg">Premium Organic Grocery List Generator</a>
        </li>
        <li>
          <a href="#resources">Resources</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#contact">Contact Us</a>
        </li>
        <li>
          <a href="#login">Login</a>
        </li>
      </ul>
    </nav>
  );
};

export default MenuBar;
