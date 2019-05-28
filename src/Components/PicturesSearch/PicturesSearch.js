import React, { Component } from 'react';
import axios from 'axios';
import SearchForm from '../SearchForm/SearchForm';
import Gallery from '../Gallery/Gallery';
import styles from './PictureSearch.module.css';
import Modal from '../Modal/Modal';

export default class PictureSearch extends Component {
  state = { pictures: [], query: '', page: 1, showModal: false, fullImage: '' };

  componentDidMount() {
    this.fetchPictures();
  }

  componentDidUpdate(prevProps, prevState) {
    const { page } = this.state;
    if (prevState.page !== page) {
      this.fetchPictures();
    }
  }

  fetchPictures = () => {
    const key = process.env.REACT_APP_API_KEY;
    const { page, query } = this.state;

    this.setState({ page: 1 });
    axios
      .get(
        `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${query}&page=${page}&per_page=8&key=${key}`,
      )
      .then(res =>
        this.setState(state => ({
          pictures: [...state.pictures, ...this.mapper(res.data.hits)],
        })),
      )
      .catch(err => console.log(err));
  };

  mapper = data => {
    const { pictures } = this.state;
    const selectedData = data.map(
      ({
        id,
        webformatURL,
        largeImageURL,
        likes,
        views,
        comments,
        downloads,
      }) => ({
        id,
        webformatURL,
        largeImageURL,
        likes,
        views,
        comments,
        downloads,
      }),
    );
    return selectedData.filter(
      newData => !pictures.find(prevData => newData.id === prevData.id),
    );
  };

  handleSearchSubmit = query => {
    this.setState(state => {
      return state.query !== query && { pictures: [] };
    });
    this.setState({ query }, this.fetchPictures);
  };

  handleNextPage = () => {
    this.setState(state => ({ page: state.page + 1 }));
  };

  handleOpenFullImage = image => {
    this.setState({ showModal: true, fullImage: image });
  };

  handleCloseFullImage = () => {
    this.setState({ showModal: false, fullImage: '' });
  };

  render() {
    const { pictures, query, fullImage, showModal } = this.state;
    return (
      <div className={styles.container}>
        <SearchForm
          onSubmit={this.handleSearchSubmit}
          onChange={this.handleQueryChange}
          value={query}
        />
        <Gallery data={pictures} onClick={this.handleOpenFullImage} />

        {showModal && (
          <Modal
            image={fullImage}
            isOpen={showModal}
            onClose={this.handleCloseFullImage}
          />
        )}

        {pictures.length > 0 && (
          <button
            className={styles.button}
            type="button"
            onClick={this.handleNextPage}
          >
            Load more
          </button>
        )}
      </div>
    );
  }
}
