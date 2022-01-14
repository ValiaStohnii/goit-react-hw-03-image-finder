import React, { Component } from 'react';
import ImageGalleryItem from './ImageGalleryItem';

class ImageGallery extends Component {
  state = {
    image: null,
    loading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.imageName !== this.props.imageName) {
      this.setState({ loading: true });

      fetch(
        `https://pixabay.com/api/?key=24200424-23477fc3694bee0d0a7f46301&page=1&q=${this.props.imageName}&image_type=photo&orientation=horizontal&per_page=12`,
      )
        .then(r => r.json())
        .then(image => this.setState({ image }))
        .finally(() => this.setState({ loading: false }));
    }
  }
  render() {
    const { loading, image } = this.state;
    const { imageName } = this.props;
    return (
      <div>
        {loading && <div>Loading...</div>}
        {!imageName && <div>Введіть назву картинки</div>}
        {image && (
          <ul className="gallery">
            <ImageGalleryItem imageName={image.tags} imageUrl={image.webformatURL} />
          </ul>
        )}
      </div>
    );
  }
}

export default ImageGallery;
