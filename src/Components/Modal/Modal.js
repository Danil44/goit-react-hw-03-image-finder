import React from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import LazyLoad from 'react-lazy-load';
import styles from './Modal.module.css';

ReactModal.setAppElement('#root');

const Modal = ({ image, isOpen, onClose }) => {
  return (
    <ReactModal isOpen={isOpen} onRequestClose={onClose}>
      <div className={styles.modal}>
        <LazyLoad height={762} debounce={false} offsetVertical={300}>
          <img src={image} alt="" />
        </LazyLoad>
      </div>
    </ReactModal>
  );
};

Modal.propTypes = {
  image: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
