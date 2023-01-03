import css from './ImgContainer.module.css'
import { ImgCard } from 'components/ImgCard/ImgCard';

export const ImgContainer = ({fetchedImg}) => {
  return (
    
    <div className={css.container}>
      {fetchedImg.map(imgItem => (
        <ImgCard key={imgItem.id} {...imgItem} />
      ))}
    </div>
  );
};
