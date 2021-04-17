import {
  Container,
  Divider,
  Grid,
  IconButton,
  MenuItem,
  TextField,
} from "@material-ui/core";
import axios from "../../axios";
import Carousel from "../../components/Carousel";
import Layout from "../../components/Layout";
import DashboardIcon from "@material-ui/icons/Dashboard";
import FormatAlignLeftIcon from "@material-ui/icons/FormatAlignLeft";

import "swiper/swiper-bundle.min.css";
import { useState } from "react";

const genres = [
  {
    value: 0,
    label: "Genre",
  },
  {
    value: 28,
    label: "Action",
  },
  {
    value: 12,
    label: "Adventure",
  },
  {
    value: 35,
    label: "Comedy",
  },
  {
    value: 19,
    label: "Drama",
  },
];

const Movies = ({ data }) => {
  const [genre, setGenre] = useState(0);

  const { results } = data;
  return (
    <Layout>
      <Carousel data={results} />
      <Grid container justify="center" style={{ marginTop: 48 }}>
        <Grid item xs={10}>
          {/* Content */}

          <Grid container alignItems="center">
            <Grid item xs={1}>
              <TextField
                select
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
                variant="outlined"
                style={{ width: "100%" }}
              >
                {genres.map((g, i) => (
                  <MenuItem key={g.value} value={g.value}>
                    {g.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs style={{ margin: "0 24px" }}>
              <Divider />
            </Grid>

            <Grid item xs={1}>
              <Grid container spacing={1}>
                <Grid item>
                  <IconButton className="icon">
                    <DashboardIcon />
                  </IconButton>
                </Grid>
                <Grid item>
                  <IconButton className="icon">
                    <FormatAlignLeftIcon />
                  </IconButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          {/* Content */}
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Movies;

export const getServerSideProps = async () => {
  const response = await axios.get("/trending/movie/day");

  return {
    props: { data: response.data },
  };
};
