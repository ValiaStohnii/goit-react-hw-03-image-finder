import React, { Component } from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Loader from '../Loader';
import './ImageGallery.css';

class ImageGallery extends Component {
  state = {
    image: null,
    error: null,
    status: 'idle',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.imageName !== this.props.imageName) {
      this.setState({ status: 'pending' });

      fetch(
        `https://pixabay.com/api/?key=24200424-23477fc3694bee0d0a7f46301&page=1&q=${this.props.imageName}&image_type=photo&orientation=horizontal&per_page=12`,
      )
        .then(r => {
          if (r.ok) {
            return r.json();
          }
          return Promise.reject(new Error(`Please enter a more specific query`));
        })
        .then(image => {
          this.setState({ image, status: 'resolved' });
          console.log(image.hits);
        })
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  }
  render() {
    const { image, error, status } = this.state;

    if (status === 'idle') {
      return <div className="Notification">You must enter query parameters!</div>;
    }
    if (status === 'pending') {
      return <Loader />;
    }
    if (status === 'rejected') {
      return <h2>{error.message}</h2>;
    }
    if (status === 'resolved') {
      return (
        <div>
          <ul className="ImageGallery">
            {image.hits.map(entry => (
              <ImageGalleryItem
                key={entry.id}
                imageName={entry.tags}
                imageUrl={entry.webformatURL}
              />
            ))}
          </ul>
        </div>
      );
    }
  }
}

export default ImageGallery;
