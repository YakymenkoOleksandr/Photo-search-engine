/*import ImageCard from '../ImageCard/ImageCard';*/

export default function ImageGallery({ items }) {
  return (
    <ul>
      {items.length > 0 &&
        items.map(item => (
          <li key={item.id}>
            <div>
              {console.log(item)}
              <img src={item.cover_photo.urls.small} alt={item.cover_photo.alt_description} />
            </div>
          </li>
        ))}
    </ul>
  );
}
