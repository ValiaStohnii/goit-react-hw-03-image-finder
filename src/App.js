import React, { Component } from 'react';
import './App.css';
import Searchbar from './Components/Searchbar/Searchbar';
import ImageGallery from './Components/ImageGallery';

class App extends Component {
  state = {
    imageName: '',
  };

  componentDidMount() {
    fetch(
      `https://pixabay.com/api/?q=cat&page=1&key=24200424-23477fc3694bee0d0a7f46301&image_type=photo&orientation=horizontal&per_page=12`,
    )
      .then(r => r.json())
      .then(image => this.setState({ image }));
  }

  formSubmit = imageName => {
    this.setState({ imageName });
  };

  render() {
    return (
      <div className="App">
        <Searchbar onSubmit={this.formSubmit} />
        <ImageGallery />
      </div>
    );
  }
}

export default App;
