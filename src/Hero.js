import React from "react";
import { useGlobalContext } from "./context";
import Phone from "./images/phone.svg";

export const Hero = () => {
  const { closeModal } = useGlobalContext();
  return (
    <section className="hero">
      <div className="hero-center">
        <article className="hero-info">
          <h1>Payments infrastructure for the internet</h1>
          <p>
            I'm baby twee lyft vape blue bottle keytar Brooklyn pork belly
            vaporware man braid art party gluten-free. Before they sold out
            kinfolk asymmetrical, sriracha XOXO beard subway tile salvia 8-bit
            yuccie. Wolf truffaut man braid, sriracha YOLO salvia crucifix
            pop-up pickled. Distillery locavore tattooed williamsburg mixtape
            cornhole. Bespoke next level DIY kitsch sartorial master cleanse
            migas. Kogi butcher literally sustainable cliche.
          </p>
          <button className="btn">Start now</button>
        </article>
        <article className="hero-images">
          <img
            src={Phone}
            className="phone-img"
            alt="hero-img"
            loading="lazy"
          />
        </article>
      </div>
    </section>
  );
};
