import React from "react";
import { navbarLinks } from "../constants";

const Navbar = () => {
  return (
    <header>
      <nav>
        {/* Logo */}
        <img src="logo.svg" alt="apple logo" />

        {/* Navbar links */}
        <ul>
          {navbarLinks.map(({ label }) => (
            <li key={label}>
              <a href={label}>{label}</a>
            </li>
          ))}
        </ul>

        {/* Right side actions */}
        <div className="flex-center gap-3">
          <button>
            <img src="search.svg" alt="search" />
          </button>
          <img src="cart.svg" alt="cart" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
