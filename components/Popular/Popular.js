import {
  Container,
  Grid,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Divider,
  IconButton,
  Typography,
} from "@material-ui/core";
import DashboardIcon from "@material-ui/icons/Dashboard";
import FormatAlignLeftIcon from "@material-ui/icons/FormatAlignLeft";
import { useState } from "react";
import Item from "./Item";
import classes from "./Popular.module.css";

const genres = [
  { id: 28, name: "Action" },
  { id: 12, name: "Adventure" },
  { id: 16, name: "Animation" },
  { id: 35, name: "Comedy" },
  { id: 80, name: "Crime" },
  { id: 99, name: "Documentary" },
  { id: 18, name: "Drama" },
  { id: 10751, name: "Family" },
  { id: 14, name: "Fantasy" },
  { id: 36, name: "History" },
  { id: 27, name: "Horror" },
  { id: 10402, name: "Music" },
  { id: 9648, name: "Mystery" },
  { id: 10749, name: "Romance" },
  { id: 878, name: "Science Fiction" },
  { id: 10770, name: "TV Movie" },
  { id: 53, name: "Thriller" },
  { id: 10752, name: "War" },
  { id: 37, name: "Western" },
];

const Popular = ({ data, tv }) => {
  console.log(data[0].genre_ids.includes(18));
  const [genre, setGenre] = useState("");

  const handleChange = (event) => {
    setGenre(event.target.value);
  };
  return (
    <>
      <Container className={classes.container}>
        <Grid container direction="column" spacing={4}>
          <Grid item xs>
            <Grid container alignItems="center" spacing={1}>
              <Grid item xs={3} sm={2} md={1}>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel>Genre</InputLabel>
                  <Select value={genre} onChange={handleChange} label="Genre">
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    {genres.map((g) => (
                      <MenuItem key={g.id} value={g.id}>
                        {g.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs>
                <Divider />
              </Grid>

              <Grid item lg={1}>
                <Grid container justify="space-between">
                  <Grid item>
                    <IconButton className="icon">
                      <FormatAlignLeftIcon />
                    </IconButton>
                  </Grid>
                  <Grid item>
                    <IconButton className="icon">
                      <DashboardIcon />
                    </IconButton>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid item>
            <Grid container direction="column" spacing={2}>
              <Grid item>
                <Grid container alignItems="center">
                  <Grid item>
                    <Typography>
                      <strong>POPULAR RIGHT NOW</strong>
                    </Typography>
                  </Grid>
                  <Grid item xs></Grid>
                  <Grid item>
                    <Typography variant="body2">{`SEE ALL >`}</Typography>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item>
                <Grid container spacing={2}>
                  {genre === ""
                    ? data.map((item, index) => {
                        if (index < 12) {
                          return (
                            <Item
                              title={item.original_title || item.original_name}
                              releaseDate={
                                item.release_date || item.first_air_date
                              }
                              image={item.backdrop_path}
                              id={item.id}
                              key={item.id}
                              tv={tv}
                            />
                          );
                        }
                      })
                    : data
                        .filter((item) => item.genre_ids.includes(genre))
                        .map((item) => (
                          <Item
                            title={item.original_title || item.original_name}
                            releaseDate={
                              item.release_date || item.first_air_date
                            }
                            image={item.backdrop_path}
                            id={item.id}
                            key={item.id}
                            tv={tv}
                          />
                        ))}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Popular;
