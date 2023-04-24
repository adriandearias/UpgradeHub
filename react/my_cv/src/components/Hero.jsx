import React from "react";
import "./Hero.css";
import Card from "./Card/Card"

const Hero = ({ hero }) => {
  return (
    <Card clase="hero">
      <div>
          <img src={hero.image} alt="" />
      </div>
      <h2>{hero.name} </h2>
      <p>🗺️{hero.city} </p>
      <p>🗓️{hero.birthDate}</p>
      <p>
        📧<a href={"mailto:" + hero.email}>
            deariasadrian@gmail.com
         </a>
      </p>
      <p>🐱 <a href={hero.gitHub}>
        GitHub
      </a></p>
    </Card>
  );
};

export default Hero;