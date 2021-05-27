import React, { useEffect } from "react";
import axios from "axios";
import { Chip } from "@material-ui/core";

export const Genres = ({
  type,
  selectedGenres,
  setSelectedGenres,
  genres,
  setGenres,
  setPage,
}) => {
  const fetchGenres = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/genre/${type}/list?api_key=4dc27c1c4ad1ee9433439640bf8cb85b&language=en-US`
    );

    setGenres(data.genres);
  };

  const handleAdd = (genre) => {
    setSelectedGenres([...selectedGenres, genre]);
    setGenres(genres.filter((item) => item !== genre));
    setPage(1);
  };

  const handleRemove = (genre) => {
    setGenres([...genres, genre]);
    setSelectedGenres(selectedGenres.filter((item) => item !== genre));
    setPage(1);
  };

  useEffect(() => {
    fetchGenres();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      {selectedGenres.map((genre) => (
        <Chip
          key={genre.id}
          label={genre.name}
          style={{ margin: 2 }}
          size="small"
          color="primary"
          clickable
          onDelete={() => handleRemove(genre)}
        />
      ))}
      {genres.map((genre) => (
        <Chip
          key={genre.id}
          label={genre.name}
          style={{ margin: 2 }}
          size="small"
          clickable
          onClick={() => handleAdd(genre)}
        />
      ))}
    </div>
  );
};
