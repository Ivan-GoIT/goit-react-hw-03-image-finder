import css from './ImageGallery.module.css';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ fetchedImg }) => {
  return (
    <div className={css.container}>
      {fetchedImg.map(imgItem => (
        <ImageGalleryItem key={imgItem.id} {...imgItem} />
      ))}
    </div>
  );
};
