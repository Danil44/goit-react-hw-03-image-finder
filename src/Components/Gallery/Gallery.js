import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import GalleryItem from '../GalleryItem/GalleryItem';
import styles from './Gallery.module.css';

export default class Gallery extends Component {
  state = {};

  listRef = createRef();

  componentDidUpdate(prevProps) {
    const { data } = this.props;
    if (prevProps.data.length !== data) {
      console.log(this.listRef);

      window.scrollTo({
        left: 0,
        top: this.listRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }

  render() {
    const { data, onClick } = this.props;
    return (
      <ul ref={this.listRef} className={styles.list}>
        {data.map(item => (
          <GalleryItem key={item.id} {...item} onClick={onClick} />
        ))}
      </ul>
    );
  }
}

Gallery.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClick: PropTypes.func.isRequired,
};
