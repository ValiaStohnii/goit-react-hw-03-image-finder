import React from 'react';

const ImageGalleryItem = ({ imageName, imageUrl }) => {
  return (
    <li className="gallery-item">
      <img src={imageUrl} alt={imageName} />
    </li>
  );
};

export default ImageGalleryItem;
