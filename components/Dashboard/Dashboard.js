import Layout from "../Layout";
import Info from "./Info";
import CastItem from "./CastItem";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import { Grid, Typography, Divider, Hidden, Box } from "@material-ui/core";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

import classes from "./Dashboard.module.css";
import "react-circular-progressbar/dist/styles.css";

const Dashboard = ({ data, crew, cast }) => {
  const theme = useTheme();
  const matchesSm = useMediaQuery(theme.breakpoints.up("sm"));
  const matchesMd = useMediaQuery(theme.breakpoints.up("md"));
  const matchesLg = useMediaQuery(theme.breakpoints.up("lg"));
  const director = crew.find((c) => c.job === "Director");
  const topCast = [...cast].splice(0, 5);
  const date = data.release_date.split("-")[0];
  const genres = data.genres.map((genre, index) => {
    if (index === data.genres.length - 1) {
      return genre.name;
    } else {
      return `${genre.name}, `;
    }
  });

  return (
    <Layout>
      <Grid container justify={matchesLg && "space-around"}>
        <Grid item xs={12} sm={5} lg={3}>
          <img
            src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
            alt={data.original_title}
            className={classes.image}
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
                  {data.original_title}
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
              <Info label="Metascore" value={5} />
              <Info label="Users" value={5} />
            </Grid>

            <Divider flexItem orientation="vertical" />

            <Grid item xs={12} md={5} className={classes.info}>
              <Info label="Genre" value={genres} />
              <Info label="Release Date" value={data.release_date} />
              <Info label="Duration" value={`${data.runtime} Min`} />
            </Grid>
          </Grid>
          <Hidden only="sm">
            <Grid
              container
              justify={matchesLg && "center"}
              className={classes.cast}
            >
              <Grid item xs lg={8}>
                <CastItem
                  name={director.name}
                  image={director.profile_path}
                  director
                />
                {topCast.map((c) => (
                  <CastItem
                    key={c.id}
                    name={c.original_name}
                    image={c.profile_path}
                    character={c.character}
                  />
                ))}
              </Grid>
            </Grid>
          </Hidden>
        </Grid>
        <Hidden only={["xs", "md", "lg"]}>
          <Grid container alignItems={"center"} direction="column">
            <CastItem
              name={director.name}
              image={director.profile_path}
              director
            />
            {topCast.map((c) => (
              <CastItem
                key={c.id}
                name={c.original_name}
                image={c.profile_path}
                character={c.character}
              />
            ))}
          </Grid>
        </Hidden>
      </Grid>
    </Layout>
  );
};

export default Dashboard;
