import React, { useState, useEffect, useCallback } from "react";
import { useHistory, useParams } from "react-router-dom";
import "./movie-grid.scss";

import MovieCard from "../movie-card/MovieCard";
import Input from "../input/Input";
import Button, { OutlineButton } from "../button/Button";
import tmdbApi, { category, movieType, tvType } from "../../api/tmdbApi";

const MovieGrid = (props) => {
  const [movieItems, setMovieItems] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const { keyword } = useParams();

  useEffect(() => {
    const getListMovie = async () => {
      let response = null;

      if (keyword === undefined) {
        const params = {};
        switch (props.category) {
          case category.movie:
            response = await tmdbApi.getMoviesList(movieType.upcoming, { params });
            break;
          default:
            response = await tmdbApi.getTvList(tvType.popular, { params });
            break;
        }
      } else {
        const params = {
          query: keyword,
        };
        response = await tmdbApi.search(props.category, { params });
      }
      setMovieItems(response.results);
      setTotalPage(response.total_pages);
    };
    getListMovie();
  }, [props.category, keyword]);

  const loadMore = async () => {
    let response = null;
    if (keyword === undefined) {
      const params = {
        page: page + 1,
      };
      switch (props.category) {
        case category.movie:
          response = await tmdbApi.getMoviesList(movieType.upcoming, { params });
          break;
        default:
          response = await tmdbApi.getTvList(tvType.popular, { params });
          break;
      }
    } else {
      const params = {
        page: page + 1,
        query: keyword,
      };
      response = await tmdbApi.search(props.category, { params });
    }
    setMovieItems([...movieItems, ...response.results]);
    setPage(page + 1);
  };

  return (
    <div>
      <div className="section mb-3">
        <MovieSearch
          category={props.category}
          keyword={keyword}
        />
      </div>
      <div className="movie-grid mb-2">
        {movieItems.map((item, i) => (
          <MovieCard
            category={props.category}
            item={item}
            key={i}
          />
        ))}
      </div>
      {page < totalPage ? (
        <div className="movie-grid__loadmore">
          <OutlineButton onClick={loadMore}>Load More</OutlineButton>
        </div>
      ) : null}
    </div>
  );
};

const MovieSearch = (props) => {
  const history = useHistory();
  const [keyword, setKeyword] = useState(props.keyword ? props.keyword : "");

  const search = useCallback(() => {
    if (keyword.trim().length > 0) {
      history.push(`${category[props.category]}/search/${keyword}`);
    }
  }, [keyword, props.category, history]);

  useEffect(() => {
    const searchAction = (e) => {
      e.preventDefault();
      if (e.keyCode === 13) {
        search();
      }
    };
    document.addEventListener("keyup", searchAction);
    return () => {
      document.removeEventListener("keyup", searchAction);
    };
  }, [keyword, search]);

  return (
    <div className="movie-search">
      <Input
        type={"text"}
        placeholder={"Enter your keyword"}
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <Button onClick={search}>Search</Button>
    </div>
  );
};

export default MovieGrid;
