import css from './ImageGallery.module.css';

import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Loader } from '../Loader/Loader';

import { Section } from 'components/Section/Section';
import { Button } from 'components/Button/Button';
import { Component } from 'react';
import { fetchPichureData } from 'components/helpers/fetchPichureData';

import { toast } from 'react-toastify';

const STATUS = {
  idle: 'idle',
  pending: 'pending',
  success: 'success',
  rejected: 'rejected',
};

export class ImageGallery extends Component {
  state = {
    imgData: [],
    page: 1,
    error: {},
    status: STATUS.idle, //idle,pending,success,rejected
  };

  componentDidUpdate(prevProps, prevState) {
    const { searchQuery } = this.props;
    const { searchQuery: prevQuery } = prevProps;
    const { page } = this.state;
    const { page: prevPage } = prevState;
    if (searchQuery !== prevQuery) {
      this.setState({ page: 1, imgData: [] });
    }
    if (searchQuery !== prevQuery || page !== prevPage) {
      this.fetchData();
    }
  }

  fetchData = async () => {
    this.setState({ status: STATUS.pending });
    const { searchQuery } = this.props;
    const { page } = this.state;
    try {
      const requestData = await fetchPichureData(searchQuery, page);
      if (requestData.data.total === 0) {
        this.setState({
          status: STATUS.rejected,
          error: {
            message: 'No images matching your request',
            action: 'error',
          },
        });
        return;
      }
      this.setState(({ imgData: prevData }) => ({
        imgData: [...prevData, ...requestData.data.hits],
        status: STATUS.success,
      }));
    } catch (error) {
      this.setState({
        error: { message: 'Something wrong', action: 'error' },
        status: STATUS.rejected,
      });
    }
  };

  buttonClickHandler = () => {
    this.setState(({ page: prevPage }) => ({ page: prevPage + 1 }));
  };

  render() {
    const {
      error: { message, action },
      status,
    } = this.state;

    status === STATUS.rejected && toast[action](message);

    const { imgData } = this.state;
    // if (!imgData.length) return;
    return (
      <Section className="gallery">
        <ul className={css.container}>
          {imgData.map(imgItem => (
            <ImageGalleryItem key={imgItem.id} {...imgItem} />
          ))}
        </ul>
        {status === STATUS.pending && <Loader />}
        {status === STATUS.success && (
          <Button onClick={this.buttonClickHandler} />
        )}
      </Section>
    );
  }
}
