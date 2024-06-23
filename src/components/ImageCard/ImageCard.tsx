import css from "./ImageCard.module.css";

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

type ItemType = {
  id: number;
  title: string;
  description: string;
  published_at: string;
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
