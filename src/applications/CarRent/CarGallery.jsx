import { useEffect, useState } from "react";

const CarGallery = () => {
  const [isModal, setIsModal] = useState(false);

  const openModal = () => {
    setIsModal(true);
  };

  const closeModal = () => {
    setIsModal(false);
  };

  return <ul></ul>;
};

export { CarGallery };
