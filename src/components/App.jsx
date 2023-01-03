import { Component } from 'react';
import { Header } from './Header/Header';
import { ImgContainer } from './ImgContainer/ImgContainer';
import data from './assets/data.json';
import { Section } from './Section/Section';

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
        <Header onSubmit={this.formSubmit} />
        <Section>
          <ImgContainer fetchedImg={data} />
        </Section>
      </>
    );
  }
}
