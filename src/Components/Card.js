import React from "react";
import { Badge } from "@material-ui/core";
import ContentModal from "./ContentModal";

export const Card = ({ id, type, image, name, date, rating }) => {
  return (
    <ContentModal type={type} id={id}>
      <Badge
        badgeContent={rating}
        color={rating > 7 ? "primary" : "secondary"}
      />
      <img
        className="image"
        src={`https://image.tmdb.org/t/p/w300${image}`}
        alt={`${name} POSTER`}
      />
      <b className="name">{name}</b>
      <div className="type-date">
        <span className="type">
          {type === "tv" ? "TV Series" : "Movie"}
          <span className="date">{date?.substring(0, 4)}</span>
        </span>
      </div>
    </ContentModal>
  );
};
