import axios from "axios";
import React, { useState, useEffect } from "react";
import { Card } from "./Card";
import { Numbering } from "./Numbering";
import { useKeyword } from "../context/KeywordProvider";

export const Search = () => {
  const { keyword } = useKeyword();
  const [content, setContent] = useState([]);
  const [numOfPages, setNumOfPages] = useState();
  const [page, setPage] = useState(1);

  console.log("Search.js: ", keyword);

  const fetchSearch = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/search/multi?api_key=4dc27c1c4ad1ee9433439640bf8cb85b&language=en-US&query=${keyword}&page=${page}&include_adult=false`
    );

    console.log(data);
    setNumOfPages(data.total_pages);
    setContent(data.results);
  };

  useEffect(() => {
    fetchSearch();
    // eslint-disable-next-line
  }, [page, keyword]);

  return (
    <div>
      <h2 className="title">Search</h2>
      <div className="tile">
        {content.length ? (
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
          ))
        ) : (
          <h2>No media found</h2>
        )}
      </div>
      <Numbering setPage={setPage} numOfPages={numOfPages} />
    </div>
  );
};
