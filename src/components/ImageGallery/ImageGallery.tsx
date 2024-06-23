import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

type CoverPhotoType = {
  id: number;
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
  };
  alt_description: string;
};

type ItemTypes = {
  id: number;
  title: string;
  description: string;
  published_at: string;
  cover_photo: CoverPhotoType;
};

type OpenModalType = (imageUrl: string) => void;

type ImageGalleryPropsType = {
  items: ItemTypes[];
  openModal: OpenModalType;
};

export default function ImageGallery({
  items,
  openModal,
}: ImageGalleryPropsType) {
  return (
    <ul className={css.gallery}>
      {items.length > 0 &&
        items.map((item) => (
          <li key={item.id} className={css.item}>
            <ImageCard item={item} openModal={openModal} />
          </li>
        ))}
    </ul>
  );
}
