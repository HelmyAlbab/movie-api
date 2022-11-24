import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "./detail.scss";

import tmdbApi from "../../api/tmdbApi";
import apiConfig from "../../api/apiConfig";
import CastList from "./CastList";
import VideoList from "./VideoList";

const Detail = () => {
  const { category, id } = useParams();
  const [detailItem, setDetailItem] = useState(null);

  useEffect(() => {
    const getDetail = async () => {
      const response = await tmdbApi.detail(category, id, { params: {} });
      setDetailItem(response);
      window.scrollTo(0, 0);
    };
    getDetail();
  }, [category, id]);

  return (
    <>
      {detailItem && (
        <>
          <div
            className="banner"
            style={{ backgroundImage: `url(${apiConfig.originalImage(detailItem.backdrop_path || detailItem.poster_path)})` }}
          ></div>
          <div className="mb-3 movie-content container">
            <div className="movie-content__poster">
              <div
                className="movie-content__poster__img"
                style={{ backgroundImage: `url(${apiConfig.originalImage(detailItem.poster_path || detailItem.backdrop_path)})` }}
              ></div>
            </div>
            <div className="movie-content__info">
              <div className="title">{detailItem.title || detailItem.name}</div>
              <div className="genres">
                {detailItem.genres &&
                  detailItem.genres.slice(0, 5).map((genre, i) => (
                    <span
                      className="genres__item"
                      key={i}
                    >
                      {genre.name}
                    </span>
                  ))}
              </div>
              <p className="overview">{detailItem.overview}</p>
              <div className="cast">
                <h2>Casts</h2>
                <CastList id={detailItem.id} />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="videos section mb-3">
              <VideoList id={detailItem.id} />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Detail;
