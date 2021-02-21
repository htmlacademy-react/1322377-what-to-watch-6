import React from 'react';

import movieProp from '../../types/movie.prop';
import Logo from "../../components/logo/logo";
import ReviewForm from "../../components/review-form/review-form";

const AddReviewPage = ({movie}) => {
  const {posterImage, name} = movie;
  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src={posterImage} alt="The Grand Budapest Hotel" />
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <header className="page-header">
          <Logo/>
          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <a href="movie-page.html" className="breadcrumbs__link">{name}</a>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>
          <div className="user-block">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width={63} height={63} />
            </div>
          </div>
        </header>
        <div className="movie-card__poster movie-card__poster--small">
          <img src={posterImage} alt="The Grand Budapest Hotel poster" width={218} height={327} />
        </div>
      </div>
      <ReviewForm />
    </section>
  );
};

AddReviewPage.propTypes = {
  movie: movieProp,
};

export default AddReviewPage;
