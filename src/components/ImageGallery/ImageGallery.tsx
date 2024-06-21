import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css"

type CoverPhotoType = {
  urls: {
    regular: string;
    small: string;
  };
  alt_description: string;
};

type ItemTypes = {
  id: number,
  cover_photo: CoverPhotoType;
}

type OpenModalType = (imageUrl: string) => void;

type ImageGalleryPropsType = {
  items: ItemTypes[],
  openModal: OpenModalType;
}

export default function ImageGallery({ items, openModal}: ImageGalleryPropsType) {
  return (
    <ul className={css.gallery}>
      {items.length > 0 &&
        items.map(item => (
          <li key={item.id} className={css.item}>
            <ImageCard item={item} openModal={openModal} />
          </li>
        ))}
    </ul>
  );
}
