import React from "react";
import { useGlobalContext } from "./context";
import Phone from "./images/phone.svg";

export const Hero = () => {
  const { closeModal } = useGlobalContext();
  return (
    <section className="hero">
      <div className="hero-center">
        <article></article>
      </div>
    </section>
  );
};
