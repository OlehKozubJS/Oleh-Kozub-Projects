import { useEffect, useState } from "react";
import { cars } from "../../../db";

const CarItem = ({ car, onLearnMore }) => {
  const [{ make, model, year, rentalPrice, address, rentalCompany, type, id }] =
    useState(car);

  const handleClick = () => {
    onLearnMore(id);
  };

  return (
    <li>
      <div>
        <img src="" alt="" />
      </div>
      <h3>
        <span>
          <span>{make}</span>
          <span>{model}</span>
          <span>{year}</span>
        </span>
        <span>{rentalPrice}</span>
      </h3>
      <ul>
        <li>{address.split(", ")[1]}</li>
        <li>{address.split(", ")[2]}</li>
        <li>{rentalCompany}</li>
        <li>{type}</li>
        <li>{model}</li>
        <li>{id}</li>
      </ul>
      <button onClick={handleClick}>Learn More</button>
    </li>
  );
};

export { CarItem };
