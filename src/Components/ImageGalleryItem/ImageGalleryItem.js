import React from 'react';
import './ImageGalleryItem.css';

const ImageGalleryItem = ({ imageName, imageUrl }) => {
  return (
    <li className="ImageGalleryItem">
      <img className="ImageGalleryItem-image" src={imageUrl} alt={imageName} />
    </li>
  );
};

export default ImageGalleryItem;
