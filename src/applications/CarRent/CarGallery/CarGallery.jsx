import { useEffect, useState } from "react";
import { CarModal } from "../CarModal";
import { CarItem } from "./CarItem";
import { cars } from "../../../db";

const CarGallery = () => {
  const [isModal, setIsModal] = useState(false);
  const [carId, setCarId] = useState(0);
  const [carIds] = useState(
    cars.map((car) => {
      return car.id;
    })
  );

  const openModal = () => {
    setIsModal(true);
  };

  const closeModal = () => {
    setIsModal(false);
  };

  const getCarId = (carId) => {
    setCarId(carId);
  };

  return (
    <div>
      {isModal && <CarModal carId={carId} onClose={closeModal} />}
      <ul>
        {carIds.map((carId) => {
          return <CarItem carId={carId} onLearnMore={getCarId} />;
        })}
      </ul>
    </div>
  );
};

export { CarGallery };
