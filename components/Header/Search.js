import { useState, useEffect } from "react";
import {
  Container,
  Grid,
  TextField,
  IconButton,
  CircularProgress,
} from "@material-ui/core";
import Image from "next/image";
import CloseIcon from "@material-ui/icons/Close";
import axios from "../../axios";
import { useRouter } from "next/router";
import Scrollbar from "../CustomScrollbar";

import classes from "./Header.module.css";

const Search = ({ onClick }) => {
  const router = useRouter();
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleClose = () => {
    onClick();
    setResults([]);
    setValue("");
  };
  const imageClickHandler = (id, mediaType) => {
    const href = `/${mediaType === "tv" ? "series" : "movies"}/${id}`;
    router.push(href);
    handleClose();
  };

  useEffect(() => {
    const fetch = async () => {
      if (value !== "") {
        setLoading(true);
        const response = await axios.get("/search/multi", {
          params: {
            query: value,
            api_key: "9d881950d4284d313b1c2f8cae4ba41e",
          },
        });
        setResults(response.data.results);
        setLoading(false);
      } else {
        setResults([]);
      }
    };
    fetch();
  }, [value]);

  return (
    <Container className={classes.searchContainer}>
      <Grid container alignItems="center">
        <Grid item xs></Grid>
        <Grid item xs={6} sm={4} md={3}>
          <TextField
            variant="outlined"
            placeholder="Enter Movie, Serie Title"
            label="Search"
            className={classes.searchField}
            value={value}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs>
          <Grid container justify="flex-end">
            <Grid item>
              <IconButton className="icon" onClick={handleClose}>
                <CloseIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {loading ? (
        <Grid container justify="center">
          <Grid item>
            <CircularProgress />
          </Grid>
        </Grid>
      ) : (
        <Grid
          container
          justify="center"
          alignItems="center"
          className={classes.resultsContainer}
        >
          <Scrollbar>
            <Grid container>
              {results.map((result, index) => {
                if (index < 8) {
                  return (
                    <>
                      {result.poster_path && (
                        <Grid item xs={6} sm={4} md={3}>
                          <Image
                            src={`https://image.tmdb.org/t/p/w300${result.poster_path}`}
                            alt={result.id}
                            key={result.id}
                            width={300}
                            height={400}
                            className={classes.resultImage}
                            onClick={() =>
                              imageClickHandler(result.id, result.media_type)
                            }
                          />
                        </Grid>
                      )}
                    </>
                  );
                }
              })}
            </Grid>
          </Scrollbar>
        </Grid>
      )}
    </Container>
  );
};

export default Search;
