import React from 'react';
import PropTypes from 'prop-types';
import styles from './GalleryItem.module.css';

const GalleryItem = ({
  webformatURL,
  onClick,
  largeImageURL,
  likes,
  views,
  comments,
  downloads,
}) => {
  const handleShowFullImage = () => {
    onClick(largeImageURL);
  };

  return (
    <li className={styles.item}>
      <img className={styles.img} src={webformatURL} alt="" />

      <div className={styles.stats}>
        <p className={styles.statsItem}>
          <i className="material-icons">thumb_up</i>
          {likes}
        </p>
        <p className={styles.statsItem}>
          <i className="material-icons">visibility</i>
          {views}
        </p>
        <p className={styles.statsItem}>
          <i className="material-icons">comment</i>
          {comments}
        </p>
        <p className={styles.statsItem}>
          <i className="material-icons">cloud_download</i>
          {downloads}
        </p>
      </div>
      <button
        type="button"
        className={styles.fullScreenBtn}
        onClick={handleShowFullImage}
      >
        <i className="material-icons">zoom_out_map</i>
      </button>
    </li>
  );
};

GalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  comments: PropTypes.number.isRequired,
  downloads: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default GalleryItem;
