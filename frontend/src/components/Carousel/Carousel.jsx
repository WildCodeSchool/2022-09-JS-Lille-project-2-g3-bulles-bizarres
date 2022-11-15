import { EffectCoverflow } from "swiper";
import axios from "axios";
/* eslint-disable import/no-unresolved */
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
/* eslint-enable import/no-unresolved */
import Card from "@components/Cards/Card";
import { useState, useEffect } from "react";

import "./style.css";

export default function Carousel() {
  const [movies, setMovies] = useState([]);
  const getMovies = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${
          import.meta.env.VITE_SECRET_API_KEY
        }&language=en-US&page=1`
      )
      .then(({ data }) => {
        setMovies(
          data.results.filter((movie) => {
            return !movie.genre_ids.includes(27);
          })
        );
      });
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <Swiper
      modules={[EffectCoverflow]}
      slidesPerView={2}
      navigation
      grabCursor="true"
      centeredSlides="true"
      loop="true"
      coverflowEffect={{
        rotate: 30,
        stretch: 25,
        depth: 250,
      }}
      effect="coverflow"
      initialSlide={3}
    >
      {movies.map((movie) => (
        <SwiperSlide>
          {({ isActive }) => (
            <Card
              title={movie.title}
              overview={movie.overview}
              poster={movie.poster}
              rated={movie.vote_average}
              hoverable={isActive}
            />
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
