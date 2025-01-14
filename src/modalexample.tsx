import { useState } from "react";

function ModalExample() {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility

  // Open the modal
  const openModal = () => setIsModalOpen(true);

  // Close the modal
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
    
      <button onClick={openModal}>Open Modal</button>

 
      {isModalOpen && (
        <div onClick={closeModal}>
          <div
            onClick={(e) => e.stopPropagation()} // Prevent click on modal content from closing it
          >
            <h2>Modal Title</h2>
            <p>This is the modal content.</p>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ModalExample;
