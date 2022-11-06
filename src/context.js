import { createContext, useContext, useState } from "react";
import data from "./Data";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [isSiderbarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return <AppContext.Provide>{children}</AppContext.Provide>;
};
