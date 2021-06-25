import { Grid, Container, Typography, Button } from "@material-ui/core";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import { useRouter } from "next/router";
import { useState } from "react";
import Header from "../Header";
import classes from "./Home.module.css";
import Tabs from "./Tabs";
import { getGenre } from "./genre";

const Home = ({
  data,
  trailerData,
  nowPlayingData,
  topRatedData,
  onAirData,
}) => {
  const [tabValue, setTabValue] = useState(0);
  const tabChangeHandler = (e, newValue) => {
    setTabValue(newValue);
  };
  const router = useRouter();
  const genreList = data.genre_ids.map((g) => getGenre(g).toUpperCase());
  const genreStr = `${genreList.splice(0, 2).map((g) => ` ${g}`)}`;
  const trailerUrl = trailerData.find((video) => video.type === "Trailer").key;
  return (
    <>
      <Header transparent staticHeader />
      <div className={classes.container}>
        <img
          src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}
          className={classes.bgImg}
        />
        <Grid container direction="column" className={classes.infoContainer}>
          <Typography variant="h2">
            <strong>{data.original_title || data.original_name}</strong>
          </Typography>
          <Typography
            paragraph
            style={{ marginTop: "-12px", marginLeft: "6px" }}
          >
            {genreStr}
          </Typography>
          <Grid item>
            <Button
              variant="contained"
              size="large"
              color="primary"
              endIcon={<PlayCircleOutlineIcon />}
              className={classes.trailerButton}
              onClick={() =>
                router.push(`https://www.youtube.com/watch?v=${trailerUrl}`)
              }
            >
              <Grid container justify="space-between">
                <Typography>Watch Trailer</Typography>
              </Grid>
            </Button>
          </Grid>
        </Grid>
      </div>

      <Container className={classes.sectionContainer}>
        <Tabs
          nowPlayingData={nowPlayingData}
          topRatedData={topRatedData}
          onAirData={onAirData}
        />
      </Container>
    </>
  );
};

export default Home;
