import React from 'react';
import './ImageGalleryItem.css';

const ImageGalleryItem = ({ imageName, imageUrl, onImageClick }) => {
  return (
    <li className="ImageGalleryItem">
      <img
        onClick={onImageClick}
        className="ImageGalleryItem-image"
        src={imageUrl}
        alt={imageName}
      />
    </li>
  );
};

export default ImageGalleryItem;
