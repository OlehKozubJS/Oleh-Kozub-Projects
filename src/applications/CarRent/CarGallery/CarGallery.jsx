import { useEffect, useState } from "react";
import { CarModal } from "../CarModal";
import { CarItem } from "./CarItem";
import { cars } from "../../../db";

const CarGallery = () => {
  const [isModal, setIsModal] = useState(false);

  const openModal = () => {
    setIsModal(true);
  };

  const closeModal = () => {
    setIsModal(false);
  };

  return (
    <div>
      <CarModal />
      <ul></ul>
    </div>
  );
};

export { CarGallery };
