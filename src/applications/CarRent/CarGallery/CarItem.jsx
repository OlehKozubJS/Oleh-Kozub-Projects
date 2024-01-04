import { useEffect, useState } from "react";
import { cars } from "../../../db";

const CarItem = ({ carId }) => {
  const [{ make, model, year, rentalPrice, address, rentalCompany, type, id }] =
    useState(
      cars.find((car) => {
        car.id === carId;
      })
    );

  return (
    <li>
      <div>
        <img src="" alt="" />
      </div>
      <h3>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </h3>
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <button>Learn More</button>
    </li>
  );
};

export { CarItem };
