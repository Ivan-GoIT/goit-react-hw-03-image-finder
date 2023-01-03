import css from './Searchbar.module.css';
import { ImSearch } from 'react-icons/im';
import { Component } from 'react';

export class Searchbar extends Component {
  state = {
    formSearchQuery: '',
  };

  onChangeHandler = evt => {
    this.setState({ formSearchQuery: evt.currentTarget.value });
  };

  onSubmitFormHandler = evt => {
    evt.preventDefault();
    this.props.onSubmit(this.state.formSearchQuery);
    this.setState({ formSearchQuery: '' });
  };

  render() {
    return (
      <header className={css.searchbar}>
        <form className={css.searchForm}>
          <button type="submit" className={css['searchForm-button']}>
            <span className={css['button-labe']}>
              <ImSearch className={css.icon} />
            </span>
          </button>

          <input
            className={css.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>

    );
  }
}
