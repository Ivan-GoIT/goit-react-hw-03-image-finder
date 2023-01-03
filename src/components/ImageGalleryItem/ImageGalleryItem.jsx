import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({
  webformatURL,
  tags,
  previewURL,
  largeImageURL,
}) => {
  return (
    <li className={css['photo-card']}>
        <img
          src={largeImageURL}
          alt={tags}
          className="lazy"
        />
    </li>
  );
};
