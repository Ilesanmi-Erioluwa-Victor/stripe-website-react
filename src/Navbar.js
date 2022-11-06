import React from "react";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";
import logo from "./images/logo.svg";

export const Navbar = () => {
  const { openSidebar, closeModal, openModal } = useGlobalContext();

  return (
    <nav className="nav">
      <div className="nav-center">
        <div className="nav-header">
          {/* <img src={logo} alt="stripe" loading="lazy" className="nav-logo" /> */}
          <h2>Stripe</h2>
          <button className="btn toggle-btn" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>

        <ul className="nav-links">
          <li>
            <button className="link-btn">Products</button>
          </li>
          <li>
            <button className="link-btn">Developers</button>
          </li>

          <li>
            <button className="link-btn">Company</button>
          </li>
        </ul>

        <button className="btn signin-btn">signin</button>
      </div>
    </nav>
  );
};
