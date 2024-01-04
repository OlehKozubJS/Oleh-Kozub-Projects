import { useEffect, useState } from "react";
import { CarModal } from "../CarModal";
import { CarItem } from "./CarItem";
import { cars } from "../../../db";

const CarGallery = () => {
  const [isModal, setIsModal] = useState(false);
  const [carId, setCarId] = useState(0);

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
      <CarModal carId={carId} onClose={closeModal} />
      <ul></ul>
    </div>
  );
};

export { CarGallery };
