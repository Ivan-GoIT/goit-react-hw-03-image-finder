import css from './Header.module.css';
import { ImSearch } from 'react-icons/im';
import { Component } from 'react';

export class Header extends Component {
  state = {
    formSearchQuery: '',
  };

  onChangeHandler = evt => {
    this.setState({ formSearchQuery: evt.currentTarget.value });
  };

  onSubmitFormHandler = evt => {
    evt.preventDefault();
    this.props.onSubmit(this.state.formSearchQuery);
    this.setState({formSearchQuery:''})
  };

  render() {
    
    return (
      <header className={css.header}>
        <form className={css['search-form']} onSubmit={this.onSubmitFormHandler}>
          <input
            type="text"
            name="searchQuery"
            autoComplete="off"
            value={this.state.formSearchQuery}
            placeholder="Search images..."
            onChange={this.onChangeHandler}
          />
          <button type="submit">
            <ImSearch className={css['search-form-icon']} />
          </button>
        </form>
      </header>
    );
  }
}
