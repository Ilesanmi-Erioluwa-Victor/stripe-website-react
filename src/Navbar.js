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
        </div>
      </div>
    </nav>
  );
};
