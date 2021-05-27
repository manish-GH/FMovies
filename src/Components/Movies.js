import axios from "axios";
import React, { useState, useEffect } from "react";
import { Card } from "./Card";
import { Numbering } from "./Numbering";
import { Genres } from "./Genres";
import useGenres from "../hooks/useGenres";

export const Movies = () => {
  const [content, setContent] = useState([]);
  const [page, setPage] = useState(1);
  const [numOfPages, setNumOfPages] = useState();
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [genres, setGenres] = useState([]);
  const genreforURL = useGenres(selectedGenres);

  const fetchMovies = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=4dc27c1c4ad1ee9433439640bf8cb85b&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate&page=${page}&with_genres=${genreforURL}`
    );

    console.log(data);
    setContent(data.results);
    setNumOfPages(data.total_pages);
  };

  useEffect(() => {
    fetchMovies();
    // eslint-disable-next-line
  }, [page, genreforURL]);

  return (
    <div>
      <h2 className="title">Movies</h2>
      <Genres
        type="movie"
        selectedGenres={selectedGenres}
        setSelectedGenres={setSelectedGenres}
        genres={genres}
        setGenres={setGenres}
        setPage={setPage}
      />
      <div className="tile">
        {content &&
          content.map((item) => (
            <Card
              key={item.id}
              id={item.id}
              type="movie"
              image={item.poster_path}
              name={item.title}
              date={item.release_date}
              rating={item.vote_average}
            />
          ))}
      </div>
      <Numbering setPage={setPage} numOfPages={numOfPages} />
    </div>
  );
};
