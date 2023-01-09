import { Component } from 'react';
import { Modal } from 'components/Modal/Modal';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import css from './ImageGalleryItem.module.css';
import 'react-lazy-load-image-component/src/effects/blur.css';

export class ImageGalleryItem extends Component {
  state = {
    showModal: false,
    tmpModal:false,
  };

  shouldComponentUpdate({ id: nextId }) {
    const { id } = this.props;
    return !(nextId === id);
  }

  toggleModal = () => {
    console.log('Bingo');
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  tmpModalChanger=()=>{//для пробы отработки открытия модалки
    console.log('tmpModalChanger');
    this.setState({tmpModal:true,})
  }



  render() {
    const { webformatURL, tags, previewURL, largeImageURL } = this.props;
    const { showModal,tmpModal } = this.state;
    return (
      <>
        <li className={css['photo-card']} onClick={this.tmpModalChanger}>
          <LazyLoadImage
            src={webformatURL}
            alt={tags}
            placeholderSrc={previewURL}
            effect="blur"
            className={css['fetched-image']}
          />
        </li>
        {tmpModal && (
          <Modal onClose={this.toggleModal}>
            <LazyLoadImage
              src={largeImageURL}
              alt={tags}
              placeholderSrc={webformatURL}
            />
          </Modal>
        )}
        {<p>tmpModal {tmpModal}</p>}
        {<p>showModal {showModal}</p>}
      </>
    );
  }
}
