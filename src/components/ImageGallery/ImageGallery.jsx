import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css"
export default function ImageGallery({ items }) {
  return (
    <ul className={css.gallery}>
      {items.length > 0 &&
        items.map(item => (
          <li key={item.id} className={css.item}>
            <ImageCard item={item} />
          </li>
        ))}
    </ul>
  );
}
