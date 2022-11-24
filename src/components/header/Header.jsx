import React, { useRef } from "react";

import { Link, useLocation } from "react-router-dom";

import "./header.scss";

import logo from "../../assets/play-logo.png";

const headerNav = [
  {
    display: "Home",
    path: "/",
  },
  {
    display: "Movies",
    path: "/movie",
  },
  {
    display: "TV Series",
    path: "/tv",
  },
];

const Header = () => {
  const { pathname } = useLocation();
  const headerRef = useRef(null);
  const active = headerNav.findIndex((e) => e.path === pathname);

  const onScrollHeader = () => {
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
      headerRef.current.classList.add("onScroll");
    } else {
      headerRef.current.classList.remove("onScroll");
    }
  };
  window.addEventListener("scroll", onScrollHeader);

  return (
    <div
      className="header"
      ref={headerRef}
    >
      <div className="header__wrap container">
        <div className="logo">
          <img
            src={logo}
            alt=""
          />
          <Link
            className="logo__text"
            to="/"
          >
            Movies
          </Link>
        </div>
        <ul className="header__nav">
          {headerNav.map((e, i) => (
            <li
              key={i}
              className={`${i === active ? "active" : ""}`}
            >
              <Link to={e.path}>{e.display}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
