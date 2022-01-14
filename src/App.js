import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Searchbar from './Components/Searchbar/Searchbar';
import ImageGallery from './Components/ImageGallery';

class App extends Component {
  state = {
    imageName: '',
  };

  formSubmit = imageName => {
    this.setState({ imageName });
  };

  render() {
    return (
      <div className="App">
        <Searchbar onSubmit={this.formSubmit} />
        <ToastContainer />
        <ImageGallery imageName={this.state.imageName} />
      </div>
    );
  }
}

export default App;
