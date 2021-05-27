import axios from "axios";
import React, { useState, useEffect } from "react";
import { Card } from "./Card";
import { Numbering } from "./Numbering";

export const Trending = () => {
  const [content, setContent] = useState([]);
  const [page, setPage] = useState(1);

  const fetchTrending = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/week?api_key=4dc27c1c4ad1ee9433439640bf8cb85b&page=${page}`
    );

    console.log(data);
    setContent(data.results);
  };

  useEffect(() => {
    fetchTrending();
    // eslint-disable-next-line
  }, [page]);

  return (
    <div>
      <h2 className="title">Trending</h2>
      <div className="tile">
        {content &&
          content.map((item) => (
            <Card
              key={item.id}
              id={item.id}
              type={item.media_type}
              image={item.poster_path}
              name={item.name || item.title}
              date={item.release_date || item.first_air_date}
              rating={item.vote_average}
            />
          ))}
      </div>
      <Numbering setPage={setPage} />
    </div>
  );
};
