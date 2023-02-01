import { Component } from 'react';
import PropTypes from 'prop-types';
import { AiOutlineSearch } from 'react-icons/ai';
import s from './Searchbar.module.css';

export class Searchbar extends Component {
  state = {
    query: '',
    page: 1,
  };

  handleSearchChange = element => {
    this.setState({ query: element.currentTarget.value.toLowerCase() });
  };

  handelSubmit = element => {
    element.preventDefault();
    const { query } = this.state;
    const { onSubmit } = this.props;
    if (query.trim() === '') {
      return alert('Please enter a search value');
    }
    onSubmit(query);
  };

  render() {
    const { handleSearchChange, handelSubmit } = this;
    const { query } = this.state;

    return (
      <header className={s.searchBar}>
        <form className={s.searchForm} onSubmit={handelSubmit}>
          <button className={s.searchFormButton} type="submit">
            <AiOutlineSearch size="2rem" />
          </button>

          <input
            className={s.searchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            value={query}
            onChange={handleSearchChange}
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};
