import css from "./ImageCard.module.css";

type CoverPhotoType = {
  urls: {
    regular: string;
    small: string;
  };
  alt_description: string;
};

type ItemType = {
  cover_photo: CoverPhotoType;
};

type OpenModalType = (imageUrl: string) => void;

type ImageCardProps = {
  item: ItemType;
  openModal: OpenModalType;
};

export default function ImageCard({ item, openModal }: ImageCardProps) {
  return (
    <img
      onClick={() => openModal(item.cover_photo.urls.regular)}
      className={css.img}
      src={item.cover_photo.urls.small}
      alt={item.cover_photo.alt_description}
    />
  );
}
