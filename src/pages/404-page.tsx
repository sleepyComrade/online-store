import React from "react";
import { Link } from "react-router-dom";
import error from '../assets/images/404-image.png'

export default function NotFoundPage() {
  return (
    <>
      <main>
        <div className="error-page__container">
          <div className="error-page__img-wrap">
            <img className="error-page__img" src={error} alt="404 error" />
          </div>
          <div className="error-page__message-wrap">
            <h2 className="error-page__message">Page not found</h2>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <div className="error-page__button">
                <span>Go to main page</span>
              </div>
            </Link>
          </div>
        </div>
      </main>
      <footer></footer>
    </>
  );
}