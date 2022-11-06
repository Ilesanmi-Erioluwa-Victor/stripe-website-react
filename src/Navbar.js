import React from "react";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";
import logo from "./images/logo.svg";

export const Navbar = () => {
  const { openSidebar, closeModal, openModal } = useGlobalContext();
  return <div>Navbar</div>;
};
