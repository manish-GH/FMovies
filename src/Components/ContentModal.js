import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import axios from "axios";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import YouTubeIcon from "@material-ui/icons/YouTube";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    color: "white",
    width: "90%",
    height: "80%",
    border: "1px solid #282c34",
    backgroundColor: "#04080c",
    borderRadius: 10,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(1, 1, 3),
  },
}));

export default function ContentModal({ children, type, id }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState([]);
  const [trailer, setTrailer] = useState([]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const fetchData = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${type}/${id}?api_key=4dc27c1c4ad1ee9433439640bf8cb85b&language=en-US`
    );

    setContent(data);
  };

  const fetchTrailer = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${type}/${id}/videos?api_key=4dc27c1c4ad1ee9433439640bf8cb85b&language=en-US`
    );

    setTrailer(data.results[0]?.key);
  };

  useEffect(() => {
    fetchData();
    fetchTrailer();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <div type="button" onClick={handleOpen} className="card">
        {children}
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          {content && (
            <div className={classes.paper}>
              <div className="contentModal">
                <img
                  className="content-image"
                  src={`https://image.tmdb.org/t/p/w500/${content.poster_path}`}
                  alt={content.name || content.title}
                />
                <img
                  className="content-image-landscape"
                  src={`https://image.tmdb.org/t/p/w500/${content.backdrop_path}`}
                  alt={content.name || content.title}
                />
                <div className="content-about">
                  <div className="content-title">
                    <span>
                      {content.name || content.title}(
                      {(
                        content.first_air_date ||
                        content.release_date ||
                        "----"
                      ).substring(0, 4)}
                      )
                    </span>
                  </div>

                  <div className="rating-time">
                    <div>
                      <span className="imdb">IMDb</span> {content.vote_average}
                    </div>
                    <div className="runtime">
                      <AccessTimeIcon fontSize="small" />
                      {content.episode_run_time
                        ? `${content.episode_run_time}m`
                        : `${Math.floor(content.runtime / 60)}h 
                    ${content.runtime % 60}m`}
                    </div>
                  </div>

                  <div className="genre-display">
                    Genres:
                    <span className="genre-list">
                      {content.genres?.map((item) => item.name)?.toString()}
                    </span>
                  </div>

                  <div className="description">{content.overview}</div>

                  <Button
                    variant="contained"
                    startIcon={<YouTubeIcon />}
                    color="secondary"
                    target="__blank"
                    href={`https://www.youtube.com/watch?v=${trailer}`}
                  >
                    Watch the Trailer
                  </Button>
                </div>
              </div>
            </div>
          )}
        </Fade>
      </Modal>
    </div>
  );
}
