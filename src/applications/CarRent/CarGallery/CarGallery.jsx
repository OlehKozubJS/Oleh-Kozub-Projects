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

  const openModal = (carId) => {
    setIsModal(true);
    setCarId(carId);
  };

  const closeModal = () => {
    setIsModal(false);
  };

  return (
    <div>
      {isModal && <CarModal carId={Number(carId)} onClose={closeModal} />}
      <ul>
        {carIds.map((carId, index) => {
          return <CarItem key={index} carId={carId} onLearnMore={openModal} />;
        })}
      </ul>
    </div>
  );
};

export { CarGallery };
