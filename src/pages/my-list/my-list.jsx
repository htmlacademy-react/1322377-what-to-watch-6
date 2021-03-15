import React from 'react';

import MoviesList from "../../components/movies-list/movies-list";
import Logo from "../../components/logo/logo";
import Footer from "../../components/footer/footer";

import propTypes from './my-list.props';

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
    <Footer />
  </div>
);

MyListPage.propTypes = propTypes;

export default MyListPage;
