import React from "react";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__app-year">Online Store 2022</p>
        <div>
          <a className="footer__github-link" href="https://github.com/Ramitsan">Ramitsan</a> | <a className="footer__github-link" href="https://github.com/sleepyComrade">sleepyComrade</a>
        </div>
        <a href="https://rs.school/js/"><img className="footer__logo-img" src="https://rs.school/images/rs_school_js.svg" alt="rs school logo" /></a>
      </div>
    </footer>
  );
}