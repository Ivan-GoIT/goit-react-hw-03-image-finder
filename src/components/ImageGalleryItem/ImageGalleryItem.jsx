import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({
  webformatURL,
  tags,
  previewURL,
  largeImageURL,
}) => {
  return (
    <div className={css['photo-card']}>
        <img
          src={largeImageURL}
          alt={tags}
          className="lazy"
        />
    </div>
  );
};
