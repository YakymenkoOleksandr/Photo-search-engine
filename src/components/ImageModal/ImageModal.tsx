
import Modal from 'react-modal';
import css from './ImageModal.module.css'; 

type onCloseType = () => void;

type ImageModalPropsType = {
  isOpen: boolean,
  imageUrl: string,
  onClose: onCloseType;
}

Modal.setAppElement('#root');

export default function ImageModal({ isOpen, imageUrl, onClose }: ImageModalPropsType) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Image Modal"
      className={css.modalWindowOfImg}
      overlayClassName={css.modalOverlay}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
    >
      <img src={imageUrl} alt="Large version of the image" className={css.animalImg} />
    </Modal>
  );
}