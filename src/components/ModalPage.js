import Modal from './Modal';
import Button from './Button';
import { useState } from 'react';

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  return <div>
    <Button primary onClick={handleClick}>Open Modal</Button>
    {showModal && <Modal />}
  </div>;
}

export default ModalPage;
