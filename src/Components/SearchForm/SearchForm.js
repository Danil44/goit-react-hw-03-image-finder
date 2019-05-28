import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './SearchForm.module.css';

export default class SearchForm extends Component {
  state = { query: '' };

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const { query } = this.state;
    const { onSubmit } = this.props;
    onSubmit(query);
  };

  handleQueryChange = ({ target }) => {
    const { value } = target;
    this.setState({ query: value });
  };

  render() {
    const { query } = this.state;
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <input
          className={styles.input}
          type="text"
          autoComplete="off"
          value={query}
          onChange={this.handleQueryChange}
          placeholder="Search images..."
        />
      </form>
    );
  }
}
