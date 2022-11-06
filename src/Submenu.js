import React, { useState, useRef, useEffect } from "react";
import { useGlobalContext } from "./context";

export const Submenu = () => {
  const { isModalOpen } = useGlobalContext;
  return (
    <aside className={`${isModalOpen ? "submenu show" : "submenu"}`}>
      Menuftrgthryjyhjhmhg
    </aside>
  );
};
