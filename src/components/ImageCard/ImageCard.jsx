import css from './ImageCard.module.css';

const ImageCard = ({ urls, user: { username }, likes, description, openModal }) => {
  const alt = `${description}, photo by ${username}`;
  return (
    <div className={css.container}>
      <img
        className={css.img}
        src={urls.small}
        alt={alt}
        onClick={() => {
          openModal(urls.regular, alt);
        }}
        loading="lazzy"
      />
      <div className={css['img-card']}>
        <span>Likes: {likes} </span>
        <span>User: {username}</span>
      </div>
    </div>
  );
};

export default ImageCard;