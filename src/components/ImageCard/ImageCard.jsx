import css from './ImageCard.module.css';
import { useState } from 'react';
import ImageModal from '../ImageModal/ImageModal.jsx';
export default function ImageCard({ item }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <img
        className={css.img}
        src={item.cover_photo.urls.small}
        alt={item.cover_photo.alt_description}
        onClick={openModal}
      />
      <ImageModal
        isOpen={isModalOpen}
        imageUrl={item.cover_photo.urls.regular} 
        onClose={closeModal}
      />
    </>
  );
}
