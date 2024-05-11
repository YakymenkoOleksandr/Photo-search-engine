import ErrorMessage from '../ErrorMessage/ErrorMessage';
import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import ImageModal from '../ImageModal/ImageModal';
import LoadMore from '../LoadMoreBtn/LoadMoreBtn';
import Loader from '../Loader/Loader';
import { useEffect, useState } from 'react';
import axios from 'axios';


export default function App() {
  const [images, setImages] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [carentPage, setCarentPage] = useState(0);
  const [loading, setLoading] = useState();
  const [textError, setTextError] = useState();
  const [totalPages, setTotalPages] = useState(null);


  useEffect(() => {
    async function fetchImages() {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://api.unsplash.com/search/collections?client_id=c2HLolhiTAwmDLWov8kOUPakRlrW8klQgATCyT56-gw&page=${carentPage}&per_page=12&orientation=landscape&query=${searchQuery}`
        );
        setImages(prevImages => [...prevImages, ...response.data.results]);
        setTotalPages(response.data.total_pages);
      } catch (error) {
        setTextError(error);
      } finally {
        setLoading(false);
      }
    }

    fetchImages();
  }, [searchQuery, carentPage]);

  const handleSubmit = (values, actions) => {
    setSearchQuery(values.searchPhotos);
    setCarentPage(1);
    setImages([]);
    actions.resetForm();
  };

  const loadMoreImg = () => {
    setCarentPage(carentPage => carentPage + 1);
  };

  return (
    <>
      {console.log(carentPage, totalPages)}
      <SearchBar handleSubmit={handleSubmit} />
      {!textError ? (
        <>
          <ImageGallery items={images} />
          {loading && <Loader />}
          {totalPages !== null && carentPage < totalPages && (
            <LoadMore loadMoreImg={loadMoreImg} />
          )}
          <ImageModal />
        </>
      ) : (
        <>
          <ErrorMessage textError={textError} />
        </>
      )}
    </>
  );
}
