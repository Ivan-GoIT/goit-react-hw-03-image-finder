import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
//import data from './assets/data.json';

export class App extends Component {
  state = {
    searchQuery: '',
  };


  formSubmit = searchQuery => {
    this.setState({ searchQuery });
  };

  render() {
    const { searchQuery } = this.state;

    return (
      <>
        <Searchbar onSubmit={this.formSubmit} />
        <ImageGallery searchQuery={searchQuery} />
      </>
    );
  }
}
