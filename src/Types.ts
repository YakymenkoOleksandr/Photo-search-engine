// Imports
import { FormikHelpers } from "formik";

// Image[]
export type CoverPhoto = {
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

export type Image = {
  id: number;
  title: string;
  description: string;
  published_at: string;
  cover_photo: CoverPhoto;
};

//App.tsx
export type TextErrorObjType = {
  message: string;
  code: string;
};

export type FormValues = {
  searchPhotos: string;
};

export type HandleSubmitPropsType = {
  handleSubmit: (
    values: FormValues,
    actions: FormikHelpers<FormValues>
  ) => void;
};

// ImageGallery.tsx

export type ImageGalleryPropsType = {
  items: Image[];
  openModal: OpenModalType;
};

export type OpenModalType = (imageUrl: string) => void;

// ImageCard.tsx 
// type OpenModalType = (imageUrl: string) => void;

export type ImageCardProps = {
  item: Image;
  openModal: OpenModalType;
};