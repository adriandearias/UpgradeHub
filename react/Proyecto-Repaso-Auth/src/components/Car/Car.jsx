import React from "react";
import "./Car.css";

const Car = ({ car }) => {
  return (
    <div className="car-container">
      <div className="car">
        <div>
          <img src={car.image} alt={car.model} />
        </div>
        <h3>
          {car.brand} {car.model}
        </h3>
      </div>
    </div>
  );
};

export default Car;
