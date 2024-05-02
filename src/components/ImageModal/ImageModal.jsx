import ReactModal from 'react-modal';
import { MdOutlineClose } from 'react-icons/md';

import css from './ImageModal.module.css';

const ImageModal = ({ isOpen, imgSrc, imgAlt, handleClose }) => {
  return (
    <ReactModal
      style={{
        overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
        content: {
            backgroundColor: 'transparent',
            border: 'transparent'
        },
      }}
      isOpen={isOpen}
      appElement={document.getElementById('root')}
      shouldCloseOnEsc={true}
      shouldCloseOnOverlayClick={true}
      preventScroll={true}
      onRequestClose={handleClose}
    >
      <img className={css.img} src={imgSrc} alt={imgAlt} />
      <MdOutlineClose className={css.close} onClick={handleClose} />
    </ReactModal>
  );
};

export default ImageModal;