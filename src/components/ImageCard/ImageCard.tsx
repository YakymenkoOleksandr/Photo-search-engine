import css from "./ImageCard.module.css";
import { ImageCardProps } from "../../Types"

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
