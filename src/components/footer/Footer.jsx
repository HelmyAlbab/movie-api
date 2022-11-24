import React from "react";
import { Link } from "react-router-dom";

import "./footer.scss";
import FooterLogo from "../../assets/play-logo.png";
import FooterBg from "../../assets/footer-bg.jpg";

const Footer = () => {
  return (
    <div
      className="footer container"
      style={{ background: `url(${FooterBg})` }}
    >
      <div className="footer__logo">
        <Link
          className="footer__logo__text"
          to="/"
        >
          <img
            src={FooterLogo}
            alt=""
          />
          Movies
        </Link>
      </div>
      <div className="footer__menus">
        <div className="footer__menu">
          <Link to="#">Home</Link>
          <Link to="#">Contact us</Link>
          <Link to="#">About us</Link>
          <Link to="#">Term of services</Link>
        </div>
        <div className="footer__menu">
          <Link to="#">Live</Link>
          <Link to="#">FAQ</Link>
          <Link to="#">Premium</Link>
          <Link to="#">Pravacy policy</Link>
        </div>
        <div className="footer__menu">
          <Link to="#">You must watch</Link>
          <Link to="#">Recent release</Link>
          <Link to="#">Top IMDB</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
