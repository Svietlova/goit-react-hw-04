import css from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard';
import {nanoid} from 'nanoid'

const ImageGallery = ({photos, openModal}) => {
  const id = nanoid();
  return (
    <ul className={css.gallery}>
      {
        photos.map((photo) => {
        return(<li className={css['gallery-item']} key={photo.id+id}><ImageCard {...photo} openModal={openModal} /></li>);
        })
      }
    </ul>
  );
};

export default ImageGallery;