import ErrorMessage from "../ErrorMessage/ErrorMessage";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import ImageModal from "../ImageModal/ImageModal";
import LoadMore from "../LoadMoreBtn/LoadMoreBtn";
import Loader from "../Loader/Loader";
import { useEffect, useState } from "react";
import axios from "axios";

import {
  Image,
  TextErrorObjType,
  HandleSubmitPropsType,
} from "../../Types"

export default function App() {

  const [images, setImages] = useState<Image[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [carentPage, setCarentPage] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>();
  const [textError, setTextError] = useState<TextErrorObjType | null>(null);
  const [totalPages, setTotalPages] = useState<number | null>(null);
  const [modalImageUrl, setModalImageUrl] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  useEffect(() => {
    async function fetchImages() {
      try {
        setLoading(true);
        const response = await axios.get<{
          results: Image[];
          total_pages: number;
        }>(
          `https://api.unsplash.com/search/collections?client_id=c2HLolhiTAwmDLWov8kOUPakRlrW8klQgATCyT56-gw&page=${carentPage}&per_page=12&orientation=landscape&query=${searchQuery}`
        );

        const normalizedImages = response.data.results.map((image) => ({
          ...image,
          cover_photo: {
            ...image.cover_photo,
            alt_description: image.cover_photo.alt_description || "",
          },
        }));

        setImages((prevImages) => [...prevImages, ...normalizedImages]);
        setTotalPages(response.data.total_pages);
      } catch (error) {
        setTextError({
          message: (error as Error).message || "Unknown error",
          code: "500",
        });
      } finally {
        setLoading(false);
      }
    }

    fetchImages();
  }, [searchQuery, carentPage]);

  const handleSubmit: HandleSubmitPropsType["handleSubmit"] = (
    values,
    actions
  ) => {
    setSearchQuery(values.searchPhotos);
    setCarentPage(1);
    setImages([]);
    actions.resetForm();
  };

  const loadMoreImg: () => void = () => {
    setCarentPage((carentPage) => carentPage + 1);
  };

  const openModal = (imageUrl: string) => {
    setModalImageUrl(imageUrl);
    setIsModalOpen(true);
  };

  const closeModal: () => void = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <SearchBar handleSubmit={handleSubmit} />
      {!textError ? (
        <>
          <ImageGallery items={images} openModal={openModal} />
          {loading && <Loader />}
          {totalPages !== null && carentPage < totalPages && (
            <LoadMore loadMoreImg={loadMoreImg} />
          )}
          <ImageModal
            isOpen={isModalOpen}
            imageUrl={modalImageUrl}
            onClose={closeModal}
          />
        </>
      ) : (
        <>
          <ErrorMessage textError={textError} />
        </>
      )}
    </>
  );
}
