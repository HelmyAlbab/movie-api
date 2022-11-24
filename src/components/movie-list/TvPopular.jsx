import React from "react";
import { Link } from "react-router-dom";

import { OutlineButton } from "../../components/button/Button";
import Movie from "../../components/movie/Movie";
import { category, tvType } from "../../api/tmdbApi";

const TvPopular = () => {
  return (
    <div className="section mb-3">
      <div className="section__header mb-2">
        <h2>Trending TV</h2>
        <Link to="/tv">
          <OutlineButton className="small">View More</OutlineButton>
        </Link>
      </div>
      <Movie
        category={category.tv}
        type={tvType.popular}
      />
    </div>
  );
};

export default TvPopular;
