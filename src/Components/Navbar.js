import { Link } from "react-router-dom";
import { SearchBar } from "./SearchBar";

export const Navbar = () => {
  return (
    <div className="head">
      <h1 className="header">
        <span onClick={() => window.scroll(0, 0)} className="brand">
          FMovies
        </span>
      </h1>
      <div className="nav">
        <Link style={{ textDecoration: "none" }} to="/">
          <p>Home</p>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/movies">
          <p>Movies</p>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/tv-series">
          <p>TV-Series</p>
        </Link>
        <SearchBar />
      </div>
      <div className="hide">
        <SearchBar />
      </div>
    </div>
  );
};
