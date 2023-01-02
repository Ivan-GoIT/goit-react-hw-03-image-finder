import css from './Header.module.css'
import {ImSearch} from 'react-icons/im'
import { Component } from 'react';

export class Header extends Component {
  state = {
    searchQuery: '',
  };
  render() {
    return (
      <header className={css.header}>
        <form className={css['search-form']} id="search-form">
          <input
            type="text"
            name="searchQuery"
            autoComplete="off"
            placeholder="Search images..."
          />
          <button type="submit">
            <ImSearch className={css['search-form-icon']} />
          </button>
        </form>
      </header>
    );
  }
}
