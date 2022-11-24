import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import "./movie.scss";
import "swiper/css";

import { SwiperSlide, Swiper } from "swiper/react";
import MovieCard from "../movie-card/MovieCard";

import tmdbApi, { category } from "../../api/tmdbApi";

const Movie = (props) => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getList = async () => {
      let response = null;
      const params = {};
      if (props.type !== "similar") {
        switch (props.category) {
          case category.movie:
            response = await tmdbApi.getMoviesList(props.type, { params });
            break;
          default:
            response = await tmdbApi.getTvList(props.type, { params });
        }
      } else {
        response = await tmdbApi.similar(props.category, { params });
      }
      setMovieList(response.results);
    };
    getList();
  });

  return (
    <div className="movie-list">
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={10}
      >
        {movieList.map((item, i) => (
          <SwiperSlide key={i}>
            <MovieCard
              item={item}
              category={props.category}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

Movie.propTypes = {
  category: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Movie;
