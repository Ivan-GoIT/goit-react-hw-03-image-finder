import css from './ImageGallery.module.css';

import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Loader } from '../Loader/Loader';

import { Section } from 'components/Section/Section';
import { Button } from 'components/Button/Button';
import { Component } from 'react';
import { fetchPichureData } from 'components/helpers/fetchPichureData';

export class ImageGallery extends Component {
  state = {
    imgData: [],
    page: 1,
    loading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const { searchQuery } = this.props;
    const { searchQuery: prevQuery } = prevProps;
    const { page } = this.state;
    const { page: prevPage } = prevState;
    if (
      (searchQuery !== '' && searchQuery !== prevQuery) ||
      page !== prevPage
    ) {
      this.fetchData(searchQuery, page);
    }
  }

  async fetchData() {
    this.setState({ loading: true });
    const { searchQuery } = this.props;
    const { page } = this.state;

    try {
      const requestData = await fetchPichureData(searchQuery, page);

      this.setState({ imgData: requestData.data.hits });
    } catch (error) {
      console.log('ERRROR', error);
    }

    this.setState({ loading: false });
  }

  buttonClickHandler = () => {
    console.log('buttonClickHandler');
    this.setState(({ page: prevPage }) => ({ page: prevPage + 1 }));
  };

  render() {
    const { loading, imgData } = this.state;
    if (!imgData.length) return;
    return (
      <>
        {loading ? (
          <Loader />
        ) : (
          <>
            <Section className="gallery">
              <>
                <ul className={css.container}>
                  {imgData.map(imgItem => (
                    <ImageGalleryItem key={imgItem.id} {...imgItem} />
                  ))}
                </ul>
                <Button onClick={this.buttonClickHandler} />
              </>
            </Section>
          </>
        )}
      </>
    );
  }
}
