import React from 'react';
import PropTypes from 'prop-types';

import MoviesList from "../../components/movies-list/movies-list";
import movieProp from "../../types/movie.prop";
import Logo from "../../components/logo/logo";

const MyListPage = ({movies}) => (
  <div className="user-page">
    <header className="page-header user-page__head">
      <Logo />
      <h1 className="page-title user-page__title">My list</h1>
      <div className="user-block">
        <div className="user-block__avatar">
          <img src="img/avatar.jpg" alt="User avatar" width={63} height={63} />
        </div>
      </div>
    </header>
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      <MoviesList movies={movies} />
    </section>
    <footer className="page-footer">
      <div className="logo">
        <a href="main.html" className="logo__link logo__link--light">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </a>
      </div>
      <div className="copyright">
        <p>© 2019 What to watch Ltd.</p>
      </div>
    </footer>
  </div>
);

MyListPage.propTypes = {
  movies: PropTypes.arrayOf(movieProp),
};

export default MyListPage;
