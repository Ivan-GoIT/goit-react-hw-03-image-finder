import css from './Section.module.css';
import PropTypes from 'prop-types';

export const Section = ({ children }) => (
  <section className={css.gallery}>
    {children}
  </section>
);

Section.propTypes = {
  children: PropTypes.element,
};

