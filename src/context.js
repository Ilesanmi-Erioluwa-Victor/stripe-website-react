import { createContext, useContext, useState } from "react";
import data from "./Data";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [isSiderbarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return <AppContext.Provide>{children}</AppContext.Provide>;
};
