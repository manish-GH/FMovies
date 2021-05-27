import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeIcon from "@material-ui/icons/Home";
import MovieIcon from "@material-ui/icons/Movie";
import TvIcon from "@material-ui/icons/Tv";

const useStyles = makeStyles({
  root: {
    width: "100vw",
    bottom: "0",
    backgroundColor: "#0f131b",
    color: "white",
  },
});

export const BottomNavbar = () => {
  const history = useHistory();
  const classes = useStyles();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (value === 0) {
      history.push("/");
    } else if (value === 1) {
      history.push("/movies");
    } else {
      history.push("/tv-series");
    }
  }, [value, history]);

  return (
    <div className="footer">
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabel
        className={classes.root}
      >
        <BottomNavigationAction
          style={{ color: "white" }}
          label="Home"
          icon={<HomeIcon />}
        />
        <BottomNavigationAction
          style={{ color: "white" }}
          label="Movies"
          icon={<MovieIcon />}
        />
        <BottomNavigationAction
          style={{ color: "white" }}
          label="TV Series"
          icon={<TvIcon />}
        />
      </BottomNavigation>
    </div>
  );
};
