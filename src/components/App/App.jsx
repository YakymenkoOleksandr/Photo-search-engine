import ErrorMessage from '../ErrorMessage/ErrorMessage';
import SearchBar from '../Header/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import ImageModal from '../ImageModal/ImageModal';
import LoadMore from '../LoadMoreBtn/LoadMoreBtn';
import Loader from '../Loader/Loader';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    async function fetchImages() {
      const response = await axios.get(
        'https://api.unsplash.com/search/collections?client_id=c2HLolhiTAwmDLWov8kOUPakRlrW8klQgATCyT56-gw&per_page=12&query=office'
      );
        setImages(response.data.results);
    }
    fetchImages();
  }, []);

  return (
    <>
      <SearchBar />
          <ImageGallery items={images} />
          {console.log(images)}
      <Loader />{' '}
      {/*відображається під галереєю поки відбувається завантаження зображень*/}
      <ErrorMessage />{' '}
      {/*рендериться замість галереї зображень у випадку помилки HTTP-запиту.*/}
      <LoadMore />{' '}
      {/*Кнопка має рендеритися лише тоді, коли є які-небудь завантажені зображення.
Якщо масив зображень порожній, кнопка не рендериться.*/}
      <ImageModal />
    </>
  );
}
