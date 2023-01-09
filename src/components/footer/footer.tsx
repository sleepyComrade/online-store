import React from "react";
import github from "../../assets/images/github-logo.png";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__app-year">Online Store 2022</p>
        <div className="footer__github-wrap">
          <a className="footer__github-link" href="https://github.com/Ramitsan">Ramitsan</a>
          <img className="footer__github-logo" src={github} alt="github logo" />
          <a className="footer__github-link" href="https://github.com/sleepyComrade">sleepyComrade</a>
        </div>
        <a href="https://rs.school/js/"><img className="footer__logo-img" src="https://rs.school/images/rs_school_js.svg" alt="rs school logo" /></a>
      </div>
    </footer>
  );
}