import React from 'react';
import './styles.css';

const NotFoundPage = () => (
  <section className="error-page">
    <h1 className="error-page__header">Страница не найдена</h1>
    <a className="error-page__link" href="/">Вернуться на главную</a>
  </section>
);

export default NotFoundPage;
