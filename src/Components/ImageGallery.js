import React from 'react';
import ImageGalleryItem from './ImageGalleryItem';

const ImageGallery = ({ imageName }) => {
  return (
    <ul className="gallery">
      <ImageGalleryItem imageName={imageName} />
    </ul>
  );
};

export default ImageGallery;
