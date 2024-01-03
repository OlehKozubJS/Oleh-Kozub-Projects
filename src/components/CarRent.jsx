import { useState /*useEffect*/ } from "react";
import { CarModal } from "./CarModal";
//import cars from "./advertsCars.json";

function CarModal() {
  const [isModal, setIsModal] = useState(false);

  const openModal = () => {
    setIsModal(true);
  };

  const closeModal = () => {
    setIsModal(false);
  };

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      {isModal && <CarModal carId={9582} onClose={closeModal} />}
    </div>
  );
}

export { CarModal };
