import React from "react";

import HeroSlide from "../components/hero-slide/HeroSlide";
import MoviePopular from "../components/movie-list/MoviePopular";
import MovieTopRated from "../components/movie-list/MovieTopRated";
import TvPopular from "../components/movie-list/TvPopular";
import TvTopRated from "../components/movie-list/TvTopRated";

const Home = () => {
  return (
    <>
      <HeroSlide />
      <div className="container">
        <MoviePopular />
        <MovieTopRated />
        <TvPopular />
        <TvTopRated />
      </div>
    </>
  );
};

export default Home;
