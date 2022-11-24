import React from "react";
import { Link } from "react-router-dom";

import { OutlineButton } from "../../components/button/Button";
import Movie from "../../components/movie/Movie";
import { category, movieType } from "../../api/tmdbApi";

const MovieTopRated = () => {
  return (
    <div className="section mb-3">
      <div className="section__header mb-2">
        <h2>Top Rated Movies</h2>
        <Link to="/movie">
          <OutlineButton className="small">View More</OutlineButton>
        </Link>
      </div>
      <Movie
        category={category.movie}
        type={movieType.top_rated}
      />
    </div>
  );
};

export default MovieTopRated;
