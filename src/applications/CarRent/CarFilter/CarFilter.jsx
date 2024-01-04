import { useState, useEffect } from "react";
import { SVGimage } from "../images";
import cars from "../advertsCars.json";

const CarFilter = ({ carId, onClose }) => {
  const [car, setCar] = useState({});

  useEffect(() => {
    const carsData = JSON.parse(cars);
    console.log(carsData);
    const carData = carsData.find((car) => car.id === carId);
    setCar(carData);
  }, []);

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.type === "keydown" && event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  return <div></div>;
};

export { CarFilter };
