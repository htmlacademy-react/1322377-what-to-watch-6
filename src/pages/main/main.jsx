import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import MoviePreview from "../../components/movie-preview/movie-preview";
import GenresList from "../../components/genres-list/genres-list";
import MoviesList from "../../components/movies-list/movies-list";
import Footer from "../../components/footer/footer";

import movieProp from "../../types/movie.prop";
import {getFilteredMovies, getActiveGenre} from "../../store/selectors";

const MainPage = (props) => {
  const {filteredMovies, activeGenre} = props;

  return (
    <>
      <MoviePreview />
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenresList activeGenre={activeGenre} />
          <MoviesList movies={filteredMovies} />
          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

MainPage.propTypes = {
  filteredMovies: PropTypes.arrayOf(movieProp),
  activeGenre: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  filteredMovies: getFilteredMovies(state),
  activeGenre: getActiveGenre(state),
});

export default connect(mapStateToProps, null)(MainPage);
