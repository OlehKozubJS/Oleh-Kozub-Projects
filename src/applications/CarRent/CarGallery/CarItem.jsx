import { useEffect, useState } from "react";
import { cars } from "../../../db";

const CarItem = ({ carId }) => {
  const [
    { img, make, model, year, rentalPrice, address, rentalCompany, type, id },
  ] = useState(
    cars.find((car) => {
      car.id === carId;
    })
  );

  return (
    <li>
      <div>
        <img src={img} alt="" />
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
      <button>Learn More</button>
    </li>
  );
};

export { CarItem };
