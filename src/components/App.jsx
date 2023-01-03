import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import data from './assets/data.json';
import { Section } from './Section/Section';
import { Button } from './Button/Button';

export class App extends Component {
  state = {
    searchQuery: '',
  };

  formSubmit = searchQuery => {
    this.setState({ searchQuery });
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.formSubmit} />
        <Section>
          <ImageGallery fetchedImg={data} />
        </Section>
        <Section>
        <Button />

        </Section>
      </>
    );
  }
}
