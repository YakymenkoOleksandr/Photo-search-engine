import css from './ImageCard.module.css';
export default function ImageCard({ item, openModal, }) {
  return (
    <div onClick={openModal}>
      <img
        className={css.img}
        src={item.cover_photo.urls.small}
        alt={item.cover_photo.alt_description}
      />
    </div>
  );
}
