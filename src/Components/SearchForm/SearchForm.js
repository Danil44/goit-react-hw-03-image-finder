import React from 'react';
import PropTypes from 'prop-types';
import styles from './SearchForm.module.css';

const SearchForm = ({ onSubmit, onChange, value }) => {
  const handleSubmit = evt => {
    evt.preventDefault();
    onSubmit();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        autoComplete="off"
        value={value}
        onChange={onChange}
        placeholder="Search images..."
      />
    </form>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default SearchForm;
