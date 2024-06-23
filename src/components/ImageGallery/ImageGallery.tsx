import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";
import {ImageGalleryPropsType} from "../../Types"

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
