import css from './ImgCard.module.css'

export const ImgCard = ({
    likes,
    views,
    comments,
    downloads,
    webformatURL,
    tags,
    previewURL,
    largeImageURL,
  }) => {
  return (
    <div className={css['photo-card']}>
      <div className={css['img-box']}>
        <img
          src={previewURL}
          data-src={webformatURL}
          alt={tags}
          data-sizes="auto"
          className="lazyload"
        />
      </div>
      <div className={css.info}>
        <p className={css['info-item']}>
          <b>Likes</b>{likes}
        </p>
        <p className={css['info-item']}>
          <b>Views</b>{views}
        </p>
        <p className={css['info-item']}>
          <b>Comments</b>{comments}
        </p>
        <p className={css['info-item']}>
          <b>Downloads</b>{downloads}
        </p>
      </div>
    </div>
  );
};
