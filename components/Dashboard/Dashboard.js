import Layout from "../Layout";
import Info from "./Info";
import CastItem from "./CastItem";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import {
  Grid,
  Typography,
  Divider,
  Box,
  CircularProgress,
} from "@material-ui/core";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

import classes from "./Dashboard.module.css";
import "react-circular-progressbar/dist/styles.css";
import { useEffect, useState } from "react";

const Dashboard = ({ data, crew, cast, tv }) => {
  const [loading, setLoading] = useState(true);
  const theme = useTheme();
  const matchesSm = useMediaQuery(theme.breakpoints.up("sm"));
  const matchesMd = useMediaQuery(theme.breakpoints.up("md"));
  const matchesLg = useMediaQuery(theme.breakpoints.up("lg"));
  const director = crew.find((c) => c.job === "Director");
  const topCast = [...cast].splice(0, tv ? 6 : 5);
  const date = tv ? data.first_air_date : data.release_date.split("-")[0];
  const genres = data.genres.map((genre, index) => {
    if (index === data.genres.length - 1) {
      return genre.name;
    } else {
      return `${genre.name}, `;
    }
  });

  useEffect(() => {
    setTimeout(() => setLoading(false), 1250);
  }, []);

  return (
    <Layout>
      <Grid container justify={matchesLg && "space-around"}>
        <Grid item xs={12} sm={5} lg={3}>
          {loading && (
            <div className={classes.spinnerContainer}>
              <CircularProgress />
            </div>
          )}
          <img
            src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
            alt={data.original_title}
            className={classes.image}
            onLoad={() => setLoading(false)}
          />
        </Grid>
        <Grid item xs={12} sm={7} className={classes.movieInfo}>
          <Box>
            <Grid
              container
              alignItems="center"
              justify={!matchesSm && "center"}
            >
              <Grid item>
                <Typography variant="h4" gutterBottom>
                  {data.original_title || data.name}
                </Typography>
              </Grid>
              <Grid item>
                <Box margin=" 0 16px">
                  <Typography variant="h5" gutterBottom>
                    ({date})
                  </Typography>
                </Box>
              </Grid>
              <Grid item>
                <Typography
                  color="textSecondary"
                  paragraph
                  align={matchesSm ? "left" : "center"}
                >
                  {data.overview}
                </Typography>
              </Grid>
            </Grid>
          </Box>

          <Grid
            container
            alignItems="center"
            justify={!matchesMd && "center"}
            className={classes.infoContainer}
          >
            <Grid item xs={3} md={2}>
              <CircularProgressbar
                value={data.vote_average * 10}
                text={data.vote_average}
                styles={buildStyles({
                  pathColor: `#FAE807`,
                  textColor: "white",
                  trailColor: "#373737",
                })}
              />
            </Grid>
            <Grid item xs={12} md={4} className={classes.info}>
              <Info label="Rating" value={data.vote_average} />

              <Info label="Raters" value={data.vote_count} />
              {tv ? (
                <Info label="Seasons" value={data.number_of_seasons} />
              ) : (
                <Info label="Popularity" value={data.popularity} />
              )}
            </Grid>

            <Divider flexItem orientation="vertical" />

            <Grid item xs={12} md={5} className={classes.info}>
              <Info label="Genre" value={genres} />
              <Info label="Release Date" value={data.release_date} />
              <Info
                label={tv ? "Eposide Duration" : "Duration"}
                value={`${tv ? data.episode_run_time : data.runtime} Min`}
              />
            </Grid>
          </Grid>

          {/* cast */}

          <Grid container className={classes.cast}>
            {!tv && (
              <CastItem
                name={director.original_name}
                image={director.profile_path}
                character="Director"
              />
            )}
            {topCast.map((c) => (
              <CastItem
                image={c.profile_path}
                name={c.original_name}
                character={c.character}
                key={c.id}
              />
            ))}
          </Grid>

          {/* cast */}
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Dashboard;
