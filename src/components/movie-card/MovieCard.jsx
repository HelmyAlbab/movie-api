import React from "react";
import "./movie-card.scss";

import { Link } from "react-router-dom";
import Button from "../button/Button";

import apiConfig from "../../api/apiConfig";
import { category } from "../../api/tmdbApi";

import { AiFillPlayCircle } from "react-icons/ai";

const MovieCard = (props) => {
  const item = props.item;
  const link = "/" + category[props.category] + "/" + item.id;

  const bg = apiConfig.w500Image(item.poster_path || item.backdrop_path);

  return (
    <Link to={link}>
      <div className="movie-card">
        <img
          src={bg}
          alt=""
        />
        <Button>
          <AiFillPlayCircle size={"40px"} />
        </Button>
      </div>
      <h3>{item.title || item.name}</h3>
    </Link>
  );
};

export default MovieCard;
