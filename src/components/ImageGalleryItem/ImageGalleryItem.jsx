import { Component } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import css from './ImageGalleryItem.module.css';
import 'react-lazy-load-image-component/src/effects/blur.css';

export class ImageGalleryItem extends Component {
  shouldComponentUpdate({ id: nextId }) {
    const { id } = this.props;
    return !(nextId === id);
  }
  render() {
    const { webformatURL, tags, previewURL, largeImageURL } = this.props;
    return (
      <li className={css['photo-card']}>
        <LazyLoadImage
          src={webformatURL}
          alt={tags}
          placeholderSrc={previewURL}
          effect="blur"
          className={css['fetched-image']}
        />
      </li>
    );
  }
}
