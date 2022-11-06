import React from "react";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "./context";
import data from "./Data";

export const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return (
    <aside
      className={`${
        isSidebarOpen ? "sidebar-wrapper show" : "sidebar-wrapper"
      }`}
    >
      <div className="sidebar">
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>

        <div className="sidebar-link">
          {data.map((item, index) => {
            const { page, links } = item;
            return (
              <article key={index}>
                <h2>{page}</h2>
                <div className="sidebar-sublinks">
                  {links.map((link, index) => {
                    const { url, icon, label } = link;
                    return (
                      <a href={url}>
                        {icon}

                        {label}
                      </a>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </aside>
  );
};
